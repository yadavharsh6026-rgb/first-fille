import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import ItineraryModal from './components/ItineraryModal';
import BookingModal from './components/BookingModal';
import CustomTripPlanner from './components/CustomTripPlanner';
import DestinationExplorer from './components/DestinationExplorer';
import ChardhamSpotlight from './components/ChardhamSpotlight';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

import { tourPackagesData } from './data/travelData';

export default function App() {
  const [activeFilter, setActiveFilter] = useState({
    region: 'all',
    theme: 'all',
    duration: 'all'
  });

  const [itineraryPkg, setItineraryPkg] = useState(null);
  const [bookingPkg, setBookingPkg] = useState(null);
  const [customPlannerOpen, setCustomPlannerOpen] = useState(false);

  // Scroll helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // When user clicks Search on Hero
  const handleHeroSearchSubmit = (filters) => {
    setActiveFilter(filters);
    scrollTo('packages');
  };

  // When user clicks one of the 4 Polaroid cards in the hero (from reference image)
  const handleSelectDestinationCard = (destId) => {
    if (destId === 'manali') {
      setActiveFilter({ region: 'himachal', theme: 'all', duration: 'all' });
    } else if (destId === 'spiti') {
      setActiveFilter({ region: 'himachal', theme: 'Adventure & Treks', duration: 'all' });
    } else if (destId === 'rishikesh') {
      setActiveFilter({ region: 'uttarakhand', theme: 'Adventure & Treks', duration: 'all' });
    } else if (destId === 'kedarnath') {
      setActiveFilter({ region: 'uttarakhand', theme: 'Spiritual / Chardham', duration: 'all' });
    }
    scrollTo('packages');
  };

  // When user clicks "View Packages" in Destination Explorer
  const handleSelectDestination = (destId) => {
    if (['manali', 'spiti', 'shimla', 'dharamshala', 'kasol', 'jibhi'].includes(destId)) {
      setActiveFilter({ region: 'himachal', theme: 'all', duration: 'all' });
    } else {
      setActiveFilter({ region: 'uttarakhand', theme: 'all', duration: 'all' });
    }
    scrollTo('packages');
  };

  // Direct Chardham booking trigger
  const handleBookChardham = () => {
    const chardhamPkg = tourPackagesData.find(p => p.id === 'pkg-3') || tourPackagesData[2];
    setBookingPkg(chardhamPkg);
  };

  return (
    <div className="min-h-screen bg-[#071f14] text-slate-100 flex flex-col font-sans selection:bg-[#f5b700] selection:text-[#0b2b1d]">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenCustomPlanner={() => setCustomPlannerOpen(true)}
        onOpenBooking={() => setBookingPkg(tourPackagesData[0])}
      />

      {/* Main Page Contents */}
      <main className="flex-1">
        {/* Hero Section matching the user's reference image */}
        <HeroSection
          onSelectDestinationCard={handleSelectDestinationCard}
          onSearchSubmit={handleHeroSearchSubmit}
          onOpenCustomPlanner={() => setCustomPlannerOpen(true)}
        />

        {/* Tour Packages Catalog Section */}
        <PackagesSection
          packages={tourPackagesData}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onViewItinerary={(pkg) => setItineraryPkg(pkg)}
          onBookNow={(pkg) => setBookingPkg(pkg)}
        />

        {/* Destination Explorer (Himachal vs Uttarakhand) */}
        <DestinationExplorer 
          onSelectDestination={handleSelectDestination}
        />

        {/* Chardham Yatra & High Altitude Trek Spotlight */}
        <ChardhamSpotlight 
          onBookChardham={handleBookChardham}
        />

        {/* Why Choose Us (Himachal local advantages) */}
        <WhyChooseUs />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Us & Office Desks */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCustomPlanner={() => setCustomPlannerOpen(true)} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Itinerary Modal */}
      <ItineraryModal
        pkg={itineraryPkg}
        isOpen={Boolean(itineraryPkg)}
        onClose={() => setItineraryPkg(null)}
        onBookNow={(pkg) => {
          setItineraryPkg(null);
          setBookingPkg(pkg);
        }}
      />

      {/* Interactive Booking & Reservation Engine Modal */}
      <BookingModal
        pkg={bookingPkg}
        isOpen={Boolean(bookingPkg)}
        onClose={() => setBookingPkg(null)}
      />

      {/* Custom Itinerary Trip Planner Modal */}
      <CustomTripPlanner
        isOpen={customPlannerOpen}
        onClose={() => setCustomPlannerOpen(false)}
      />

    </div>
  );
}
