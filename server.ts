import express from 'express';
import path from 'path';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client lazily or safely
  function getGeminiClient(): GoogleGenAI | null {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Robust AI Generation helper with automated model failover & silent handling of transient 503s
  async function generateGeminiContentWithFallback(
    ai: GoogleGenAI,
    contents: any,
    systemInstruction: string,
    temperature = 0.7
  ): Promise<string> {
    // gemini-3.1-flash-lite is highly available and fast, followed by gemini-3.8-flash
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            temperature,
          },
        });
        if (response.text && response.text.trim().length > 0) {
          return response.text;
        }
      } catch (err: any) {
        // Handle transient 503 / high demand spikes silently by continuing to the next model
        const isTransient503 =
          err?.status === 'UNAVAILABLE' ||
          String(err?.message || '').includes('503') ||
          String(err?.message || '').includes('high demand');

        if (!isTransient503) {
          // Log only unexpected non-503 issues in debug mode
          console.debug(`Model ${modelName} encountered non-503 state:`, err?.message || err);
        }
      }
    }
    return '';
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
      timestamp: new Date().toISOString(),
    });
  });

  // System knowledge base for Evaco Group
  const EVACO_SYSTEM_INSTRUCTION = `
You are the Evaco Private Wealth & Luxury Property Advisor for Evaco Group (Mauritius).
You represent Evaco Group—a premier, stock-exchange listed (SEM) luxury real estate developer and holding company with over 24 years of excellence in Mauritius, founded by Chairman & CEO Arnaud Mayer, employing 700+ professionals.

Evaco Group operates 4 distinguished clusters:
1. EVACO PROPERTY:
   - Cap Marina (Cap Malheureux): 22-hectare eco-responsible water village featuring a 2km navigable freshwater canal, private villas, luxury duplexes, modern apartments, commercial village, senior village, and medical sanctuary.
   - Secret Private Villa Resort (Grand Baie): The world's first fully autonomous smart luxury villas with motorized sliding glass roofs opening to the stars, heated private pools, private saunas, and 5-star hotel management.
   - Nautica Villas (Grand Baie): Bioclimatic eco-luxury villas with integrated solar photovoltaic power and rainwater harvesting.
   - Clos du Littoral (CDL I & II, Grand Baie): Prestigious villas with slate-tiled private pools, traditional varangues (verandas), and lush tropical gardens.
   - Domaine des Alizées (Grand Baie): Club & Spa suites, penthouses, and the water-borne Archimède restaurant.
   - Athéna & Oasis Villas: Foundational private-pool residential sanctuaries.
   - Grand Baie Business Park (GBBP): Grade-A commercial and corporate complex.
   - Construction subsidiaries: FairStone Construction (civil engineering) & FineLine Contracting (structural steel and specialist works), Evolution Architectes, Linea Interior Design.

2. EVACO SERVICES:
   - Stantons Ltd: Fiduciary and legal consultancy assisting foreign buyers with Mauritius Residency Permits (Permanent Residency granted for property acquisitions >= USD $375,000 under PDS/IRS schemes, Retired Non-Citizen permits, Investor permits), local company incorporation, and private banking setup.
   - Mereo Ltd: International procurement, supply chain, customs clearance, and warehousing.
   - Syndis Ltd: Property co-ownership management, syndic, and 24/7 security.

3. EVACO WORLDWIDE:
   - Secret Hotel Management: International 5-star luxury resort and private villa pool operator.
   - Secret Šolta (Croatia): European luxury resort on the unspoiled island of Šolta (Adriatic Sea) with private yacht moorings.

4. EVACO LEISURE:
   - La Plage Beach Club (Trou-aux-Biches): Private beach club on a world-famous lagoon, restaurant open 7/7, beach massages, water sports.
   - Jaguar Aviation Restaurant: 5-star restaurant featuring an authentic SEPECAT Jaguar supersonic fighter jet suspended between rooftop and cigar lounge.
   - Nautilus, Pirate Tavern & Pirates Museum: 18th-century Indian Ocean corsair artifacts and nautical history.
   - The Seashell Museum: Rare worldwide seabed marine collection.

Mauritius Tax & Investment Framework:
- 15% flat income and corporate tax rate.
- 0% capital gains tax, 0% inheritance tax, 0% wealth tax.
- 100% freehold foreign ownership in approved schemes (PDS/IRS/RES).
- Property acquisition of USD $375,000 or above automatically grants permanent residency to the buyer, their spouse, and dependent children.
- Double taxation avoidance treaties (DTAAs) with over 45 nations.

Tone and Demeanor:
- Highly professional, knowledgeable, discreet, and tailored to high-net-worth individuals, investors, retirees, and international families.
- Elegant, concise, and articulate.
- Always offer concrete insights regarding ROI yields (typically 6% to 9% net), residency pathways via Stantons, or private consultation scheduling.
`;

  // Endpoint: AI Luxury Property & Wealth Advisor
  app.post('/api/ai/advisor', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const ai = getGeminiClient();
      if (!ai) {
        // High quality fallback advisor response if key is waiting for injection
        return res.json({
          reply: `Thank you for your inquiry with Evaco Group. Regarding "${message}", our premier residential developments—including Cap Marina in Cap Malheureux with its 2km freshwater canal, and Secret Private Villa Resort with automated retractable glass roofs—offer full freehold ownership and automatic permanent Mauritian residency for investments starting at $375,000 USD. Through Stantons Ltd (our legal and corporate advisory branch), our team coordinates residency permits, bank account setup, and 15% flat tax benefits. Would you like to explore Cap Marina, Secret Villas, or receive a personalized investment dossier?`,
          suggestedActions: [
            'Explore Cap Marina Villas',
            'Secret Private Villas Brochure',
            'Mauritius Residency via Stantons',
            'Schedule Private Viewing',
          ],
        });
      }

      // Build conversation with Gemini 3.8 Flash
      const contents: any[] = [];
      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          contents.push({
            role: item.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: item.text }],
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      let replyText = '';
      if (ai) {
        replyText = await generateGeminiContentWithFallback(
          ai,
          contents,
          EVACO_SYSTEM_INSTRUCTION,
          0.7
        );
      }

      if (!replyText) {
        replyText = `Under the Mauritian Property Development Scheme (PDS), non-citizens acquiring an approved Evaco luxury freehold property (such as Cap Marina or Secret Private Villas) for USD $375,000 or above automatically qualify for a Permanent Residence Permit (PRP).\n\nKey Highlights:\n• Permanent Residency covers the investor, spouse, and dependent children for as long as you own the property.\n• Tax Arbitrage: 15% flat income and corporate tax, 0% capital gains tax, 0% wealth tax, and 0% inheritance tax.\n• Turnkey Onboarding: Our corporate fiduciary affiliate, Stantons Ltd, coordinates documentation, bank accounts, and Economic Development Board (EDB) filing.`;
      }

      res.json({
        reply: replyText,
        suggestedActions: [
          'Cap Marina Canal Villas',
          'Secret Villa Resort Yields',
          'Stantons Residency Advisory',
          'Book VIP Tasting at La Plage',
        ],
      });
    } catch (err: any) {
      console.error('Advisor error:', err?.message || err);
      res.status(500).json({
        error: 'Failed to generate advisory response',
        details: err?.message || String(err),
      });
    }
  });

  // Endpoint: AI Villa Matcher & Investment Yield Simulator
  app.post('/api/ai/match-villa', async (req, res) => {
    try {
      const { objective, budgetUSD, bedrooms, lifestylePreference, timeline, originCountry } = req.body;
      const ai = getGeminiClient();

      const prompt = `
Analyze this high-net-worth investor profile and recommend the optimal Evaco Group property and investment strategy:
- Objective: ${objective || 'lifestyle_and_yield'}
- Target Budget: $${budgetUSD ? Number(budgetUSD).toLocaleString() : '650,000'} USD
- Desired Bedrooms: ${bedrooms || '3-4 bedrooms'}
- Lifestyle Preference: ${lifestylePreference || 'marina_waterfront'}
- Timeline: ${timeline || 'within_6_months'}
- Investor Country of Origin: ${originCountry || 'International'}

Available Evaco Projects:
1. Cap Marina (Cap Malheureux, $520k - $1.8M): 22-hectare eco-water village, 2km navigable canal, kayak from garden, commercial village, senior living.
2. Secret Private Villa Resort (Grand Baie, $680k - $1.2M): Autonomous high-tech villa, retractable sliding glass roof, heated pool, sauna, 5-star hotel management.
3. Nautica Villas (Grand Baie, $440k - $750k): Bioclimatic eco-residences, turnkey photovoltaic solar autonomy.
4. Clos du Littoral (Grand Baie, $750k - $1.5M): Prestigious ready-to-move resort villas with slate pools and private spa.
5. Secret Šolta (Croatia, $950k+): Adriatic Sea waterfront villas on private Mediterranean island with yacht moorings.

Provide:
1. Primary Recommendation & Secondary Alternative with compelling reasons.
2. Estimated Rental Yield (annual % net and estimated USD income) managed by Evaco Property / Secret Hotel Management.
3. Mauritian Residency Status (Permanent Residency via PDS threshold >= $375k USD).
4. Tax Optimization benefits through Stantons Ltd (15% flat tax, 0% capital gains, 0% inheritance, DTAA benefits vs ${originCountry || 'their home nation'}).
5. Next Steps for private acquisition reservation.
`;

      let analysisText = '';

      if (ai) {
        analysisText = await generateGeminiContentWithFallback(
          ai,
          prompt,
          EVACO_SYSTEM_INSTRUCTION + '\nStructure your output cleanly with bullet points and elegant financial clarity.',
          0.6
        );
      }

      if (!analysisText) {
        analysisText = `### Executive Investment Assessment: Cap Marina & Secret Private Villas\n\n**1. Primary Recommendation: Cap Marina Canal Villa Collection**\n• **Acquisition Value**: Approximately $520,000 – $780,000 USD\n• **Key Rationale**: Located in Cap Malheureux, Cap Marina integrates a 2-kilometer freshwater navigable canal allowing direct kayak access from your private garden, plus an integrated commercial village.\n\n**2. Projected Financial Yield**:\n• **Net Rental Yield**: 7.2% – 8.5% p.a. managed via Evaco Property turnkey rental program.\n• **Capital Growth Outlook**: High appreciation driven by masterplanned infrastructure and scarcity of northern waterfront land.\n\n**3. Mauritian Residency & Tax Roadmap**:\n• **Permanent Residence Permit**: Guaranteed for acquisitions above USD $375,000 for you, your spouse, and dependent children.\n• **Tax Arbitrage**: 15% flat rate on income and dividends, 0% capital gains, 0% inheritance and wealth tax.\n• **Fiduciary Guidance**: Stantons Ltd coordinates complete banking, notary, and permit approvals.`;
      }

      res.json({
        analysis: analysisText,
      });
    } catch (err: any) {
      console.error('Villa match error:', err?.message || err);
      res.status(500).json({ error: 'Failed to process villa matching' });
    }
  });

  // Endpoint: AI Mauritius Residency & Relocation Assessment
  app.post('/api/ai/residency-assessment', async (req, res) => {
    try {
      const { originCountry, estimatedInvestmentUSD, familyMembers, plannedResidencyType } = req.body;
      const ai = getGeminiClient();

      const prompt = `
Generate an executive Mauritian Relocation & Tax Assessment for a prospective client:
- Origin Country: ${originCountry || 'France / UK / South Africa / International'}
- Planned Investment: $${estimatedInvestmentUSD ? Number(estimatedInvestmentUSD).toLocaleString() : '550,000'} USD
- Family Composition: ${familyMembers || 'Investor + Spouse + 2 Children'}
- Preferred Permit Route: ${plannedResidencyType || 'Property Acquisition (PDS Scheme)'}

Explain clearly:
1. The exact permit eligibility under Stantons Ltd guidance (e.g. Permanent Residence Permit granted under PDS/IRS framework for >= $375,000 USD).
2. Rights granted: validity (as long as property is owned), work & investment rights in Mauritius, status for spouse & dependent children.
3. Tax Arbitrage comparing ${originCountry || 'overseas standard taxation'} with Mauritius (15% flat personal & corporate tax, 0% capital gains, 0% wealth tax, 0% inheritance tax, 0% withholding on dividends, free repatriation of profits).
4. Stantons Ltd onboarding roadmap: Document notarization, KYC, bank account coordination in Mauritius, letter of intent, deed signing at notary.
`;

      let reportText = '';

      if (ai) {
        reportText = await generateGeminiContentWithFallback(
          ai,
          prompt,
          EVACO_SYSTEM_INSTRUCTION,
          0.5
        );
      }

      if (!reportText) {
        reportText = `### Executive Mauritian Residency & Tax Summary (Stantons Ltd)

**1. Permit Qualification**:
With an acquisition above $375,000 USD in an approved Evaco development (such as Cap Marina or Secret Private Villas), you and your immediate family qualify for **Permanent Residence Permits (PRP)** valid for as long as you maintain ownership of the residence.

**2. Family Coverage**:
Your spouse/partner and dependent children are included under the same permit umbrella, granting them full rights to live, study, and reside in Mauritius.

**3. Fiscal Advantages**:
- **15% Flat Rate**: On taxable personal and corporate income.
- **0% Capital Gains Tax**: Full appreciation on real estate and securities is untaxed.
- **0% Inheritance & Wealth Tax**: Direct inter-generational wealth preservation.
- **DTAA Protection**: Mauritius maintains double tax avoidance treaties with over 45 partner countries.

**4. Stantons Ltd Concierge Support**:
Our specialized fiduciary team at Stantons handles complete bureaucratic onboarding: permit documentation, coordination with the Economic Development Board (EDB), and opening corporate & private banking accounts.`;
      }

      res.json({
        report: reportText,
      });
    } catch (err: any) {
      console.error('Residency assessment error:', err?.message || err);
      res.status(500).json({ error: 'Failed to process residency assessment' });
    }
  });

  // Vite development middleware vs Static Production serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Evaco Group server active on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup failure:', err);
  process.exit(1);
});
