import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full bg-white/90 text-slate-800 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-[#0d3826]" />
        </button>
      )}

      {/* Greeting Bubble */}
      {showGreeting && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>Himachal Expert Online! Ask any question 👋</span>
          <button
            onClick={() => setShowGreeting(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action Buttons: Phone & WhatsApp */}
      <div className="flex items-center gap-2.5">
        
        {/* Direct Call Pill */}
        <a
          href="tel:+919816022345"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0d3826] text-white border border-white/20 text-xs font-bold shadow-xl hover:bg-[#072418] transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#f5b700]" />
          <span>Call: 98160 22345</span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919816022345?text=Hello%20Himshikhar%20Escapes,%20I%20am%20planning%20a%20trip%20to%20Himachal%20/%20Uttarakhand.%20Please%20share%20details."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer shadow-green-500/40"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black">
            1
          </span>
        </a>

      </div>

    </div>
  );
}
