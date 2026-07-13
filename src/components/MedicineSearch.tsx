/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Search, Pill, ShieldAlert, CheckCircle, ArrowRight, X } from 'lucide-react';
import { POPULAR_MEDICINES } from '../data';
import { MedicineProduct, ActiveTab } from '../types';

interface MedicineSearchProps {
  onSelectMedicine: (medName: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function MedicineSearch({ onSelectMedicine, setActiveTab }: MedicineSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<MedicineProduct[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = POPULAR_MEDICINES.filter(med => 
      med.name.toLowerCase().includes(query.toLowerCase()) ||
      med.purpose.toLowerCase().includes(query.toLowerCase()) ||
      med.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  // Handle clicking outside to close autocomplete list
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOrderClick = (med: MedicineProduct) => {
    onSelectMedicine(med.name);
    setActiveTab('order');
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div id="medicine-search-box" className="relative w-full max-w-xl mx-auto z-40" ref={containerRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-600 dark:text-emerald-400">
          <Search className="h-5 w-5" />
        </div>
        <input
          type="text"
          className="w-full pl-11 pr-10 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all text-sm outline-none"
          placeholder="Search medicines (e.g. Paracetamol, Amoxycillin, BP Monitor...)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-xl max-h-96 overflow-y-auto z-50 transition-all divide-y divide-gray-50 dark:divide-gray-700">
          {results.length > 0 ? (
            results.map((med) => (
              <div 
                key={med.id} 
                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5 shrink-0">
                    <Pill className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {med.name}
                      </h4>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {med.type}
                      </span>
                      {med.isRxRequired ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-md bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400">
                          <ShieldAlert className="h-3 w-3" /> Rx Required
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-md bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400">
                          <CheckCircle className="h-3 w-3" /> OTC (No Rx)
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                      Purpose: <span className="text-gray-700 dark:text-gray-300">{med.purpose}</span>
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      {med.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleOrderClick(med)}
                  className="sm:self-center shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg shadow-sm hover:shadow transition-all group"
                >
                  Order Form 
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm font-medium">No direct match for "{query}" in featured list.</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                You can still proceed directly to our order form to type any medicine name!
              </p>
              <button
                onClick={() => {
                  onSelectMedicine(query);
                  setActiveTab('order');
                  setQuery('');
                  setIsOpen(false);
                }}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                Inquire via WhatsApp Order Form
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
