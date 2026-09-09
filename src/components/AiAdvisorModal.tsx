import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Loader2, 
  Building2, 
  ShieldCheck, 
  HelpCircle,
  Maximize2
} from 'lucide-react';
import { AIMessage } from '../types';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectByName?: (name: string) => void;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectByName,
}) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: "Welcome to Evaco Group Private Client Advisory. I am your specialized AI Wealth & Property Concierge, grounded in our 24-year heritage in Mauritius.\n\nWhether you are exploring freehold ownership at Cap Marina, the autonomous retractable roof suites at Secret Private Villas, or securing Mauritian Permanent Residency through our corporate affiliate Stantons Ltd, how may I assist your portfolio today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        'Permanent Residency criteria ($375k USD)',
        'Cap Marina 2km canal & pricing',
        'Secret Private Villas yield & features',
        'Mauritius 15% flat tax advantages',
        'Stantons Ltd corporate services'
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query || loading) return;

    const userMessage: AIMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const historyPayload = messages.slice(-5).map((m) => ({
        role: m.sender,
        text: m.text,
      }));

      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      const assistantMessage: AIMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Thank you for your inquiry. Our private client team is available to assist you.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: data.suggestedActions || [
          'Cap Marina Canal Villas',
          'Secret Villa Resort Yields',
          'Tax Residency via Stantons'
        ],
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('AI chat failure:', err);
      const errorMessage: AIMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: "I apologize for the momentary interruption. For direct priority consultation, our headquarters at Rivière Citron, Arsenal may be contacted at (+230) 269 1800 or sales@evacogroup.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0D141F] border border-[#C8A97E]/40 rounded-3xl w-full max-w-3xl h-[85vh] max-h-[750px] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#C8A97E]/20 bg-[#121A26] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C8A97E] to-[#E6CDA7] text-[#0B111A] flex items-center justify-center font-bold shadow-md">
              <Sparkles className="w-5 h-5 text-[#0B111A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#F4EFE6]">
                  Evaco Private Wealth &amp; Property Advisor
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold tracking-wider uppercase border border-emerald-500/30">
                  AI Grounded
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Real-time intelligence on Mauritius PDS, Cap Marina, Secret Villas &amp; Stantons Advisory
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 luxury-scrollbar bg-[#0B111A]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#16202D] border border-[#C8A97E]/40 flex-shrink-0 flex items-center justify-center text-[#C8A97E]">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-[#C8A97E] to-[#9E7D4A] text-[#0B111A] font-medium rounded-tr-none shadow-md'
                  : 'bg-[#121A26] border border-[#C8A97E]/20 text-[#E2E8F0] rounded-tl-none shadow-lg'
              }`}>
                <div className="whitespace-pre-line">{m.text}</div>
                <div className={`text-[10px] mt-2 flex justify-end ${m.sender === 'user' ? 'text-black/60 font-semibold' : 'text-[#718096]'}`}>
                  {m.timestamp}
                </div>

                {/* Suggested Follow-up Pills */}
                {m.suggestedActions && m.suggestedActions.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {m.suggestedActions.map((action, aIdx) => (
                      <button
                        key={aIdx}
                        onClick={() => handleSendMessage(action)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#16202D] hover:bg-[#C8A97E] text-[#C8A97E] hover:text-[#0B111A] border border-[#C8A97E]/30 transition-colors font-medium text-left"
                      >
                        {action} &rarr;
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#0B111A] flex-shrink-0 flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-full bg-[#16202D] border border-[#C8A97E]/40 flex-shrink-0 flex items-center justify-center text-[#C8A97E]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-[#121A26] border border-[#C8A97E]/20 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2 text-xs text-[#C8A97E]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Consulting Evaco portfolio &amp; Mauritius legal framework...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#C8A97E]/20 bg-[#121A26]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about Cap Marina, Secret Villas, permanent residency, yields..."
              className="flex-1 bg-[#0B111A] border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F4EFE6] placeholder-[#64748B] focus:outline-none focus:border-[#C8A97E] transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !inputText.trim()}
              className="p-3 rounded-xl bg-gradient-to-r from-[#C8A97E] to-[#9E7D4A] hover:opacity-90 disabled:opacity-40 text-[#0B111A] font-bold transition-all shadow-md cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-[10px] text-[#64748B] text-center">
            Private Client AI Advisor • Evaco Group Mauritius • Stock Exchange Listed (SEM)
          </div>
        </div>
      </div>
    </div>
  );
};
