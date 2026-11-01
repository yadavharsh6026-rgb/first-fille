import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Himachal Pradesh (Manali / Spiti)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      alert('Please enter your phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Information & Offices */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#f5b700]" />
              <span>Connect with Local Himachal Team</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
              Get in Touch with Our <br />
              <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
                Mountain Travel Desks
              </span>
            </h2>
            <p className="mt-3 text-emerald-100/70 text-sm sm:text-base leading-relaxed">
              Planning a family holiday, corporate offsite, honeymoon, or Chardham Yatra? Reach out to our local team in Manali and Rishikesh for immediate custom quotes.
            </p>
          </div>

          {/* Quick Contact methods */}
          <div className="space-y-4">
            <a
              href="tel:+919816022345"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f5b700]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f5b700] text-[#082016] flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-105 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                  Direct Call / Reservation Helpline
                </div>
                <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#f5b700] transition-colors">
                  +91 98160 22345 / +91 94180 88921
                </div>
              </div>
            </a>

            <a
              href="mailto:contact@himshikharescapes.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f5b700]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-105 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                  Official Email Enquiries
                </div>
                <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#f5b700] transition-colors">
                  bookings@himshikharescapes.com
                </div>
              </div>
            </a>
          </div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#092317] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f5b700] uppercase mb-1">
                <MapPin className="w-3.5 h-3.5" /> Himachal Head Office
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                The Mall Road, Near Circuit House, Manali, Distt. Kullu, Himachal Pradesh 175131
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#092317] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f5b700] uppercase mb-1">
                <MapPin className="w-3.5 h-3.5" /> Uttarakhand Branch
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Badrinath Road, Near Laxman Jhula, Tapovan, Rishikesh, Uttarakhand 249192
              </p>
            </div>
          </div>
        </div>

        {/* Right Inquiry Card */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif-luxury">
                Request a Free Trip Callback
              </h3>
              <p className="text-xs text-slate-600">
                Leave your details below and our Himachal tour manager will call you back within 15 minutes with customized options and best seasonal rates.
              </p>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amit Sharma"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9816022345"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. amit@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Interested Destination / Region
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                >
                  <option value="Himachal: Manali & Solang Valley">Himachal: Manali & Solang Valley</option>
                  <option value="Himachal: Spiti Valley & Chandratal">Himachal: Spiti Valley & Chandratal</option>
                  <option value="Himachal: Shimla & Kufri">Himachal: Shimla & Kufri</option>
                  <option value="Himachal: Dharamshala & Dalhousie">Himachal: Dharamshala & Dalhousie</option>
                  <option value="Uttarakhand: Kedarnath & Chardham Yatra">Uttarakhand: Kedarnath & Chardham Yatra</option>
                  <option value="Uttarakhand: Rishikesh & Auli Skiing">Uttarakhand: Rishikesh & Auli Skiing</option>
                  <option value="Uttarakhand: Nainital & Jim Corbett">Uttarakhand: Nainital & Jim Corbett</option>
                  <option value="Custom Himachal & Uttarakhand Combo">Custom Himachal & Uttarakhand Combo</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Estimated Travel Dates / Group Size (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Traveling in December with 4 adults and 1 kid. Need snow hotel and private Innova..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0d3826] hover:bg-[#072418] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4 text-[#f5b700]" />
                Request Custom Callback & Quote
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Privacy Protected • Zero Sales Spam</span>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 font-serif-luxury">
                Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior travel consultant will call you shortly at <span className="text-[#0d3826] font-bold">{formData.phone}</span>.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/919816022345?text=Hello%20Himshikhar%20Escapes,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.destination)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Connect Instantly on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
