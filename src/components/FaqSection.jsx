import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { faqsData } from '../data/travelData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#f5b700]" />
          <span>Clear & Transparent Guidance</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
          Frequently Asked <br />
          <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
            Himalayan Travel Questions
          </span>
        </h2>
      </div>

      {/* Accordion */}
      <div className="space-y-3.5">
        {faqsData.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-[#0b291c] border border-white/10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#f5b700] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-emerald-100/80 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Have more questions pill */}
      <div className="mt-8 text-center">
        <p className="text-xs sm:text-sm text-emerald-200/70">
          Have questions about road status, snow forecast, or customized family packages?
        </p>
        <a
          href="https://wa.me/919816022345?text=Hello%20Himshikhar%20Escapes,%20I%20have%20a%20question%20regarding%20Himachal/Uttarakhand%20tours."
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-lg shadow-green-500/20 hover:bg-[#20ba59] transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          Ask Our Local Expert on WhatsApp
        </a>
      </div>

    </section>
  );
}
