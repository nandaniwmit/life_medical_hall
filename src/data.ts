/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceItem, TestimonialItem, MedicineCategory, MedicineProduct, GalleryImage, WorkingStep } from './types';

export const BUSINESS_INFO = {
  name: 'Life Medical Hall',
  alias: 'Life Medical Hall',
  category: 'Pharmacy | Medical Store',
  location: 'QXVQ+P4W, Tekari Road, More, near Over Bridge, Old Kareem Ganj, Kareem Ganj, Gaya, Bihar 823001',
  phone: '09431207522',
  phoneFormatted: '+919431207522',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1189447190117!2d84.9976378!3d25.0298335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf4420bb5c5%3A0xe5a3c9e6caec09!2sLife%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  mapDirectionsUrl: 'https://maps.google.com/?q=Life+Medical+Hall+Tekari+Road+Gaya+Bihar',
  workingHours: 'Everyday: 8:00 AM - 10:00 PM',
  email: 'life.medical.gaya@gmail.com',
  ownerName: 'Mukesh Kumar',
  establishedYear: '1998'
};

export const CHOOSE_US_CARDS = [
  {
    title: '100% Genuine Medicines',
    description: 'We source medicines directly from authorized pharmaceutical distributors, ensuring complete reliability and safety.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Experienced Pharmacists',
    description: 'Our knowledgeable staff ensures you get correct dosages, drug advice, and professional assistance.',
    icon: 'UserCheck'
  },
  {
    title: 'Affordable Prices',
    description: 'We believe in accessible healthcare, offering genuine medicines at competitive, reasonable rates.',
    icon: 'BadgePercent'
  },
  {
    title: 'Fast Counter Service',
    description: 'Quick processing of prescriptions so you do not have to wait. Your health is our first priority.',
    icon: 'Zap'
  },
  {
    title: 'Prescription Verification',
    description: 'Meticulous checking of doctor prescriptions to prevent dosage or medication errors.',
    icon: 'FileSpreadsheet'
  },
  {
    title: 'Diverse Healthcare Products',
    description: 'A complete inventory of surgical, wellness, baby care, personal care, and orthopedic aids.',
    icon: 'HeartPulse'
  },
  {
    title: 'Trusted Local Pharmacy',
    description: 'Serving the Gaya community with loyalty and exceptional quality since 1998.',
    icon: 'MapPin'
  },
  {
    title: 'Easy WhatsApp Support',
    description: 'Send your prescription with a single click, verify availability, and order quickly via WhatsApp.',
    icon: 'MessageSquare'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    description: 'Dispensing a wide range of essential life-saving and chronic care medicines under strict pharmacist supervision.',
    icon: 'FileText',
    benefits: ['Accurate dosage checks', 'Advice on side-effects & usage', 'Refill reminders', 'Proper storage assurance']
  },
  {
    id: 'otc',
    title: 'OTC Medicines & General Health',
    description: 'Over-the-counter daily healthcare items, fever remedies, cough syrups, pain relievers, and digestive care products.',
    icon: 'Pill',
    benefits: ['Safe recommendations', 'Wide selection of popular brands', 'First aid support', 'Accident essentials']
  },
  {
    id: 'supplements',
    title: 'Health & Dietary Supplements',
    description: 'Premium vitamins, minerals, protein supplements, health drinks, diabetic snacks, and immunity boosters.',
    icon: 'Activity',
    benefits: ['Certified products', 'Vitamins & iron supplements', 'Energy drinks & sports nutrition', 'Special diabetic supplements']
  },
  {
    id: 'baby-care',
    title: 'Baby Care Products',
    description: 'Full range of baby care needs including milk formulas, baby food, baby diapers, baby skin care, and essential health monitors.',
    icon: 'Baby',
    benefits: ['Hypoallergenic brands', 'Nutritional formula powders', 'Diaper rash creams & powders', 'Gentle skin moisturizers']
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    description: 'High-quality personal hygiene, oral care, dermatological skin creams, soaps, hair care, and winter lotions.',
    icon: 'Sparkles',
    benefits: ['Dermatologist approved items', 'Oral health essentials', 'Hand sanitizers & soaps', 'Premium herbal cosmetics']
  },
  {
    id: 'medical-equip',
    title: 'Medical Devices & Equipment',
    description: 'Digital Blood Pressure monitors, glucometers, nebulizers, thermometers, pulse oximeters, and vaporizers.',
    icon: 'Cpu',
    benefits: ['Calibration checked devices', 'Demonstration support', 'Brand warranty services', 'Ready-to-use batteries included']
  },
  {
    id: 'surgical',
    title: 'Surgical Supplies & Dressings',
    description: 'Complete first aid and advanced surgical items including bandages, sterile gauze pads, adhesive tapes, and antiseptics.',
    icon: 'Scissors',
    benefits: ['Sterile packaging', 'Hospital grade supplies', 'Custom first-aid kit packing', 'Surgical gloves & masks']
  },
  {
    id: 'diabetic',
    title: 'Diabetic Care Management',
    description: 'A focused zone for diabetic test strips, insulin syringe devices, sugar-free nutrition products, and diabetic footwear guidance.',
    icon: 'Droplet',
    benefits: ['Accurate monitoring kits', 'Insulin storage ice-packs', 'Sugar-free sweeteners', 'Special nerve care creams']
  }
];

