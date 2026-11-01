import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Car, 
  Bed, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare,
  CreditCard,
  Percent,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ pkg, isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Customization & Price, 2: Guest Details, 3: Confirmed Voucher
  
  // Customization state
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [vehicle, setVehicle] = useState('sedan');
  const [roomType, setRoomType] = useState('double');
  const [paymentOption, setPaymentOption] = useState('deposit'); // 'deposit' (25%) or 'full'

  // Guest Details state
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestCity, setGuestCity] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [errors, setErrors] = useState({});

  // Confirmation state
  const [bookingId, setBookingId] = useState('');
  const [copied, setCopied] = useState(false);

  // Set default date to 10 days from today
  useEffect(() => {
    if (!travelDate) {
      const d = new Date();
      d.setDate(d.getDate() + 10);
      setTravelDate(d.toISOString().split('T')[0]);
    }
  }, [travelDate]);

  if (!isOpen || !pkg) return null;

  // Price calculations
  const baseRate = pkg.price;
  const adultTotal = adults * baseRate;
  const childTotal = children * Math.round(baseRate * 0.7);
  
  let vehicleUpgradeFee = 0;
  if (vehicle === 'innova') vehicleUpgradeFee = 4500;
  if (vehicle === 'tempo') vehicleUpgradeFee = 8000;

  let roomSupplement = 0;
  if (roomType === 'solo') roomSupplement = 3500;

  const subtotal = adultTotal + childTotal + vehicleUpgradeFee + roomSupplement;
  const gstAmount = Math.round(subtotal * 0.05);
  const totalAmount = subtotal + gstAmount;
  const tokenDepositAmount = Math.round(totalAmount * 0.25);
  const amountToPayNow = paymentOption === 'deposit' ? tokenDepositAmount : totalAmount;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleNextToDetails = () => {
    setStep(2);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!guestName.trim()) newErrors.guestName = 'Name is required';
    if (!guestPhone.trim() || guestPhone.length < 10) newErrors.guestPhone = 'Valid 10-digit phone number is required';
    if (!guestEmail.trim() || !guestEmail.includes('@')) newErrors.guestEmail = 'Valid email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomId = 'HIM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setStep(3);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const getWhatsAppBookingText = () => {
    const text = `*New Booking Reservation - Himshikhar Escapes*
• *Booking ID:* ${bookingId}
• *Package:* ${pkg.title}
• *Travel Date:* ${travelDate}
• *Duration:* ${pkg.duration}
• *Guests:* ${adults} Adults, ${children} Children
• *Vehicle:* ${vehicle.toUpperCase()}
• *Room:* ${roomType.toUpperCase()}
• *Total Amount:* ${formatINR(totalAmount)}
• *Advance Token (25%):* ${formatINR(tokenDepositAmount)}
• *Guest Name:* ${guestName}
• *Phone:* ${guestPhone}
• *City:* ${guestCity || 'N/A'}
• *Notes:* ${specialRequests || 'Standard arrangements'}

Please confirm my reservation details. Thank you!`;
    return encodeURIComponent(text);
  };

  const handleCopyBookingId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="bg-white w-full max-w-2xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="bg-[#0b2b1d] px-6 py-4 flex items-center justify-between text-white flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f5b700] text-[#0b2b1d] font-bold">
                RESERVATION
              </span>
              <span className="text-xs text-emerald-300">
                Step {step} of 3
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1 truncate max-w-md">
              {pkg.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-800">
          
          {/* STEP 1: Customization & Price Calculator */}
          {step === 1 && (
            <div className="space-y-5">
              
              {/* Date selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0d3826]" /> Choose Starting Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                />
              </div>

              {/* Travelers Selection (Adults & Children) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0d3826]" /> Adults (12+ yrs)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{formatINR(baseRate)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-[#0d3826]">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0d3826]" /> Children (5-11 yrs)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">70% rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-[#0d3826]">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Vehicle Options */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#0d3826]" /> Select Mountain Vehicle Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setVehicle('sedan')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      vehicle === 'sedan'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Swift Dzire / Etios</div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-1">Included (Standard)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('innova')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      vehicle === 'innova'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Innova Crysta SUV</div>
                    <div className="text-[11px] text-amber-700 font-bold mt-1">+₹4,500 total</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('tempo')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      vehicle === 'tempo'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Force Urbania / Tempo</div>
                    <div className="text-[11px] text-amber-700 font-bold mt-1">+₹8,000 total</div>
                  </button>
                </div>
              </div>

              {/* Room Preference */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-[#0d3826]" /> Room Sharing Preference
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setRoomType('double')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      roomType === 'double'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Double Sharing</div>
                    <div className="text-[10px] text-slate-500">Standard (2/Room)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('triple')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      roomType === 'triple'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Triple Sharing</div>
                    <div className="text-[10px] text-slate-500">Extra Mattress</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('solo')}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      roomType === 'solo'
                        ? 'border-[#0d3826] bg-emerald-50/80 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Solo Private Room</div>
                    <div className="text-[10px] text-amber-700 font-bold">+₹3,500</div>
                  </button>
                </div>
              </div>

              {/* Live Price Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Base Package ({adults} Adults {children > 0 ? `+ ${children} Children` : ''}):</span>
                  <span>{formatINR(adultTotal + childTotal)}</span>
                </div>
                {vehicleUpgradeFee > 0 && (
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Vehicle Upgrade ({vehicle.toUpperCase()}):</span>
                    <span>+{formatINR(vehicleUpgradeFee)}</span>
                  </div>
                )}
                {roomSupplement > 0 && (
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Solo Room Supplement:</span>
                    <span>+{formatINR(roomSupplement)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-slate-300">
                  <span>Govt. Tourism GST (5%):</span>
                  <span>{formatINR(gstAmount)}</span>
                </div>
                <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-base font-extrabold text-white">
                  <span>Total Calculated Cost:</span>
                  <span className="text-[#f5b700] text-lg sm:text-xl">{formatINR(totalAmount)}</span>
                </div>
              </div>

              {/* Deposit vs Full Payment selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#0d3826]" /> Select Payment Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setPaymentOption('deposit')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentOption === 'deposit'
                        ? 'border-[#0d3826] bg-emerald-50 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">25% Advance Token</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-800 font-bold">Recommended</span>
                    </div>
                    <div className="text-sm font-black text-[#0d3826] mt-1">
                      {formatINR(tokenDepositAmount)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Pay balance on trip arrival</div>
                  </div>

                  <div 
                    onClick={() => setPaymentOption('full')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentOption === 'full'
                        ? 'border-[#0d3826] bg-emerald-50 ring-1 ring-[#0d3826]'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900">100% Full Payment</span>
                    <div className="text-sm font-black text-[#0d3826] mt-1">
                      {formatINR(totalAmount)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Instant booking confirmation</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: Guest Details Form */}
          {step === 2 && (
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between text-xs sm:text-sm text-emerald-900">
                <div>
                  <span className="font-bold">{pkg.title}</span>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Date: {travelDate} • {adults} Adults • Total: {formatINR(totalAmount)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-emerald-800 underline"
                >
                  Edit Trip
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Lead Traveler Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className={`w-full bg-slate-50 border ${errors.guestName ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]`}
                />
                {errors.guestName && <p className="text-[11px] text-rose-500 mt-1">{errors.guestName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className={`w-full bg-slate-50 border ${errors.guestPhone ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]`}
                  />
                  {errors.guestPhone && <p className="text-[11px] text-rose-500 mt-1">{errors.guestPhone}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@gmail.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className={`w-full bg-slate-50 border ${errors.guestEmail ? 'border-rose-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]`}
                  />
                  {errors.guestEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.guestEmail}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Departure City / State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Delhi, Chandigarh, Mumbai, Ahmedabad..."
                  value={guestCity}
                  onChange={(e) => setGuestCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 block">
                  Special Requests / Dietary Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Jain food required, need heater in room, traveling for 1st anniversary..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Your information is strictly encrypted. No spam guaranteed.</span>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmed Voucher & WhatsApp Connect */}
          {step === 3 && (
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-serif-luxury">
                  Reservation Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{guestName}</strong>! Your provisional booking voucher has been generated. Our Himachal operations desk is reviewing your dates.
                </p>
              </div>

              {/* Reference ID card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto flex items-center justify-between">
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Booking Reference ID</div>
                  <div className="text-lg font-black text-[#0d3826] tracking-wider">{bookingId}</div>
                </div>
                <button
                  onClick={handleCopyBookingId}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Itemized Voucher Details */}
              <div className="text-left bg-slate-900 text-white p-4 sm:p-5 rounded-2xl text-xs sm:text-sm space-y-2">
                <div className="font-bold text-[#f5b700] text-sm sm:text-base border-b border-slate-700 pb-2 mb-2">
                  Trip Voucher Summary
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Package:</span>
                  <span className="font-semibold text-white">{pkg.title}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Starting Date:</span>
                  <span className="font-semibold text-white">{travelDate}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Travelers:</span>
                  <span className="font-semibold text-white">{adults} Adults {children > 0 ? `, ${children} Children` : ''}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Vehicle Assigned:</span>
                  <span className="font-semibold text-white">{vehicle.toUpperCase()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Package Value:</span>
                  <span className="font-bold text-white">{formatINR(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-[#f5b700] pt-2 border-t border-slate-700 font-bold">
                  <span>Token Advance Payable:</span>
                  <span>{formatINR(tokenDepositAmount)}</span>
                </div>
              </div>

              {/* WhatsApp Call to Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919816022345?text=${getWhatsAppBookingText()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-green-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  Send Voucher to WhatsApp Concierge (+91 98160 22345)
                </a>
                <p className="text-[11px] text-slate-500 mt-2">
                  Connect instantly with our local executive on WhatsApp to finalize payment & receive instant PDF invoice!
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 flex-shrink-0">
          {step === 1 && (
            <>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Payable Now ({paymentOption === 'deposit' ? '25% Token' : 'Full'}):</span>
                <span className="text-xl font-black text-[#0d3826]">{formatINR(amountToPayNow)}</span>
              </div>
              <button
                type="button"
                onClick={handleNextToDetails}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#092317] bg-[#f5b700] hover:bg-[#ffc107] shadow-md shadow-[#f5b700]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                Proceed to Traveler Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#092317] bg-[#f5b700] hover:bg-[#ffc107] shadow-lg shadow-[#f5b700]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                Confirm & Reserve Voucher
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 3 && (
            <div className="w-full flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                Done / Close
              </button>
              <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-600" /> Voucher Saved
              </span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
