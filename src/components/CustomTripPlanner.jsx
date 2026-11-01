import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Bed, 
  Car, 
  Check, 
  Send, 
  MessageSquare, 
  CheckCircle2,
  X
} from 'lucide-react';

export default function CustomTripPlanner({ isOpen, onClose }) {
  const [selectedRegions, setSelectedRegions] = useState(['Manali', 'Solang Valley']);
  const [tripStyle, setTripStyle] = useState('Family Holiday');
  const [durationDays, setDurationDays] = useState(6);
  const [travelers, setTravelers] = useState(4);
  const [hotelTier, setHotelTier] = useState('4★ Premium Resort');
  const [vehicleTier, setVehicleTier] = useState('Innova Crysta');
  const [travelMonth, setTravelMonth] = useState('Next Month');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const popularDestinations = [
    { name: 'Manali', region: 'HP' },
    { name: 'Solang Valley', region: 'HP' },
    { name: 'Spiti Valley', region: 'HP' },
    { name: 'Shimla & Kufri', region: 'HP' },
    { name: 'Kasol & Tosh', region: 'HP' },
    { name: 'Dharamshala', region: 'HP' },
    { name: 'Jibhi & Tirthan', region: 'HP' },
    { name: 'Rishikesh', region: 'UK' },
    { name: 'Kedarnath Dham', region: 'UK' },
    { name: 'Auli Ski Resort', region: 'UK' },
    { name: 'Chopta Tungnath', region: 'UK' },
    { name: 'Nainital & Bhimtal', region: 'UK' },
    { name: 'Mussoorie', region: 'UK' },
    { name: 'Jim Corbett', region: 'UK' }
  ];

  const toggleDestination = (name) => {
    if (selectedRegions.includes(name)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter(item => item !== name));
      }
    } else {
      setSelectedRegions([...selectedRegions, name]);
    }
  };

  // Estimate calculation formula
  const basePerPersonPerDay = hotelTier.includes('5★') ? 4500 : hotelTier.includes('4★') ? 3200 : 2400;
  const estimatedTotal = Math.round(travelers * durationDays * basePerPersonPerDay * 0.95);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getWhatsAppCustomText = () => {
    const text = `*Custom Himalayan Trip Request - Himshikhar Escapes*
• *Name:* ${guestName || 'Traveler'}
• *Phone:* ${guestPhone || 'Not provided'}
• *Destinations Selected:* ${selectedRegions.join(', ')}
• *Trip Style:* ${tripStyle}
• *Duration:* ${durationDays} Days / ${durationDays - 1} Nights
• *Travelers:* ${travelers} Persons
• *Preferred Month:* ${travelMonth}
• *Hotel Category:* ${hotelTier}
• *Vehicle Preference:* ${vehicleTier}
• *Instant Estimate:* ~${formatINR(estimatedTotal)}

Please provide a detailed day-wise customized quotation. Thank you!`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestPhone.trim()) {
      alert('Please enter your WhatsApp mobile number to get the quote.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="bg-white w-full max-w-3xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0a271a] px-6 py-4 flex items-center justify-between text-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#f5b700]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-luxury text-white">
                Design Your Custom Himalayan Dream Trip
              </h3>
              <p className="text-xs text-emerald-300/80">
                Tailored specifically for your group with local Himachal & Uttarakhand architects
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-800">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Destination Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0d3826]" /> Step 1: Select Your Must-Visit Destinations
                </label>
                <div className="flex flex-wrap gap-2">
                  {popularDestinations.map((dest) => {
                    const isSelected = selectedRegions.includes(dest.name);
                    return (
                      <button
                        type="button"
                        key={dest.name}
                        onClick={() => toggleDestination(dest.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0d3826] text-[#f5b700] shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#f5b700]" />}
                        <span>{dest.name}</span>
                        <span className="text-[10px] opacity-60">({dest.region})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Trip Style & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Travel Style
                  </label>
                  <select
                    value={tripStyle}
                    onChange={(e) => setTripStyle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                  >
                    <option value="Family Holiday">Family Holiday (Comfort & Leisure)</option>
                    <option value="Honeymoon Special">Honeymoon (Romantic Luxury)</option>
                    <option value="Friends & Adventure">Friends / Group Adventure & Camping</option>
                    <option value="Spiritual Pilgrimage">Spiritual Pilgrimage (Chardham / Temples)</option>
                    <option value="Solo / Workation">Solo Backpacking / Workation</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Estimated Duration
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="3"
                      max="14"
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      className="w-full accent-[#0d3826]"
                    />
                    <span className="text-sm font-black text-[#0d3826] min-w-[70px]">
                      {durationDays} Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3: Accommodation & Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Hotel & Stay Category
                  </label>
                  <select
                    value={hotelTier}
                    onChange={(e) => setHotelTier(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                  >
                    <option value="3★ Standard Mountain Hotel">3★ Standard Clean Mountain Hotel</option>
                    <option value="4★ Premium Resort">4★ Premium Resort with Valley View</option>
                    <option value="5★ Luxury Cottages & Jacuzzi">5★ Luxury Cottages & Jacuzzi Suites</option>
                    <option value="Scenic Swiss Alpine Camps">Scenic Swiss Alpine Glamping / Homestays</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleTier}
                    onChange={(e) => setVehicleTier(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                  >
                    <option value="Swift Dzire / Etios">Dedicated Swift Dzire / Etios (Up to 4 Pax)</option>
                    <option value="Innova Crysta">Toyota Innova Crysta SUV (Up to 6 Pax)</option>
                    <option value="Force Tempo Traveller">Force Tempo Traveller (Up to 12 Pax)</option>
                    <option value="Volvo + Local Cab">Overnight AC Volvo + Local Sightseeing Cab</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact info */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-3">
                <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Where should we send your customized itinerary & quotation?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="bg-white border border-emerald-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Phone Number *"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="bg-white border border-emerald-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              {/* Instant Calculated Estimate Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400">Estimated Total for {travelers} Travelers:</div>
                  <div className="text-2xl font-black text-[#f5b700]">{formatINR(estimatedTotal)}</div>
                  <div className="text-[11px] text-slate-400">Includes Hotels, Meals, Cab & Tolls</div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f5b700] hover:bg-[#ffc107] text-[#092317] font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  Get Custom Quotation
                </button>
              </div>

            </form>
          ) : (
            /* Submission Success & Direct WhatsApp */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 font-serif-luxury">
                Custom Itinerary Plan Prepared!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{guestName}</strong>! Our Himalayan trip planners have compiled your custom requirements for <span className="text-emerald-800 font-bold">{selectedRegions.join(', ')}</span>.
              </p>

              <div className="pt-2 max-w-md mx-auto">
                <a
                  href={`https://wa.me/919816022345?text=${getWhatsAppCustomText()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  Send Custom Plan to WhatsApp (+91 98160 22345)
                </a>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
