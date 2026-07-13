/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, selectedIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setCurrentIndex(selectedIndex);
    setZoom(false);
  }, [selectedIndex]);

  // Handle escape and arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setZoom(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setZoom(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = images[currentIndex];

  if (!activeImage) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between select-none animate-fade-in">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between p-4 sm:p-6 text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600 px-2.5 py-1 rounded-full text-white">
            {activeImage.category}
          </span>
          <h4 className="text-sm sm:text-base font-semibold mt-1">
            {activeImage.title}
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setZoom(!zoom)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
            title="Toggle Zoom"
          >
            {zoom ? <ZoomOut className="h-5.5 w-5.5" /> : <ZoomIn className="h-5.5 w-5.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
            title="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-between px-2 sm:px-6 relative">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white/80 hover:text-white transition-colors z-10 outline-none"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>

        {/* Display Image */}
        <div className="w-full h-full max-h-[75vh] flex items-center justify-center overflow-hidden p-4">
          <img
            src={activeImage.url}
            alt={activeImage.title}
            referrerPolicy="no-referrer"
            className={`max-w-full max-h-full rounded-lg object-contain transition-transform duration-300 ${zoom ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
            onClick={() => setZoom(!zoom)}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white/80 hover:text-white transition-colors z-10 outline-none"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Bottom Details Footer */}
      <div className="p-6 text-center text-gray-400 text-xs sm:text-sm bg-gradient-to-t from-black/80 to-transparent">
        <p className="max-w-2xl mx-auto text-gray-300 font-medium leading-relaxed">
          {activeImage.description}
        </p>
        <span className="inline-block mt-2 font-mono text-gray-500">
          Image {currentIndex + 1} of {images.length}
        </span>
      </div>
    </div>
  );
}
