/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeartPulse, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Business Identity */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-black text-white text-lg leading-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                Licensed Pharmacy
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Your most reliable partner for genuine life-saving drugs, daily wellness items, premium orthopedic supports, and baby essentials in Gaya.
          </p>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 w-fit">
            <ShieldCheck className="h-4 w-4" />
            100% Genuine Medicines Guarantee
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3.5 text-sm font-medium">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('gallery')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Photo Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('faq')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Help & FAQs
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-emerald-400 transition-colors cursor-pointer text-left">
                Contact Store
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Premium Categories */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
            Our Services
          </h4>
          <ul className="space-y-3.5 text-sm font-medium">
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                Prescription Refills
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                OTC General Remedies
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                Diabetes Care Devices
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                Baby Care Formulas
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                Surgical Supplies
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 text-slate-400 transition-colors text-left">
                Health Supplements
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Location & Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
            Contact & Hours
          </h4>
          
          <div className="space-y-3.5 text-sm">
            <div className="flex gap-2.5 items-start">
              <MapPin className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
              <span className="text-slate-400 font-medium">
                {BUSINESS_INFO.location}
              </span>
            </div>

            <div className="flex gap-2.5 items-center">
              <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-slate-400 font-semibold">
                {BUSINESS_INFO.workingHours}
              </span>
            </div>

            <div className="flex gap-2.5 items-center">
              <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline text-slate-200 font-bold">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex gap-2.5 items-center">
              <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline text-slate-400">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneFormatted}`}
              className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold"
            >
              <MapPin className="h-4 w-4 text-emerald-400" />
              Get Directions
            </a>
          </div>
        </div>

      </div>

      <hr className="my-10 border-slate-800 max-w-7xl mx-auto" />

      {/* Policies & Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
        <div className="text-center sm:text-left">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors underline">WMIT</a>.</p>
          <p className="text-[10px] text-slate-600 mt-1 leading-relaxed">
            Registered Pharmacy License. Developed as a high-performance modern web experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms & Conditions</span>
          <span>•</span>
          <span className="hover:text-slate-300 transition-colors cursor-pointer">Medical Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}