export const CATEGORIES: MedicineCategory[] = [
  { id: 'tablets', name: 'Tablets', description: 'Oral solid dosage medications', icon: 'Layers' },
  { id: 'capsules', name: 'Capsules', description: 'Gelatin shell therapeutic doses', icon: 'Pocket' },
  { id: 'syrups', name: 'Syrups', description: 'Liquid formulations & pediatric drops', icon: 'GlassWater' },
  { id: 'equipment', name: 'Medical Equipment', description: 'Monitoring and respiratory care units', icon: 'Thermometer' },
  { id: 'supplements', name: 'Supplements', description: 'Nutritional powders & vitamin tablets', icon: 'Smile' },
  { id: 'diabetic', name: 'Diabetic Care', description: 'Monitoring strips, glucometers & sugar control', icon: 'Heart' }
];

export const POPULAR_MEDICINES: MedicineProduct[] = [
  { id: 'm1', name: 'Paracetamol 650mg', category: 'tablets', type: 'Tablet', purpose: 'Fever & pain relief', description: 'Standard over-the-counter painkiller and fever reducer.', isRxRequired: false },
  { id: 'm2', name: 'Amoxycillin 500mg', category: 'capsules', type: 'Capsule', purpose: 'Bacterial infection treatment', description: 'Broad-spectrum penicillin antibiotic (requires a doctor prescription).', isRxRequired: true },
  { id: 'm3', name: 'Cough Syrup (Levosalbutamol & Ambroxol)', category: 'syrups', type: 'Syrup', purpose: 'Productive cough relief', description: 'Clears chest congestion and helps ease breathing.', isRxRequired: false },
  { id: 'm4', name: 'Accu-Chek Active Test Strips', category: 'diabetic', type: 'Device', purpose: 'Blood glucose monitoring', description: 'Premium blood sugar level measuring strips for home monitoring.', isRxRequired: false },
  { id: 'm5', name: 'Digital BP Monitor (Omron)', category: 'equipment', type: 'Device', purpose: 'Blood pressure tracking', description: 'Highly accurate, clinically validated arm-type BP monitor.', isRxRequired: false },
  { id: 'm6', name: 'Multivitamin with Zinc', category: 'supplements', type: 'Tablet', purpose: 'Immunity & general health', description: 'Premium daily supplement designed to improve wellness and daily metabolism.', isRxRequired: false },
  { id: 'm7', name: 'Pantoprazole 40mg', category: 'tablets', type: 'Tablet', purpose: 'Acidity & heartburn relief', description: 'Reduces excess stomach acid and cures acid reflux.', isRxRequired: true },
  { id: 'm8', name: 'Whey Protein Formula', category: 'supplements', type: 'Supplement', purpose: 'Muscle recovery & nutrition', description: 'Premium clinical-grade protein supplement for quick recovery and vitality.', isRxRequired: false },
  { id: 'm9', name: 'Insulin Glargine 100 IU/mL', category: 'diabetic', type: 'Injection', purpose: 'Diabetes insulin management', description: 'Long-acting basal insulin for the control of high blood sugar.', isRxRequired: true },
  { id: 'm10', name: 'Digital Infrared Thermometer', category: 'equipment', type: 'Device', purpose: 'Non-contact temperature check', description: 'High precision rapid temperature scanner with tri-color fever alert screen.', isRxRequired: false }
];

