import { Project, ClusterInfo, CelebrityTestimonial, VideoItem } from '../types';

export const EVACO_STATS = [
  { label: 'Years of Excellence', value: '24+', detail: 'Pioneering luxury in Mauritius since 2001' },
  { label: 'Group Workforce', value: '700+', detail: 'Engineers, architects & hospitality staff' },
  { label: 'Delivered Residences', value: '650+', detail: 'High-end turnkey villas & luxury apartments' },
  { label: 'Land & Masterplans', value: '150+ Ha', detail: 'Including the 22-hectare Cap Marina village' },
  { label: 'Capital Market Standing', value: 'SEM Listed', detail: 'Stock Exchange of Mauritius listed notes' },
  { label: 'Global Accreditation', value: 'AIPP Member', detail: 'Association of International Property Professionals' },
];

export const PROJECTS: Project[] = [
  {
    id: 'cap-marina',
    name: 'Cap Marina',
    subtitle: 'An eco-responsible water village in the North of Mauritius',
    cluster: 'property',
    location: 'Cap Malheureux, Mauritius',
    country: 'Mauritius',
    status: 'Available',
    startingPriceUSD: 520000,
    startingPriceMUR: 24500000,
    startingPriceEUR: 475000,
    bedrooms: '2 to 5 Bedrooms',
    surfaceArea: '190 m² - 540 m²',
    thumbnail: '/assets/evaco/marina.jpg',
    gallery: [
      '/assets/evaco/marina.jpg',
      '/assets/evaco/CDL.jpg',
      '/assets/evaco/Clos-du-Litoral_050-LR.jpg',
      '/assets/evaco/DDA_Gallery.jpg'
    ],
    videoId: 'WPm47r3hDH8',
    overview: 'Located in Cap Malheureux against the backdrop of the famous red-roofed church and Coin de Mire island, Cap Marina spans over 22 hectares. It introduces an extraordinary 2-kilometer freshwater canal allowing homeowners to kayak from their private gardens to the community center. Cap Marina integrates luxury villas, duplexes, modern apartments, a commercial village with artisanal boutiques, fine dining, a medical center, and an eco-friendly park.',
    keyFeatures: [
      '2 km navigable freshwater ecological canal',
      'Private swimming pool and landscaped tropical garden for every villa',
      'Commercial village with gourmet restaurants, bakery & pharmacy',
      'Medical & wellness sanctuary with senior care options',
      'Direct beach access minutes away from Cap Malheureux lagoon'
    ],
    investmentPerks: [
      'Permanent Mauritian Residence Permit for buyer, spouse, and dependents',
      '15% flat income and corporate tax rate',
      '0% capital gains tax and 0% inheritance tax',
      'Turnkey rental management yield estimated at 7.2% net'
    ],
    residencyEligible: true,
    architecturalStyle: 'Eco-Tropical Contemporary with basalt stonework and timber accents',
    ecoFeatures: ['Photovoltaic solar generation', 'Rainwater harvesting and canal bio-filtration', 'Indigenous botanical preservation']
  },
  {
    id: 'secret-private-villas',
    name: 'Secret Private Villa Resort',
    subtitle: 'World-first fully autonomous high-tech private sanctuary',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Few Units Left',
    startingPriceUSD: 680000,
    startingPriceMUR: 31900000,
    startingPriceEUR: 620000,
    bedrooms: '1 to 2 Suites',
    surfaceArea: '145 m² - 260 m²',
    thumbnail: '/assets/evaco/Secret_Project.jpg',
    gallery: [
      '/assets/evaco/Secret_Project.jpg',
      '/assets/evaco/Secret_Project_1.jpg',
      '/assets/evaco/Secret-1.jpg',
      '/assets/evaco/Secret_latest-news.jpg'
    ],
    videoId: 'WPm47r3hDH8',
    overview: 'Secret Private Villa Resort is a masterpiece of precision engineering and discreet luxury. Nestled in a secluded enclave in Grand Baie, each villa is an independent cocoon equipped with cutting-edge home automation: a motorized sliding glass roof that opens your living salon to the starlit sky, an intelligent heated private pool, illuminated fountains, and a secluded private sauna.',
    keyFeatures: [
      'Motorized sliding retractable glass roof over the main salon',
      'Heated private swimming pool with concealed spa jets',
      'Total acoustic and visual privacy with discreet private gatehouse',
      'Automated smart home concierge tablet controlling lighting, climate & room service',
      'Private sauna and outdoor tropical rainwater shower'
    ],
    investmentPerks: [
      'Managed under five-star Secret Hotel Management luxury hospitality pool',
      'High average daily rate (ADR) due to honeymooners and privacy-seeking VIPs',
      'Projected net rental yields exceeding 8.5% p.a.',
      'Full freehold property deed with residence permit entitlement'
    ],
    residencyEligible: true,
    architecturalStyle: 'Ultra-Modern Minimalist Glass & Volcanic Stone Architecture'
  },
  {
    id: 'nautica-villas',
    name: 'Nautica Villas',
    subtitle: 'Sustainable bioclimatic villas with solar autonomy',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Available',
    startingPriceUSD: 440000,
    startingPriceMUR: 20700000,
    startingPriceEUR: 400000,
    bedrooms: '3 to 4 Bedrooms',
    surfaceArea: '220 m² - 310 m²',
    thumbnail: '/assets/evaco/nautica-1.jpg',
    gallery: [
      '/assets/evaco/nautica-1.jpg',
      '/assets/evaco/112.jpg',
      '/assets/evaco/cdl_1.jpg'
    ],
    videoId: 'VnSYCtFp8DI',
    overview: 'Conceived to harmonize human luxury with environmental responsibility, Nautica Villas combines modern bioclimatic design with renewable energy technology. Built with cross-ventilation corridors, expansive shaded verandas, and high-efficiency photovoltaic solar roofs, Nautica offers an idyllic haven just 5 minutes from Grand Baie lagoon.',
    keyFeatures: [
      'Turnkey solar energy and smart energy storage system',
      'Private pool surrounded by sun terrace and lush exotic plants',
      'Double-height ceiling living areas with floor-to-ceiling glass openings',
      'Gourmet kitchen with European appliances and breakfast island',
      'Access to Evaco Beach Club La Plage in Trou-aux-Biches'
    ],
    investmentPerks: [
      'PDS (Property Development Scheme) approved for foreign freehold ownership',
      'Permanent residency permit granted for acquisitions over $375,000 USD',
      'Low operating utility costs through eco-efficient building envelope',
      'Strong resale and rental demand in prime Grand Baie location'
    ],
    residencyEligible: true,
    architecturalStyle: 'Bioclimatic Island Modernism',
    ecoFeatures: ['Photovoltaic roof integration', 'Greywater irrigation', 'Thermal insulation glass']
  },
  {
    id: 'clos-du-littoral',
    name: 'Clos du Littoral (CDL I & II)',
    subtitle: 'Prestigious residences set within lush landscaped gardens',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Few Units Left',
    startingPriceUSD: 750000,
    startingPriceMUR: 35250000,
    startingPriceEUR: 685000,
    bedrooms: '3 to 5 Bedrooms',
    surfaceArea: '260 m² - 450 m²',
    thumbnail: '/assets/evaco/Clos-du-Litoral_050-LR.jpg',
    gallery: [
      '/assets/evaco/Clos-du-Litoral_050-LR.jpg',
      '/assets/evaco/cdl.jpg',
      '/assets/evaco/CDL.jpg',
      '/assets/evaco/cdl_1.jpg',
      '/assets/evaco/CDL_latest-news.jpg'
    ],
    videoId: 'WPm47r3hDH8',
    overview: 'Le Clos du Littoral is an award-winning residential sanctuary that has set the benchmark for luxury real estate in northern Mauritius. Featuring generous private villas with slate-tiled swimming pools, authentic Mauritian verandas (varangues), a serene spa, fitness center, bowling pitch, and manicured green spaces.',
    keyFeatures: [
      'Slate-tiled private swimming pool with stone gazebo (kiosk)',
      'Traditional Mauritian varangue for open-air tropical living',
      'On-site luxury spa, fitness gym, children club and residents lounge',
      '24/7 security concierge and boat parking facility',
      'Exclusive privileged access to La Plage Beach Club'
    ],
    investmentPerks: [
      'Proven capital growth with over 10 years of market performance',
      'Active year-round rental yield through Evaco Property management',
      'VIP choice of European film celebrities and corporate leaders'
    ],
    residencyEligible: true,
    architecturalStyle: 'Refined Mauritian Colonial & Contemporary Blend'
  },
  {
    id: 'domaine-des-alizees',
    name: 'Domaine des Alizées Club & Spa',
    subtitle: 'Upscale resort living with cascading water features',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Completed',
    startingPriceUSD: 360000,
    startingPriceMUR: 16900000,
    startingPriceEUR: 330000,
    bedrooms: '2 to 3 Bedrooms',
    surfaceArea: '110 m² - 200 m²',
    thumbnail: '/assets/evaco/DDA_Gallery.jpg',
    gallery: [
      '/assets/evaco/DDA_Gallery.jpg',
      '/assets/evaco/Athena.jpg',
      '/assets/evaco/OASIS.jpg'
    ],
    videoId: 'VnSYCtFp8DI',
    overview: 'Domaine des Alizées is a benchmark luxury resort and residence complex in Grand Baie. Built around tranquil central water gardens, the estate features upscale suites and penthouses with private plunge pools, the acclaimed Archimède water restaurant, an Asian-inspired wellness spa, and an expansive leisure lagoon.',
    keyFeatures: [
      'Balinese water garden aesthetics with wooden bridges and lily ponds',
      'Penthouses equipped with rooftop verandas and private plunge pools',
      'Archimède gourmet restaurant set above water',
      'Award-winning wellness spa with sauna, steam bath & treatment cabins'
    ],
    investmentPerks: [
      'Proven rental pool track record with international tour operators',
      'Ideal turnkey holiday home with hotel-grade maintenance',
      'Freehold title available to international buyers'
    ],
    residencyEligible: false,
    architecturalStyle: 'Balinese Water Palace Inspired Modernism'
  },
  {
    id: 'athena-oasis-villas',
    name: 'Athéna & Oasis Villas',
    subtitle: 'Pioneering private pool residences in Grand Baie',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Completed',
    startingPriceUSD: 410000,
    startingPriceMUR: 19270000,
    startingPriceEUR: 375000,
    bedrooms: '2 to 4 Bedrooms',
    surfaceArea: '150 m² - 320 m²',
    thumbnail: '/assets/evaco/Athena.jpg',
    gallery: [
      '/assets/evaco/Athena.jpg',
      '/assets/evaco/athena_1.jpg',
      '/assets/evaco/OASIS.jpg',
      '/assets/evaco/OASIS_1.jpg'
    ],
    videoId: 'VnSYCtFp8DI',
    overview: 'Les Villas Athéna and Oasis mark the foundational milestones in Evaco Groups history, pioneering the concept of individual luxury villas with private gardens and pools for foreign acquisition under the RES/IRS schemes in Mauritius.',
    keyFeatures: [
      'Private walled garden ensuring total intimacy',
      'L-shaped swimming pool seamlessly integrated with living room',
      'Bright open-plan interiors with seamless terrace connection',
      'Prime location close to Super U and Grand Baie La Croisette'
    ],
    investmentPerks: [
      'Consistent rental yields over 15+ years',
      'High repeat clientele for seasonal villa rentals'
    ],
    residencyEligible: true,
    architecturalStyle: 'Contemporary Tropical Minimalism'
  },
  {
    id: 'grand-baie-business-park',
    name: 'Grand Baie Business Park (GBBP)',
    subtitle: 'Prime Grade-A corporate office hub in Northern Mauritius',
    cluster: 'property',
    location: 'Grand Baie, Mauritius',
    country: 'Mauritius',
    status: 'Completed',
    startingPriceUSD: 280000,
    startingPriceMUR: 13160000,
    startingPriceEUR: 255000,
    bedrooms: 'Commercial & Office Units',
    surfaceArea: '80 m² - 500 m²',
    thumbnail: '/assets/evaco/GBBP.jpg',
    gallery: [
      '/assets/evaco/GBBP.jpg',
      '/assets/evaco/office-evaco.jpg'
    ],
    videoId: 'VnSYCtFp8DI',
    overview: 'The Grand Baie Business Park is a commercial and corporate hub in the heart of Grand Baie. Designed to cater to multinationals, offshore management companies, wealth advisors, and prestigious retail brands with modern fiber infrastructure, underground parking, conference facilities, and landscaped courtyards.',
    keyFeatures: [
      'Grade-A corporate architecture with glass and stone facade',
      'Generous underground and visitor parking bays',
      'High-speed fiber connectivity, backup generator & 24/7 security',
      'Strategic location on the Grand Baie motorway link'
    ],
    investmentPerks: [
      'Prime commercial rental returns exceeding 9% p.a.',
      'High corporate tenant retention rate'
    ],
    residencyEligible: false,
    architecturalStyle: 'International Corporate Commercial'
  },
  {
    id: 'secret-solta-croatia',
    name: 'Secret Šolta - Croatia',
    subtitle: 'Adriatic luxury resort haven on the Dalmatian coastline',
    cluster: 'worldwide',
    location: 'Island of Šolta, Split-Dalmatia, Croatia',
    country: 'Croatia',
    status: 'Under Development',
    startingPriceUSD: 950000,
    startingPriceMUR: 44650000,
    startingPriceEUR: 870000,
    bedrooms: '2 to 6 Bedrooms',
    surfaceArea: '280 m² - 720 m²',
    thumbnail: '/assets/evaco/croatia-for-web2.jpg',
    gallery: [
      '/assets/evaco/croatia-for-web2.jpg',
      '/assets/evaco/solta.jpg',
      '/assets/evaco/worldwide.jpg'
    ],
    videoId: 'VnSYCtFp8DI',
    overview: 'Expanding Evaco Groups signature luxury into Europe, Secret Šolta is situated on the unspoiled island of Šolta off the coast of Split in Croatia. Blending Mediterranean pine forests, crystal clear Adriatic waters, and bespoke architectural villas, Secret Šolta introduces five-star resort hospitality with private yacht moorings, private beach coves, and world-class culinary experiences.',
    keyFeatures: [
      'Exclusive waterfront position with private yacht moorings',
      'Panoramic terraces overlooking the Adriatic Sea and Dalmatian archipelago',
      'Integrated resort wellness spa and Mediterranean organic gastronomy',
      'European Union property rights with direct access to Split international airport'
    ],
    investmentPerks: [
      'Prime European coastal luxury asset priced in Euros',
      'Managed under Secret Hotel Management hospitality pool',
      'Unspoiled Mediterranean island location with restricted future development'
    ],
    residencyEligible: false,
    architecturalStyle: 'Mediterranean Modernist Stonework with Floor-to-Ceiling Glass'
  }
];

