import React, { useState } from 'react';
import { 
  Mountain, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Send,
  Heart,
  Check
} from 'lucide-react';

export default function Footer({ onOpenCustomPlanner }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05170e] text-slate-400 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-[#0d3826] to-[#09281a] border border-white/15 p-6 sm:p-10 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5b700] text-[#082016] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> ₹1,000 Travel Coupon
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury">
              Subscribe for Secret Himachal & Uttarakhand Deals
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/70 max-w-md">
              Receive fresh snow alerts, road status updates, and exclusive off-season hotel discounts directly in your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[300px]">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-black/40 border border-white/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#f5b700] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#f5b700] hover:bg-[#ffc107] text-[#082016] font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4" /> Join
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-center text-xs text-emerald-300 font-bold flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-[#f5b700]" /> Use Coupon Code: <strong>HIMSHIKHAR1000</strong>
              </div>
            )}
          </div>
        </div>

        {/* 4 Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#166534] border border-emerald-400/30 flex items-center justify-center text-[#f5b700]">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-extrabold text-white">
                  HIMSHIKHAR
                </span>
                <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold block">
                  Himalayan Escapes & Tours
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based in the pristine pine valleys of Himachal Pradesh, we curate authentic, comfortable, and soul-stirring tour packages across Himachal and Uttarakhand. Dedicated mountain cabs, handpicked stays, and local hospitality.
            </p>

            <div className="pt-2 text-xs text-emerald-300/80 space-y-1">
              <div>Govt. of Himachal Pradesh Tourism Regd. No: <strong>HP-TO-2022-7814</strong></div>
              <div>ISO 9001:2015 Certified Tour Operator</div>
            </div>
          </div>

          {/* Himachal Destinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Himachal Tours
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Manali & Solang Valley
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Spiti Valley & Chandratal
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Shimla, Kufri & Mashobra
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Dharamshala & McLeodganj
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Kasol, Tosh & Parvati Valley
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Jibhi & Tirthan Valley
                </button>
              </li>
            </ul>
          </div>

          {/* Uttarakhand Tours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Uttarakhand Tours
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('chardham')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Kedarnath Dham Pilgrimage
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('chardham')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Complete Chardham Yatra
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Rishikesh River Rafting
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Auli Skiing & Cable Car
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Nainital & Kumaon Lakes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-[#f5b700] transition-colors cursor-pointer text-left">
                  Jim Corbett Tiger Safari
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Hub */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Operational Hubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f5b700] mt-0.5 flex-shrink-0" />
                <span>The Mall Road, Manali, HP 175131</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f5b700] mt-0.5 flex-shrink-0" />
                <span>Tapovan, Rishikesh, UK 249192</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f5b700] flex-shrink-0" />
                <a href="tel:+919816022345" className="hover:text-white font-semibold">
                  +91 98160 22345
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f5b700] flex-shrink-0" />
                <a href="mailto:info@himshikharescapes.com" className="hover:text-white">
                  info@himshikharescapes.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Himshikhar Escapes Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>in Himachal Pradesh for Travelers across India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
