/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, PhoneCall, Send, HeartPulse, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to add drop shadow & blur effect to sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-40 relative">
      {/* Top Urgent Emergency Indicator Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-700 dark:to-teal-800 text-white py-2 px-4 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-emerald-200" />
            <span>Life Medical Hall - Trusted Pharmacy near Over Bridge Gaya since 1998</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] bg-white/25 px-2 py-0.5 rounded-full">
              <Clock className="h-3 w-3" /> {BUSINESS_INFO.workingHours}
            </span>
            <span className="hidden sm:inline">|</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline flex items-center gap-1 font-bold">
              Call Support: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div 
        className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md py-3 border-b border-gray-100 dark:border-gray-800' : 'bg-white dark:bg-gray-950 py-4 border-b border-gray-50 dark:border-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-2.5 text-left select-none outline-none group cursor-pointer"
          >
            <div className="relative p-2.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/60 transition-colors">
              <HeartPulse className="h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-teal-500 rounded-full border-2 border-white dark:border-gray-950" />
            </div>
            <div>
              <span className="block font-black tracking-tight text-gray-950 dark:text-white text-lg sm:text-xl font-sans">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-none mt-0.5">
                Pharmacy & Surgical
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === link.id ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-900/40'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 text-gray-600 dark:text-gray-300 cursor-pointer transition-colors"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </button>

            {/* Call Now Shortcut */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all flex items-center gap-1.5 shrink-0"
            >
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              Call Store
            </a>

            {/* Order On WhatsApp */}
            <button
              onClick={() => handleLinkClick('order')}
              className="px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-sm hover:shadow transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              WhatsApp Order
            </button>
          </div>

          {/* Mobile Layout Actions Row */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-indigo-600" />}
            </button>
            
            <button
              onClick={() => handleLinkClick('order')}
              className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl"
            >
              <Send className="h-5 w-5" />
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu list */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fade-in bg-gray-950/40 backdrop-blur-sm">
          <div className="absolute top-[108px] left-4 right-4 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-bold transition-all text-sm ${activeTab === link.id ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  {link.label}
                </button>
              ))}
              
              <hr className="my-4 border-gray-100 dark:border-gray-800" />
              
              {/* Mobile Actions block */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-4 py-3.5 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50 text-center flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="h-4 w-4 text-emerald-600" />
                  Call Now
                </a>
                
                <button
                  onClick={() => handleLinkClick('order')}
                  className="px-4 py-3.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow text-center flex items-center justify-center gap-1.5"
                >
                  <Send className="h-4 w-4" />
                  Order Form
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
