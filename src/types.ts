/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact' | 'order';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
}

export interface MedicineCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Device';
  purpose: string;
  description: string;
  isRxRequired: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Store Front' | 'Shelves' | 'Products' | 'Equipment' | 'Customers';
  description: string;
}

export interface WorkingStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  uploadPrescription: 'Yes' | 'No';
  message: string;
  preferredDeliveryTime: string;
}
