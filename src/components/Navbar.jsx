import React, { useState } from 'react';
import { 
  Compass, 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  Mountain, 
  Calendar, 
  Sparkles, 
  MapPin, 
  MessageSquare
} from 'lucide-react';

export default function Navbar({ onOpenCustomPlanner, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#06180f] text-emerald-300/90 text-xs sm:text-sm py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f5b700] text-[#0b2b1d]">
              WINTER SPECIAL
            </span>
            <span className="font-medium">
              🏔 Flat 15% OFF on Himachal Snow & Uttarakhand Chardham/Winter Batches!
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+919816022345" 
              className="flex items-center gap-1.5 hover:text-[#f5b700] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f5b700]" />
              <span className="hidden sm:inline">Local Expert Helpline:</span>
              <span className="font-semibold text-white">+91 98160 22345</span>
            </a>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-emerald-200/70">
              📍 Manali • Shimla • Rishikesh • Delhi
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 bg-[#0a271a]/95 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <div 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#166534] to-[#0d3826] border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-black/30 group-hover:border-[#f5b700] transition-all">
                <Mountain className="w-6 h-6 text-[#f5b700]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-extrabold tracking-tight text-white group-hover:text-emerald-100 transition-colors flex items-center gap-1">
                  HIMSHIKHAR
                  <span className="text-xs px-1.5 py-0.5 rounded bg-[#f5b700]/20 text-[#f5b700] border border-[#f5b700]/30 font-sans font-bold">
                    HP & UK
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-emerald-300/70 font-semibold">
                  Himalayan Escapes & Tours
                </span>
              </div>
            </div>

            {/* Desktop Navigation Pills */}
            <div className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-4 py-2 rounded-full text-sm font-medium text-white hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Tour Packages
              </button>
              <button
                onClick={() => scrollToSection('destinations')}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('chardham')}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#f5b700] animate-pulse"></span>
                Chardham & Treks
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-100 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Reviews
              </button>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenCustomPlanner}
                className="px-4 py-2.5 rounded-full text-sm font-semibold text-white/90 hover:text-white border border-white/20 hover:border-emerald-300 hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#f5b700]" />
                Custom Trip
              </button>
              
              <button
                onClick={() => scrollToSection('packages')}
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-[#f5b700] hover:bg-[#ffc107] text-[#092317] shadow-lg shadow-[#f5b700]/20 hover:shadow-[#f5b700]/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
              >
                Plan My Trip
                <span className="text-base font-black">↗</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => scrollToSection('packages')}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#f5b700] text-[#092317] flex items-center gap-1"
              >
                Book ↗
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#072015] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5"
              >
                All Packages
              </button>
              <button
                onClick={() => scrollToSection('destinations')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('chardham')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#f5b700]"></span>
                Chardham Yatra
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/5"
              >
                Customer Reviews
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomPlanner();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-white/10 border border-white/15 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#f5b700]" />
                Design Custom Itinerary
              </button>
              <a
                href="https://wa.me/919816022345?text=Hello%20Himshikhar%20Escapes,%20I%20am%20interested%20in%20planning%20a%20trip%20to%20Himachal/Uttarakhand."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl text-center text-sm font-bold bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Chat on WhatsApp (+91 98160 22345)
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