export const CLUSTERS: ClusterInfo[] = [
  {
    id: 'property',
    title: 'Evaco Property',
    tagline: 'Avant-garde property development & masterplanned communities',
    description: 'Evaco Property oversees real estate projects from initial architectural conception to turnkey delivery. With an emphasis on architectural daring, environmental responsibility, and value appreciation, the cluster encompasses property development, property management, architectural design, and industrial construction.',
    heroImage: '/assets/evaco/property.jpg',
    iconName: 'Building2',
    entities: [
      {
        name: 'Property Development & Management',
        role: 'Masterplanning & Turnkey Delivery',
        description: 'Driving flagship projects such as Cap Marina, Secret Private Villas, Nautica, and Clos du Littoral. Providing end-to-end asset stewardship and rental yield optimization for international investors.',
        image: '/assets/evaco/Clos-du-Litoral_050-LR.jpg',
        badges: ['PDS Approved', 'Freehold Titles', 'Residence Permits']
      },
      {
        name: 'FairStone Construction',
        role: 'Civil Engineering & General Contracting',
        description: 'The civil engineering and construction backbone of Evaco Group, utilizing modern prefabrication, sustainable concrete formulations, and strict European building standards.',
        image: '/assets/evaco/FairStone-Construction.jpg',
        badges: ['ISO Compliant', 'Turnkey Construction']
      },
      {
        name: 'FineLine Contracting',
        role: 'Structural Framing & Specialized Works',
        description: 'Specializing in structural steel framing, glass curtain walls, waterproof finishes, and complex engineering works that give Evaco developments their distinctive architectural silhouettes.',
        image: '/assets/evaco/FineLine-Contracting.jpg',
        badges: ['Engineering', 'Specialized Works']
      },
      {
        name: 'Evolution Architectes & Linea Design',
        role: 'Spatial Planning & Bespoke Luxury Interiors',
        description: 'Award-winning architecture and interior curation delivering cohesive spatial harmony, custom bespoke Italian furnishings, and state-of-the-art illumination design.',
        image: '/assets/evaco/Photo_Website_-_Linea.jpg',
        badges: ['Interior Curation', 'Sustainable Architecture']
      }
    ]
  },
  {
    id: 'services',
    title: 'Evaco Services',
    tagline: 'Comprehensive corporate, legal, logistical, and concierge solutions',
    description: 'Through Evaco Services, the Group delivers an end-to-end corporate and advisory ecosystem for international families, HNWI investors, and businesses establishing footprints in Mauritius.',
    heroImage: '/assets/evaco/services.jpg',
    iconName: 'ShieldCheck',
    entities: [
      {
        name: 'Stantons Ltd',
        role: 'Residency, Corporate & Fiduciary Advisory',
        description: 'Professional legal & corporate advisory guiding international clients through Mauritius residency permits (Investor, Retired Non-Citizen, Professional, Property-Linked), offshore company incorporation, private banking coordination, and international tax optimization.',
        image: '/assets/evaco/stantons.jpg',
        badges: ['Residency Permits', 'Banking Setup', 'Corporate Formation']
      },
      {
        name: 'Mereo Ltd',
        role: 'Global Procurement & International Supply Chain',
        description: 'Consolidated international procurement, shipping, customs clearance, and warehousing. Sourcing top-tier materials and fixtures from worldwide artisans directly to project sites.',
        image: '/assets/evaco/mereo.jpg',
        badges: ['Supply Chain', 'Global Sourcing', 'Customs Clearance']
      },
      {
        name: 'Syndis Ltd',
        role: 'Condominium Syndic & Asset Facility Stewardship',
        description: 'Professional property co-ownership management, common area maintenance, facility automation, and 24/7 security management across all Evaco developments.',
        image: '/assets/evaco/syndisimg.jpg',
        badges: ['Property Care', '24/7 Security', 'Facility Management']
      }
    ]
  },
  {
    id: 'worldwide',
    title: 'Evaco Worldwide',
    tagline: 'International luxury resort management & global expansion',
    description: 'Evaco Worldwide represents the Groups vision beyond the shores of Mauritius. Focused on creating high-performing hospitality destinations, five-star resort operations, and global luxury investments.',
    heroImage: '/assets/evaco/worldwide.jpg',
    iconName: 'Globe2',
    entities: [
      {
        name: 'Secret Hotel Management',
        role: 'Boutique Luxury Resort Operations',
        description: 'Delivering five-star hotel services across private villa resorts: in-villa butler service, private chef dining, bespoke island excursions, and high-yield asset rental pools.',
        image: '/assets/evaco/Secret-1.jpg',
        badges: ['5-Star Hospitality', 'Global Asset Pool', 'Concierge Service']
      },
      {
        name: 'Secret Šolta - Adriatic Riviera',
        role: 'European Luxury Development',
        description: 'An elite development on the pristine island of Šolta in Croatia, merging Adriatic island charm with Evacos renowned architectural mastery and private yachting access.',
        image: '/assets/evaco/croatia-for-web2.jpg',
        badges: ['Croatia', 'Adriatic Sea', 'Mediterranean Luxury']
      }
    ]
  },
  {
    id: 'leisure',
    title: 'Evaco Leisure',
    tagline: 'Extraordinary gastronomy, private beach clubs, and cultural marvels',
    description: 'Evaco Leisure enriches lifestyle through singular recreational venues, celebrated gastronomy, exclusive beach club amenities, and cultural ocean exhibitions.',
    heroImage: '/assets/evaco/Leisure.jpg',
    iconName: 'Compass',
    entities: [
      {
        name: 'La Plage Beach Club',
        role: 'Exclusive Lagoon Sanctuary in Trou-aux-Biches',
        description: 'Located on the premier white sand beach of Trou-aux-Biches. Featuring open-air beachfront dining open 7/7 for lunch and dinner, private sun loungers, signature cocktails, beach massages, and VIP water sport coordination.',
        image: '/assets/evaco/laplage.jpg',
        badges: ['Beach Club', 'Trou-aux-Biches', '7/7 Gourmet Dining']
      },
      {
        name: 'Jaguar Aviation Restaurant',
        role: '5-Star Fine Dining with Supersonic Fighter Jet',
        description: 'An audacious culinary experience featuring an authentic SEPECAT Jaguar supersonic ground-attack fighter jet suspended dramatically between the rooftop terrace and cigar lounge, paired with gourmet dining for epicureans.',
        image: '/assets/evaco/Pirate-Tavern.jpg',
        badges: ['Aviation Dining', 'Cigar Lounge', 'Michelin-Standard Cuisine']
      },
      {
        name: 'Pirates Museum & Pirate Tavern',
        role: '18th Century Corsairs History & Nautical Artifacts',
        description: 'A museum honoring the history of the Indian Ocean spice route, French corsairs, ancient cartography, brass compasses, and the seafaring legends of the Isle of France.',
        image: '/assets/evaco/Pirate-Tavern.jpg',
        badges: ['Heritage Museum', 'Nautical History', 'Spice Route Lore']
      },
      {
        name: 'The World Seashell Museum',
        role: 'Exquisite Marine Biodiversity Exhibition',
        description: 'An extraordinary maritime collection showcasing thousands of rare seashells from ocean seabeds across the world, exploring evolutionary marine wonders.',
        image: '/assets/evaco/Seashell-Museum.jpg',
        badges: ['Global Seashell Collection', 'Marine Conservation']
      }
    ]
  }
];