export const TRUST_POINTS = [
  { title: 'Established Experience', detail: 'Serving Gaya residents since 1998 with continuous medical excellence and support.' },
  { title: 'Quality Assured Products', detail: 'Each batch is scanned for correct shelf life, batch tracking, and ideal storage condition.' },
  { title: 'Quick & Courteous Care', detail: 'Average dispensing time is under 5 minutes, backed by professional friendly consultations.' },
  { title: 'Vast, Verified Stock', detail: 'Comprehensive drug catalog ranging from pediatric syrups to oncology life-saving medicines.' },
  { title: 'Reasonable Pricing', detail: 'We strictly adhere to maximum discount rates and never inflate healthcare costs.' },
  { title: 'Convenient Bridge Location', detail: 'Located near the main Over Bridge on Tekari Road, super easy to access and park.' }
];

export const WORKING_PROCESS: WorkingStep[] = [
  { step: 1, title: 'Visit our Store', description: 'Walk into Life Medical Hall, situated near the Over Bridge on Tekari Road.', icon: 'Store' },
  { step: 2, title: 'Share Prescription', description: 'Hand over your prescription to our certified pharmacist or upload it via WhatsApp.', icon: 'FileText' },
  { step: 3, title: 'Get Medicines', description: 'We instantly retrieve and double-check your medication and explain correct dosages.', icon: 'Pill' },
  { step: 4, title: 'Easy Digital Payment', description: 'Pay conveniently using UPI, QR Code scans, Cash, or Cards at the counter.', icon: 'CreditCard' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Suresh Chandra Prasad',
    role: 'Retired Government Officer',
    location: 'Old Kareem Ganj, Gaya',
    rating: 5,
    review: 'Life Medical Hall has been our family pharmacy for over 20 years. Mukesh and his staff are incredibly well-behaved and cooperative. They always have my monthly blood pressure and diabetes medicines in stock, and the prices are always genuine.',
    date: 'June 12, 2026',
    avatar: 'https://picsum.photos/seed/suresh/100/100'
  },
  {
    id: 't2',
    name: 'Anjali Sharma',
    role: 'School Teacher',
    location: 'Kareem Ganj, Gaya',
    rating: 5,
    review: 'I love how convenient it is to order via WhatsApp. I just snap a photo of my baby prescription, upload it on their site, and they keep everything ready for pick-up. Saved me so much waiting time when juggling home and work.',
    date: 'May 28, 2026',
    avatar: 'https://picsum.photos/seed/anjali/100/100'
  },
  {
    id: 't3',
    name: 'Dr. Rajiv Ranjan',
    role: 'Consultant Pediatrician',
    location: 'Gaya, Bihar',
    rating: 5,
    review: 'As a doctor, I recommend Life Medical Hall because they never compromise on cold-chain protocols for critical pediatric vaccinations and insulin. They are reliable, and they only stock genuine brands.',
    date: 'April 15, 2026',
    avatar: 'https://picsum.photos/seed/rajiv/100/100'
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    role: 'Local Business Owner',
    location: 'Tekari Road, Gaya',
    rating: 5,
    review: 'Very professional. Last week I urgently needed a nebulizer and a pulse oximeter for my grandfather. The staff not only supplied them immediately at a reasonable price but also patiently demonstrated how to operate them correctly.',
    date: 'June 02, 2026',
    avatar: 'https://picsum.photos/seed/vikram/100/100'
  },
  {
    id: 't5',
    name: 'Meena Kumari',
    role: 'Homemaker',
    location: 'More area, Gaya',
    rating: 5,
    review: 'The shop is very clean and easy to access. Even when there is a rush, their digital payment and fast service ensure you get your medicines within minutes. Great discounts on daily supplements and baby products too!',
    date: 'July 01, 2026',
    avatar: 'https://picsum.photos/seed/meena/100/100'
  },
  {
    id: 't6',
    name: 'Ravi Malhotra',
    role: 'IT Professional',
    location: 'Gaya, Bihar',
    rating: 5,
    review: 'Excellent service. I live out of Bihar but can easily order medicines for my parents living in Old Kareem Ganj via WhatsApp. They verify everything professionally and provide excellent support on phone. Highly recommended!',
    date: 'May 10, 2026',
    avatar: 'https://picsum.photos/seed/ravi/100/100'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Ordering',
    question: 'How do I order medicines using the WhatsApp Order Form?',
    answer: 'Simply navigate to our "WhatsApp Order" section, fill in your Name, Phone, Medicine requirements, choose whether you want to upload a prescription, and click "Send via WhatsApp". The website will formulate a neat message and open WhatsApp on your phone or PC with all details pre-filled. You can then attach a photo of your prescription and press send!'
  },
  {
    id: 'faq2',
    category: 'Prescriptions',
    question: 'Do you require a doctor\'s prescription for all medicines?',
    answer: 'Over-the-counter (OTC) medicines, baby items, vitamins, and general skincare do not require a prescription. However, antibiotic, hormonal, psychiatric, and other Schedule H/X medications strictly require a valid doctor prescription before dispensing, in compliance with government regulations.'
  },
  {
    id: 'faq3',
    category: 'Product Quality',
    question: 'Are the medicines sold at Life Medical Hall genuine?',
    answer: 'Absolutely. We guarantee 100% genuine medicines and medical devices. We purchase directly from authorized, licensed pharmaceutical company distributors. We never deal with unverified middlemen.'
  },
  {
    id: 'faq4',
    category: 'Location',
    question: 'What is the exact location of Life Medical Hall?',
    answer: 'We are situated on Tekari Road, More area, near the main Over Bridge in Gaya, Bihar (Old Kareem Ganj). It is a prominent, easy-to-reach spot with ample space for parking two-wheelers and stopping cars.'
  },
  {
    id: 'faq5',
    category: 'Hours',
    question: 'What are your working hours? Do you open on Sundays?',
    answer: 'Yes, we are open seven days a week! Our working hours are everyday from 8:00 AM to 10:00 PM. We are committed to serving you without weekly offs.'
  },
  {
    id: 'faq6',
    category: 'Deliveries',
    question: 'Do you provide home delivery services in Gaya?',
    answer: 'Yes, we provide home delivery services for elderly customers and bulk monthly orders within Old Kareem Ganj, Kareem Ganj, and neighboring areas of Tekari Road. For urgent or smaller orders, you can pre-order on WhatsApp and pick them up instantly to avoid waiting.'
  },
  {
    id: 'faq7',
    category: 'Medical Equipment',
    question: 'Do you sell medical devices like BP monitors and Nebulizers?',
    answer: 'Yes, we stock high-quality medical devices including Omron BP monitors, Dr. Trust Glucometers, portable nebulizers, digital infrared thermometers, pulse oximeters, and hot water bags, with standard manufacturer warranties.'
  },
  {
    id: 'faq8',
    category: 'Returns',
    question: 'What is your return/exchange policy?',
    answer: 'We accept returns or exchanges for unused, sealed medicines in their original packaging with a valid store bill within 7 days of purchase. However, please note that life-saving specialty drugs, refrigerated injections (cold chain), and medical equipment cannot be returned or exchanged due to temperature control and hygiene safety guidelines.'
  },
  {
    id: 'faq9',
    category: 'Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including cash, credit cards, debit cards, and secure UPI digital wallet payments (PhonePe, Google Pay, Paytm, BHIM) via dynamic store QR code.'
  },
  {
    id: 'faq10',
    category: 'Discounts',
    question: 'Do you offer monthly subscription discounts or health package savings?',
    answer: 'Yes, for regular chronic-care medicines (like long-term blood pressure, thyroid, or diabetes medication), we provide attractive seasonal discounts and special rates to reduce your recurring monthly budget burdens. Please ask at the counter!'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    url: '/src/assets/images/pharmacy_store_front_1783323664534.jpg',
    title: 'Store Front & Entrance',
    category: 'Store Front',
    description: 'Our welcoming entrance located conveniently on Tekari Road, More.'
  },
  {
    id: 'g2',
    url: '/src/assets/images/pharmacy_hero_banner_1783323645447.jpg',
    title: 'Clean Pharmacy Shelves',
    category: 'Shelves',
    description: 'Impeccably organized medicine compartments ensuring immediate retrieval.'
  },
  {
    id: 'g3',
    url: 'https://picsum.photos/seed/medprod1/800/600',
    title: 'Healthcare Devices & Glucometers',
    category: 'Equipment',
    description: 'High-precision blood sugar meters and diagnostic gear on display.'
  },
  {
    id: 'g4',
    url: 'https://picsum.photos/seed/medprod2/800/600',
    title: 'Vitamins & Pediatric Care Drops',
    category: 'Products',
    description: 'Vibrant, climate-controlled shelves containing baby supplements and health drops.'
  },
  {
    id: 'g5',
    url: 'https://picsum.photos/seed/medprod3/800/600',
    title: 'Daily First Aid & Surgical Goods',
    category: 'Products',
    description: 'Sterile surgical pads, bandages, and critical home aid supplies.'
  },
  {
    id: 'g6',
    url: 'https://picsum.photos/seed/medprod4/800/600',
    title: 'Professional Customer Service',
    category: 'Customers',
    description: 'Ensuring reliable help, clear guidance, and double check on drug expiry.'
  }
];
