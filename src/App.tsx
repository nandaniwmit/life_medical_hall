/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, ShieldCheck, UserCheck, BadgePercent, Zap, FileSpreadsheet, 
  MapPin, MessageSquare, FileText, Pill, Activity, Baby, Sparkles, Cpu, 
  Scissors, Droplet, Phone, ChevronDown, ChevronUp, Star, Map, Store, 
  CreditCard, ArrowRight, ArrowLeft, Mail, Send, Check, ExternalLink, 
  Layers, Pocket, GlassWater, Thermometer, Smile, Heart, CheckCircle2, 
  Clock, Award, HelpCircle, ChevronRight, AlertCircle, ArrowUp
} from 'lucide-react';

import { ActiveTab, FAQItem, ServiceItem, TestimonialItem } from './types';
import { 
  BUSINESS_INFO, CHOOSE_US_CARDS, SERVICES, CATEGORIES, 
  POPULAR_MEDICINES, TRUST_POINTS, WORKING_PROCESS, 
  TESTIMONIALS, FAQS, GALLERY_IMAGES 
} from './data';

import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Footer from './components/Footer';
import MedicineSearch from './components/MedicineSearch';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import Lightbox from './components/Lightbox';

// Resolve generated local assets
// @ts-ignore
import heroBannerImg from './assets/images/pharmacy_hero_banner_1783323645447.jpg';
// @ts-ignore
import storeFrontImg from './assets/images/pharmacy_store_front_1783323664534.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Accordion state for FAQ page
  const [openFaq, setOpenFaq] = useState<string | null>('faq1');

  // Interactive Lightbox gallery state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Simple Contact Form submission state
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState('');

  // Back to Top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync Dark Mode state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleSelectMedicineFromSearch = (medName: string) => {
    setPrefilledMedicine(medName);
  };

  const handleClearPrefilledMedicine = () => {
    setPrefilledMedicine('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
      setContactError('Please fill in Name, Phone, and your Message.');
      return;
    }
    setContactError('');
    setContactSuccess(true);
    // Auto clear success message after 5 seconds
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ name: '', phone: '', email: '', message: '' });
    }, 5000);
  };

  const handleCategoryFilter = (catId: string) => {
    setSelectedCategory(catId);
  };

  const filteredMedicines = selectedCategory === 'all' 
    ? POPULAR_MEDICINES 
    : POPULAR_MEDICINES.filter(med => med.category === selectedCategory);

  const handleGalleryClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to dynamically render corresponding Lucide Icon by name
  const renderIcon = (iconName: string, className = "h-6 w-6") => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      ShieldCheck, UserCheck, BadgePercent, Zap, FileSpreadsheet, 
      HeartPulse, MapPin, MessageSquare, FileText, Pill, 
      Activity, Baby, Sparkles, Cpu, Scissors, Droplet, Store, CreditCard
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Pill className={className} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-800 dark:text-gray-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Dynamic SEO Tag Controller */}
      <SEOHead activeTab={activeTab} />

      {/* Sticky Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Main Container Wrapper */}
      <main className="flex-grow">
        
        {/* ==============================================
            HOME PAGE
            ============================================== */}
        {activeTab === 'home' && (
          <div className="space-y-20 animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden py-16">
              {/* Background Glows and Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/50 z-10" />
              <img 
                src={heroBannerImg} 
                alt="Life Medical Hall Pharmacy Banner" 
                className="absolute inset-0 w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold border border-emerald-400/30">
                    <Check className="h-3 w-3" /> Certified Licensed Chemist
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                    Life Medical Hall <br/>
                    <span className="text-emerald-400">Your Trusted Pharmacy in Tekari</span>
                  </h1>
                  
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-medium">
                    Serving Old Kareem Ganj & Tekari Road since 1998. Providing 100% genuine prescription medicines, premium healthcare products, orthopedic support, surgical kits and daily baby essentials at deeply affordable rates.
                  </p>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-gray-200 max-w-md pt-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-emerald-500/10 rounded-full text-emerald-400">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <span>100% Genuine Inventory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-emerald-500/10 rounded-full text-emerald-400">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <span>Prescription Verification</span>
                    </div>
                  </div>

                  {/* Primary Call to Actions */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-lg hover:shadow-emerald-950/20 text-sm sm:text-base flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Call Store Now
                    </a>
                    
                    <button
                      onClick={() => {
                        setActiveTab('order');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 transition-all text-sm sm:text-base flex items-center gap-2"
                    >
                      <Send className="h-5 w-5 text-emerald-400" />
                      WhatsApp Order Desk
                    </button>

                    <a
                      href={BUSINESS_INFO.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-gray-200 font-semibold text-sm sm:text-base flex items-center gap-2"
                    >
                      <MapPin className="h-5 w-5 text-emerald-400" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Overlaid quick contact info box */}
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 text-white space-y-5 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 border-b border-white/10 pb-3">
                    <Clock className="h-5.5 w-5.5 text-emerald-400" /> Store Operational Hours
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm font-medium">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                      <span>Monday - Sunday</span>
                      <span className="font-bold text-emerald-400">08:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                      <span>Emergency Support</span>
                      <span className="font-bold text-emerald-400">Always Open</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                      <span>WhatsApp Order Processing</span>
                      <span className="font-bold text-emerald-400">Fast Response</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-[11px] text-gray-300 text-center leading-relaxed">
                      *Prescriptions can be submitted 24/7 on WhatsApp. Delivery & pickup processed during retail working hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* LIVE MEDICINE SEARCH ZONE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 relative -mt-28 z-30">
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl text-center space-y-4">
                <div className="max-w-xl mx-auto space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Instant Pharmacy Inventory Search</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white">What Medicine Are You Looking For?</h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Search our database of popular products. If you find your item, click 'Order' to pre-populate our WhatsApp Form!
                  </p>
                </div>
                <MedicineSearch 
                  onSelectMedicine={handleSelectMedicineFromSearch} 
                  setActiveTab={setActiveTab} 
                />
              </div>
            </section>

            {/* 2. WHY CHOOSE US */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">Your Absolute Health Companion</h2>
                <div className="h-1.5 w-20 bg-emerald-600 rounded-full mx-auto" />
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                  We are more than just a medical store. We provide absolute trust, verification, and support for your life-saving medical requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CHOOSE_US_CARDS.map((card, i) => (
                  <div 
                    key={i} 
                    className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                        {renderIcon(card.icon, "h-6 w-6")}
                      </div>
                      <h3 className="font-extrabold text-gray-950 dark:text-white text-base sm:text-lg">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. OUR SERVICES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Services</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">Providing End-to-End Pharmacy Care</h2>
                <div className="h-1.5 w-20 bg-emerald-600 rounded-full mx-auto" />
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                  From specialized critical prescription medicines to modern electronic monitoring devices, discover our retail domains.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.slice(0, 6).map((service) => (
                  <div 
                    key={service.id}
                    className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
                  >
                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                          {renderIcon(service.icon, "h-6.5 w-6.5")}
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-950 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {service.benefits.slice(0, 3).map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/40 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                      <button 
                        onClick={() => {
                          setActiveTab('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Read Details
                      </button>
                      <button
                        onClick={() => {
                          setPrefilledMedicine(`Inquiry for: ${service.title}`);
                          setActiveTab('order');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
                      >
                        Inquire <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. FEATURED PRODUCTS GRID */}
            <section className="bg-slate-100 dark:bg-gray-900/40 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-left space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Featured Categories</span>
                    <h2 className="text-3xl font-black text-gray-950 dark:text-white">High Quality Stock on Display</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Explore our popular stock lists. Click 'Order' to prefill your shopping cart via WhatsApp.
                    </p>
                  </div>
                  
                  {/* Tab switches */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryFilter('all')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'all' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-gray-100'}`}
                    >
                      All
                    </button>
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryFilter(cat.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat.id ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-gray-100'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular medicines lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMedicines.slice(0, 6).map((med) => (
                    <div 
                      key={med.id} 
                      className="p-5 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded">
                            {med.type}
                          </span>
                          {med.isRxRequired ? (
                            <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 px-2.5 py-0.5 rounded">
                              Rx Required
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 px-2.5 py-0.5 rounded">
                              OTC Item
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-gray-900 dark:text-white text-base">
                            {med.name}
                          </h4>
                          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                            {med.purpose}
                          </p>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-400 line-clamp-2 leading-relaxed">
                          {med.description}
                        </p>
                      </div>

                      <div className="pt-5 mt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400">
                          Qty: 1 Unit / Pack
                        </span>
                        <button
                          onClick={() => {
                            setPrefilledMedicine(med.name);
                            setActiveTab('order');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                        >
                          Order via WhatsApp
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. WHY CUSTOMERS TRUST US */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 bg-gray-100">
                  <img 
                    src={storeFrontImg} 
                    alt="Life Medical Hall Store Front - Gaya" 
                    className="w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 text-white">
                    <div>
                      <h4 className="font-black text-lg">Life Medical Hall Storefront</h4>
                      <p className="text-xs text-gray-200">Established in Gaya, Bihar since 1998.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-emerald-600 text-white p-5 rounded-3xl shadow-xl flex-col items-center">
                  <span className="text-3xl font-black">28+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Years of Service</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Community Loyalty</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">Why Customers Trust Us Since 1998</h2>
                  <div className="h-1 bg-emerald-600 w-16 rounded" />
                </div>
                
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  We are a deeply respected pharmacy operating under active government drug licenses. Here is why the Old Kareem Ganj and Gaya community chooses Life Medical Hall:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TRUST_POINTS.map((pt, idx) => (
                    <div key={idx} className="p-4 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-start gap-3">
                      <div className="p-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0 mt-0.5">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-950 dark:text-white text-sm">
                          {pt.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium leading-normal">
                          {pt.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. WORKING PROCESS TIMELINE */}
            <section className="bg-slate-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Easy Workflow</span>
                  <h2 className="text-3xl sm:text-4xl font-black">How to Get Your Medicines</h2>
                  <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto" />
                  <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                    We've designed a highly optimized workflow to ensure your shopping and medical pickup experience is seamless and safe.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {/* Process line for large screens */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden lg:block z-0" />
                  
                  {WORKING_PROCESS.map((proc, i) => (
                    <div 
                      key={i} 
                      className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center space-y-4 relative z-10 hover:bg-white/10 transition-colors"
                    >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center font-black text-sm text-slate-950 shadow-md">
                        {proc.step}
                      </div>
                      <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full w-fit mx-auto mt-2">
                        {renderIcon(proc.icon, "h-7 w-7")}
                      </div>
                      <h3 className="font-extrabold text-base text-white">
                        {proc.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {proc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. CUSTOMER TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Reviews</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">Why Customers Recommend Us</h2>
                <div className="h-1.5 w-20 bg-emerald-600 rounded-full mx-auto" />
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                  Read genuine reviews and recommendations from families and medical professionals in Old Kareem Ganj, Gaya, and nearby.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                  <div 
                    key={t.id} 
                    className="p-6 sm:p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-500" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed italic">
                        "{t.review}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3.5 pt-4 border-t border-gray-50 dark:border-gray-800">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="h-10 w-10 rounded-full object-cover shrink-0" 
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-extrabold text-gray-950 dark:text-white text-xs sm:text-sm">
                          {t.name}
                        </h4>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                          {t.role} • <span className="text-gray-400 font-medium">{t.location}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. FAQ ACCORDION SECTION */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Got Questions?</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white">Frequently Asked Questions</h2>
                <div className="h-1.5 w-20 bg-emerald-600 rounded-full mx-auto" />
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Read these common questions to learn about prescription regulations, delivery, payment policies, and home diagnostic kit supplies.
                </p>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className="border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full text-left p-5 flex justify-between items-center gap-4 font-bold text-sm sm:text-base text-gray-900 dark:text-white select-none outline-none cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-emerald-600 shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="p-5 pt-0 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800 font-medium">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 9. GOOGLE MAP SECTION */}
            <section className="space-y-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-end gap-4">
                <div className="space-y-2 text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Find Us Easily</span>
                  <h2 className="text-3xl font-black text-gray-950 dark:text-white">Store Map & Access Location</h2>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Located on Tekari Road More, near the Over Bridge in Kareem Ganj, Gaya, Bihar.
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1.5 shrink-0 shadow shadow-emerald-500/20"
                >
                  <ExternalLink className="h-4 w-4" /> Open in Google Maps
                </a>
              </div>

              {/* Dynamic Map Frame */}
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-850 relative border-y border-gray-100 dark:border-gray-800">
                <iframe
                  title="Life Medical Hall Gaya Google Map"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:invert dark:contrast-90 dark:hue-rotate-180"
                />
              </div>
            </section>

            {/* 10. CONTACT CTA BOX */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
              <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-48 w-48 bg-emerald-500/10 rounded-full blur-3xl" />
                
                <div className="max-w-2xl mx-auto space-y-3 relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-black">Need Life-Saving Medicines Quickly?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    Do not compromise on your health treatments. Connect with Life Medical Hall now on WhatsApp or make an instant phone call to check medicine stocks and pricing.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-2xl flex items-center gap-2.5 transition-all shadow-md"
                  >
                    <Phone className="h-5 w-5" />
                    Call Store: {BUSINESS_INFO.phone}
                  </a>

                  <button
                    onClick={() => {
                      setActiveTab('order');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl flex items-center gap-2.5 hover:bg-slate-100 transition-all shadow-md"
                  >
                    <Send className="h-5 w-5 text-emerald-600" />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ==============================================
            ABOUT PAGE
            ============================================== */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20 animate-fade-in">
            
            {/* Page Header banner */}
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">About Our Company</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Serving Gaya with Trust & Compassion</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Read the history, mission, values, and story of Life Medical Hall, operating nearby the main Gaya Over Bridge.
              </p>
            </div>

            {/* Business Story section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white">
                  Our Humble Journey Since {BUSINESS_INFO.establishedYear}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  Established in 1998 by Shri Mukesh Kumar, Life Medical Hall was founded on a simple principle: ensuring that the residents of Old Kareem Ganj, Tekari Road, and wider Gaya can access genuine life-saving medicines and surgical goods without hassle.
                </p>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  Over the past {new Date().getFullYear() - Number(BUSINESS_INFO.establishedYear)} years, the healthcare landscape has changed, but our commitment remains untouched. We have upgraded our store with digital inventories, air-conditioned vaccine storage, and rapid WhatsApp-based ordering to make life easier for the younger tech-savvy generation and elderly parents alike.
                </p>
                
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 dark:border-emerald-500 rounded-r-2xl text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                  "Health care is not a business transaction; it is a sacred bond of faith and quality. At Life Medical Hall, we protect that faith every single day."
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <img 
                  src={storeFrontImg} 
                  alt="Inside Life Medical Hall shelves" 
                  className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-xl font-bold text-xs uppercase shadow">
                  Registered Chemist Shop
                </div>
              </div>
            </section>

            {/* Mission, Vision, and Values Block */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl space-y-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-gray-950 dark:text-white">Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  To supply 100% genuine, licensed, and highly reliable medicinal products at the most affordable rates while promoting absolute usage awareness in Bihar.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl space-y-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-gray-950 dark:text-white">Our Vision</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  To set the standard for quality-controlled pharmaceutical storage, digital client assistance, and trusted consultation in Gaya district.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl space-y-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-gray-950 dark:text-white">Our Core Values</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  Complete integrity in drug sourcing, strict adherence to expiry dates, digital accuracy, compassion for the needy, and reliable customer service.
                </p>
              </div>
            </section>

            {/* Owner Message Timeline Block */}
            <section className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 text-center space-y-4">
                  <div className="relative inline-block">
                    <img 
                      src="https://picsum.photos/seed/mukeshkumar/300/300" 
                      alt="Mukesh Kumar - Owner of Life Medical Hall" 
                      className="h-44 w-44 rounded-full mx-auto object-cover border-4 border-emerald-500 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full shadow">
                      Store Owner
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-950 dark:text-white">{BUSINESS_INFO.ownerName}</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Chief Pharmacist & Founder</p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4 text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white">Message From the Owner</h3>
                  <div className="h-1 bg-emerald-600 w-12 rounded" />
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    "Welcome to Life Medical Hall. We started this medical store on Tekari Road with a small counter in 1998. Today, thanks to the continuous blessings and loyalty of our customers in Old Kareem Ganj, we have expanded our capacity to stock almost all essential prescription medicines and advanced diagnostic equipment."
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    "I want to assure every customer that we do not trade in bulk fake medicines. We deal only with certified pharmaceutical company agents and guarantee correct storage temperatures. If you need any advice or are unable to locate a specific life-saving injection, please call me directly or order via WhatsApp. My staff and I are always ready to help."
                  </p>
                </div>
              </div>
            </section>

            {/* Timeline block */}
            <section className="space-y-12">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Timeline</span>
                <h2 className="text-3xl font-black text-gray-950 dark:text-white">How We Evolved Over the Years</h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-1/2 before:w-1 before:bg-slate-200 dark:before:bg-gray-800">
                {/* Timeline node 1 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-12 pl-12 sm:pl-0">
                  <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-600 border-4 border-slate-50 dark:border-gray-950 z-10" />
                  <div className="sm:w-5/12 sm:text-right space-y-1">
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">1998</span>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-base">Humble Beginnings</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      Opened first retail medicine shop near Over Bridge on Tekari Road, starting with simple tablets and cough remedies.
                    </p>
                  </div>
                  <div className="sm:w-5/12 hidden sm:block" />
                </div>

                {/* Timeline node 2 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-12 pl-12 sm:pl-0">
                  <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-600 border-4 border-slate-50 dark:border-gray-950 z-10" />
                  <div className="sm:w-5/12 hidden sm:block" />
                  <div className="sm:w-5/12 text-left space-y-1">
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">2010</span>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-base">Surgical & Baby Care Segment</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      Expanded facilities to include premium surgical tools, post-operative dressings, infant nutritional supplements, and baby formulas.
                    </p>
                  </div>
                </div>

                {/* Timeline node 3 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-12 pl-12 sm:pl-0">
                  <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-600 border-4 border-slate-50 dark:border-gray-950 z-10" />
                  <div className="sm:w-5/12 sm:text-right space-y-1">
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">2020</span>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-base">Cold-Chain Vaccine Safety</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      Installed specialized healthcare grade refrigerators to safely store insulin, critical pediatric vaccines, and biological drugs.
                    </p>
                  </div>
                  <div className="sm:w-5/12 hidden sm:block" />
                </div>

                {/* Timeline node 4 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-12 pl-12 sm:pl-0">
                  <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-600 border-4 border-slate-50 dark:border-gray-950 z-10" />
                  <div className="sm:w-5/12 hidden sm:block" />
                  <div className="sm:w-5/12 text-left space-y-1">
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">Present Day</span>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-base">Modern Digital Pharmacy Portal</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      Launching instant WhatsApp order support, digital barcode pricing, and home assistance to ensure high-performance service.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ==============================================
            SERVICES PAGE
            ============================================== */}
        {activeTab === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16 animate-fade-in">
            
            {/* Page Header banner */}
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Our Retail Capabilities</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Full Scale Pharmaceutical Services</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Explore dedicated services and customized medical care ranges offered on location or via WhatsApp pre-order.
              </p>
            </div>

            {/* Dedicated full service cards (all 10 categories requested) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((serv) => (
                <div 
                  key={serv.id} 
                  className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all"
                >
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl h-fit shrink-0">
                    {renderIcon(serv.icon, "h-8 w-8")}
                  </div>
                  
                  <div className="space-y-4 text-left flex-grow">
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-950 dark:text-white">
                        {serv.title}
                      </h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase mt-1 tracking-wider">
                        Retail Segment
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      {serv.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-extrabold text-gray-950 dark:text-white uppercase tracking-wider">
                        Key Benefits & Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serv.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setPrefilledMedicine(`Required: ${serv.title}`);
                          setActiveTab('order');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
                      >
                        Order via WhatsApp Form
                      </button>
                      
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="px-4 py-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all"
                      >
                        Call Specialist
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Health Warnings block */}
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 rounded-3xl p-6 sm:p-8 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-left">
                <h4 className="font-bold text-sm sm:text-base">Important Healthcare Safety Advice</h4>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 font-medium leading-relaxed">
                  Self-medication can be extremely dangerous. Please consult a registered doctor before starting any strong antibiotic course or chronic medication. We strictly refuse to dispense Schedule H/H1, Schedule G, and Schedule X psychotropic substances without a physical or verified digitally signed doctor prescription under Indian Drug and Cosmetics Rules. Thank you for your cooperation in maintaining medical safety standards.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==============================================
            GALLERY PAGE
            ============================================== */}
        {activeTab === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12 animate-fade-in">
            
            {/* Page Header */}
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Photo Showcase</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Store Gallery & Shelves</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Take a virtual tour of Life Medical Hall. See our high-quality clean interiors, product racks, climate control devices, and welcoming storefront.
              </p>
            </div>

            {/* Masonry Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {GALLERY_IMAGES.map((img, index) => (
                <div 
                  key={img.id}
                  onClick={() => handleGalleryClick(index)}
                  className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-850 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 bg-white/20 backdrop-blur rounded-full text-white">
                        <ArrowUp className="h-6 w-6 rotate-45" />
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase bg-emerald-600 text-white px-2.5 py-1 rounded-full shadow">
                      {img.category}
                    </span>
                  </div>
                  <div className="p-5 text-left space-y-1">
                    <h3 className="font-extrabold text-gray-950 dark:text-white text-base">
                      {img.title}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-400 font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox component */}
            {lightboxOpen && (
              <Lightbox 
                images={GALLERY_IMAGES} 
                selectedIndex={lightboxIndex} 
                onClose={() => setLightboxOpen(false)} 
              />
            )}

          </div>
        )}

        {/* ==============================================
            TESTIMONIALS TAB/ROUTE DIRECT REDIRECT
            ============================================== */}
        {activeTab === 'testimonials' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12 animate-fade-in">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Customer Success Reviews</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Why Patients Trust Life Medical Hall</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Read direct reviews from local people, doctors, mothers, and elderly patients who source their chronic care items from Tekari Road, Gaya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div 
                  key={t.id} 
                  className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-md flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium">
                      "{t.review}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="h-12 w-12 rounded-full object-cover shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <h4 className="font-extrabold text-gray-950 dark:text-white text-sm sm:text-base">
                        {t.name}
                      </h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                        {t.role} • <span className="text-gray-400 font-semibold">{t.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google review star rating display summary */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 max-w-2xl mx-auto text-center space-y-4 shadow-sm">
              <h3 className="font-black text-xl text-gray-900 dark:text-white">Overall Customer Satisfaction</h3>
              <div className="flex items-center justify-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-2xl font-black text-gray-900 dark:text-white ml-2">4.9 / 5.0</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Based on more than 280+ verified Google maps reviews, customer feedback listings, and offline registry files in Old Kareem Ganj, Gaya, Bihar.
              </p>
            </div>
          </div>
        )}

        {/* ==============================================
            FAQ PAGE
            ============================================== */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12 animate-fade-in text-left">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Help Center</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Pharmacy Questions Answered</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-xl mx-auto">
                Find helpful guidance on prescription rules, returning medications, digital payment support, or bulk discount plans.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="border border-gray-100 dark:border-gray-850 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:border-emerald-500/30 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full text-left p-5 flex justify-between items-center gap-4 font-extrabold text-sm sm:text-base text-gray-950 dark:text-white select-none outline-none cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                          {faq.category}
                        </span>
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-55 dark:border-gray-800 font-medium">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==============================================
            CONTACT PAGE
            ============================================== */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16 animate-fade-in">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Contact Desk</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Get In Touch With Us</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Find complete details about physical navigation coordinates, operational hours, or submit a quick inquiry message online.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Business details card */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md space-y-6">
                  <h3 className="font-black text-xl text-gray-900 dark:text-white">Store Location & Support</h3>
                  <div className="h-1 bg-emerald-600 w-10 rounded" />
                  
                  <div className="space-y-5">
                    <div className="flex gap-3 items-start text-sm">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 dark:text-white">Address</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                          {BUSINESS_INFO.location}
                        </p>
                        <a 
                          href={BUSINESS_INFO.mapDirectionsUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-bold inline-flex items-center gap-1 mt-2"
                        >
                          <Map className="h-3 w-3" /> Get Google GPS Directions
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start text-sm">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 dark:text-white">Operational Hours</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {BUSINESS_INFO.workingHours}
                        </p>
                        <span className="text-[10px] bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-300 px-2 py-0.5 rounded font-bold mt-1.5 inline-block">
                          Open on Sundays
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start text-sm">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 dark:text-white">Direct Mobile Call</h4>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xs text-slate-800 dark:text-white font-black hover:underline mt-1 block">
                          {BUSINESS_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start text-sm">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 dark:text-white">Official Email</h4>
                        <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs text-slate-500 dark:text-slate-400 hover:underline mt-1 block">
                          {BUSINESS_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Inquiry Form */}
              <div className="lg:col-span-7 text-left">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-black text-xl text-gray-900 dark:text-white">Quick Online Inquiry</h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
                      We usually reply within 2 hours
                    </p>
                  </div>

                  {contactSuccess && (
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-green-900 dark:text-green-200">
                          Inquiry Sent Successfully!
                        </p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-1 font-medium">
                          Thank you for reaching out. Mukesh Kumar or our pharmacy supervisor will contact you shortly on your provided phone number.
                        </p>
                      </div>
                    </div>
                  )}

                  {contactError && (
                    <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-2xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-semibold text-red-900 dark:text-red-300">
                        {contactError}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Suresh Prasad"
                          className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 09431207522"
                          className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. example@gmail.com"
                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Your Message / Medicine Inquiry <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="What would you like to ask us? You can ask about medicine availability, orthopedic sizes, delivery options, etc."
                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all text-sm outline-none cursor-pointer shadow"
                    >
                      Send Inquiry Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Embed Map at bottom of Contact page */}
            <section className="space-y-4">
              <h3 className="font-extrabold text-xl text-gray-950 dark:text-white text-left">Interactive Geographic Route</h3>
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-850 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                <iframe
                  title="Life Medical Hall Gaya Interactive Contact Map"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:invert dark:contrast-90 dark:hue-rotate-180"
                />
              </div>
            </section>

          </div>
        )}

        {/* ==============================================
            WHATSAPP ORDER PAGE
            ============================================== */}
        {activeTab === 'order' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12 animate-fade-in">
            
            {/* Page Header */}
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Digital Counter Desk</span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Submit Your Prescription & Order</h1>
              <div className="h-1.5 w-24 bg-emerald-600 rounded-full mx-auto" />
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Fill out this quick form with your medicine list. Clicking submit will automatically compile your details and launch WhatsApp. You can then attach prescription images directly inside WhatsApp!
              </p>
            </div>

            {/* Render full order form component */}
            <WhatsAppOrderForm 
              prefilledMedicine={prefilledMedicine} 
              onClearPrefilled={handleClearPrefilledMedicine} 
            />

          </div>
        )}

      </main>

      {/* ==============================================
          FLOATING PERSISTENT SUPPORT WIDGETS
          ============================================== */}
      
      {/* 1. Floating Phone Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="fixed bottom-24 left-6 z-40 p-3.5 sm:p-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border border-white/10"
        title="Call Pharmacy Store"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
      </a>

      {/* 2. Floating WhatsApp Widget Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.phoneFormatted}?text=${encodeURIComponent('Hello Life Medical Hall, I would like to check availability for some medicines.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 p-3.5 sm:p-4 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border border-white/10"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      {/* 3. Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollBackToTop}
          className="fixed bottom-8 right-6 z-40 p-3 bg-slate-900/80 dark:bg-white/10 text-white hover:bg-slate-950/90 dark:hover:bg-white/20 rounded-full shadow-lg backdrop-blur border border-white/10 dark:border-white/5 transition-all hover:-translate-y-1"
          title="Scroll Back to Top"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </button>
      )}

      {/* Sticky Bottom Mobilized CTA Bar (only visible on mobile) */}
      <div className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 border-t border-gray-100 dark:border-gray-800 py-3 px-4 flex sm:hidden justify-between items-center gap-4 shadow-xl backdrop-blur-md">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 text-xs font-bold text-center text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center gap-1.5"
        >
          <Phone className="h-4 w-4 text-emerald-600" /> Call Now
        </a>
        <button
          onClick={() => {
            setActiveTab('order');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 py-3 text-xs font-bold text-center text-white bg-emerald-600 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Send className="h-4 w-4" /> Order Form
        </button>
      </div>

      {/* Standard Full Scale Corporate Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