export const CELEBRITIES: CelebrityTestimonial[] = [
  {
    name: 'Jean-Paul Belmondo & Charles Gérard',
    role: 'Legends of French Cinema & Film Directors',
    image: '/assets/evaco/belmondo.jpg',
    experience: 'Jean-Paul Belmondo, the celebrated giant of French cinema, and his longtime companion Charles Gérard chose Le Clos du Littoral for their Mauritian dream retreat. They celebrated an unforgettable evening with Chairman Arnaud Mayer at La Plage Beach Club.',
    locationVisited: 'Le Clos du Littoral & La Plage Beach Club'
  },
  {
    name: 'Franck Dubosc',
    role: 'Acclaimed French Actor, Comedian & Director',
    image: '/assets/evaco/arnothumb.jpg',
    experience: 'While in Mauritius presenting his one-man show "Fifty Fifty", Franck Dubosc fell in love with Evaco Beach Club La Plage. Seduced by the refined Mauritian cuisine, Franck chose La Plage to celebrate his wife Danielles birthday.',
    locationVisited: 'La Plage Beach Club by Evaco'
  },
  {
    name: 'Jean-Paul Rouve',
    role: 'César Award-Winning Actor & Director',
    image: '/assets/evaco/jean-paul-rouve.jpeg',
    experience: 'Jean-Paul Rouve enjoyed memorable seaside dinners and private retreats with close friends at Evacos luxury establishments on the northern coast of Mauritius.',
    locationVisited: 'Evaco Private Residences'
  },
  {
    name: 'Emmanuelle Béart',
    role: 'Celebrated French Film Actress & Activist',
    image: '/assets/evaco/EmmanuelleBeart4BPPdhW65ODm.jpg',
    experience: 'Emmanuelle Béart visited La Plage by Evaco during her Mauritian stay, sharing an intimate dinner on the white sands with CEO Arnaud Mayer and his wife Virginie.',
    locationVisited: 'La Plage Beach Club Trou-aux-Biches'
  },
  {
    name: 'Raphaël Enthoven',
    role: 'Renowned Philosophy Professor, Author & Broadcaster',
    image: '/assets/evaco/raphael-enthoven.jpg',
    experience: 'During his escape to Mauritius, Raphaël Enthoven enjoyed the serene intellectual atmosphere and exquisite culinary offerings on the beach with Chairman Arnaud Mayer.',
    locationVisited: 'La Plage & Grand Baie Enclave'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'corporate-film',
    title: 'Evaco Group Corporate Manifesto: Forward-Thinking Luxury',
    category: 'Corporate',
    youtubeId: 'VnSYCtFp8DI',
    duration: '03:45',
    description: 'An immersive showcase of Evaco Groups multi-sector presence in Property, Services, Worldwide, and Leisure, led by Chairman Arnaud Mayer.',
    featured: true
  },
  {
    id: 'cnn-marketplace-africa',
    title: 'CNN Marketplace Africa: Evaco Group Feature',
    category: 'Media',
    youtubeId: 'yVlbx58YfhI',
    duration: '04:12',
    description: 'CNN International profiles Evaco Group as a forward-thinking property developer transforming the luxury investment landscape in Mauritius.',
    featured: true
  },
  {
    id: 'cap-marina-secret-villas',
    title: 'Cap Marina & Secret Private Villa Resort Preview',
    category: 'Property',
    youtubeId: 'WPm47r3hDH8',
    duration: '02:50',
    description: 'Discover the 2km navigable canal at Cap Marina and the world-first retractable glass roof villas at Secret Private Villa Resort.',
    featured: true
  },
  {
    id: 'evaco-20-years',
    title: 'Evaco Group: 20 Years of Architectural Mastery',
    category: 'Corporate',
    youtubeId: '_xDmupG13cY',
    duration: '05:10',
    description: 'A retrospective honoring two decades of architectural innovation, Stock Exchange listing, and thousands of international homeowners.'
  },
  {
    id: 'evaco-services-synergy',
    title: 'Evaco Services: Stantons, Mereo & Property Stewardship',
    category: 'Services',
    youtubeId: 'D8i21Ur0XEQ',
    duration: '02:30',
    description: 'How Stantons Ltd and Evaco Services streamline residency permits, corporate structuring, and global procurement for overseas buyers.'
  },
  {
    id: 'jaguar-aviation-dining',
    title: 'Jaguar Aviation Restaurant: Supersonic Gastronomy',
    category: 'Leisure',
    youtubeId: 'n9SoFcev4SI',
    duration: '01:55',
    description: 'A look inside the 5-star culinary wonder featuring a suspended SEPECAT Jaguar fighter jet and bespoke cigar lounge.'
  },
  {
    id: 'la-plage-beach-club',
    title: 'La Plage Trou-aux-Biches: Private Beach Club Bliss',
    category: 'Leisure',
    youtubeId: '4yMVOgSxx0s',
    duration: '02:15',
    description: 'Experience white sands, azure waters, gourmet dining 7/7, and VIP beach services reserved for Evaco owners and guests.'
  },
  {
    id: 'pirate-museum-mauritius',
    title: 'Pirates Museum & Indian Ocean Corsair Heritage',
    category: 'Leisure',
    youtubeId: '3vNm3l9eN5c',
    duration: '02:40',
    description: 'Step into 18th-century maritime lore, authentic nautical compasses, and the corsairs that shaped the Isle of France.'
  },
  {
    id: 'architectural-craftsmanship',
    title: 'Engineering & Construction Excellence by FairStone',
    category: 'Property',
    youtubeId: 'qc1gHs3LLrY',
    duration: '03:15',
    description: 'Behind the scenes with FairStone Construction and FineLine Contracting engineering Mauritius most iconic villas.'
  }
];

export const CURRENCY_RATES: Record<string, { symbol: string; rateToUSD: number }> = {
  USD: { symbol: '$', rateToUSD: 1.0 },
  EUR: { symbol: '€', rateToUSD: 0.92 },
  MUR: { symbol: 'Rs', rateToUSD: 47.0 },
  GBP: { symbol: '£', rateToUSD: 0.79 },
  ZAR: { symbol: 'R', rateToUSD: 18.5 }
};
