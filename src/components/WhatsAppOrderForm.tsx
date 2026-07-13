/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, PhoneCall, CheckCircle, HelpCircle, FileText, Calendar, MapPin, User, Mail, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderFormProps {
  prefilledMedicine: string;
  onClearPrefilled: () => void;
}

export default function WhatsAppOrderForm({ prefilledMedicine, onClearPrefilled }: WhatsAppOrderFormProps) {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    uploadPrescription: 'No',
    message: '',
    preferredDeliveryTime: 'Anytime'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof WhatsAppOrderFormData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync prefilled medicine name when searched from header or categories
  useEffect(() => {
    if (prefilledMedicine) {
      setFormData(prev => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof WhatsAppOrderFormData, string>> = {};
    
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer Name is required.';
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required.';
    } else if (!/^[0-9]{10,12}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-12 digit mobile number.';
    }

    if (!formData.medicineName.trim()) {
      newErrors.medicineName = 'Please enter the medicine name or list.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Delivery Address is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof WhatsAppOrderFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Formatting the WhatsApp message
    const formattedText = `Hello Life Medical Hall,

I would like to order medicines through your website order form:

*Customer Name:* ${formData.customerName}
*Phone/Mobile:* ${formData.mobileNumber}
*Email:* ${formData.email || 'N/A'}

*Medicine(s) Required:*
${formData.medicineName}

*Preferred Delivery Time:* ${formData.preferredDeliveryTime}
*Delivery Address:* ${formData.address}

*Prescription Upload Required:* ${formData.uploadPrescription}

*Additional Message:* ${formData.message || 'None'}

Please confirm availability and share details. Thank you!`;

    const encodedText = encodeURIComponent(formattedText);
    const waUrl = `https://wa.me/${BUSINESS_INFO.phoneFormatted}?text=${encodedText}`;
    
    // Open WhatsApp link
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    setIsSuccess(true);
    // Clear prefilled state callback
    onClearPrefilled();
  };

  return (
    <div id="whatsapp-order-form" className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
      <div className="bg-emerald-600 dark:bg-emerald-500 p-6 sm:p-8 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl">
            <Send className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">WhatsApp Medicine Order</h3>
            <p className="text-emerald-50 dark:text-emerald-100 text-xs sm:text-sm mt-1">
              Order genuine medicines in 3 quick steps. Fill details, submit to WhatsApp, and snap/attach your prescription!
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {isSuccess && (
          <div className="p-4 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-2xl flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-green-900 dark:text-green-200">
                Order Compiled Successfully!
              </p>
              <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                Your prefilled text has been formatted and redirected to WhatsApp. If the tab did not open, click the button below to retry or call us directly at {BUSINESS_INFO.phone}.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Customer Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="customerName"
              placeholder="e.g. Suresh Prasad"
              className={`w-full p-3 rounded-xl border ${errors.customerName ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 dark:border-gray-700 focus:ring-emerald-500'} bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2`}
              value={formData.customerName}
              onChange={handleInputChange}
            />
            {errors.customerName && <p className="text-xs text-red-500 font-medium">{errors.customerName}</p>}
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="e.g. 9431207522"
              className={`w-full p-3 rounded-xl border ${errors.mobileNumber ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 dark:border-gray-700 focus:ring-emerald-500'} bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2`}
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            {errors.mobileNumber && <p className="text-xs text-red-500 font-medium">{errors.mobileNumber}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. customer@gmail.com"
              className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Preferred Delivery Time */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Preferred Delivery Time
            </label>
            <select
              name="preferredDeliveryTime"
              className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2"
              value={formData.preferredDeliveryTime}
              onChange={handleInputChange}
            >
              <option value="Anytime">Anytime (Fastest)</option>
              <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
              <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
              <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
              <option value="Night (8PM - 10PM)">Night (8PM - 10PM)</option>
            </select>
          </div>
        </div>

        {/* Medicines Needed */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Medicine Names & Quantity <span className="text-red-500">*</span>
          </label>
          <textarea
            name="medicineName"
            rows={3}
            placeholder="List medicines and quantities required (e.g. Paracetamol 650mg - 2 strips, BP Monitor - 1)"
            className={`w-full p-3 rounded-xl border ${errors.medicineName ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 dark:border-gray-700 focus:ring-emerald-500'} bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2`}
            value={formData.medicineName}
            onChange={handleInputChange}
          />
          {errors.medicineName && <p className="text-xs text-red-500 font-medium">{errors.medicineName}</p>}
          <p className="text-xs text-slate-400">
            Tip: You can search or select medicines above to pre-populate this field.
          </p>
        </div>

        {/* Prescription Option */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Do you have a doctor's prescription photo?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-sm text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name="uploadPrescription"
                value="Yes"
                checked={formData.uploadPrescription === 'Yes'}
                onChange={handleInputChange}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
              />
              Yes, I have a prescription
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-medium text-sm text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name="uploadPrescription"
                value="No"
                checked={formData.uploadPrescription === 'No'}
                onChange={handleInputChange}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
              />
              No (OTC items or general products)
            </label>
          </div>
          {formData.uploadPrescription === 'Yes' && (
            <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs border border-emerald-100 dark:border-emerald-900">
              <strong>Prescription details:</strong> When WhatsApp opens, please attach your prescription image directly from your gallery before hitting send.
            </div>
          )}
        </div>

        {/* Delivery Address */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Full Delivery Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            rows={2.5}
            placeholder="e.g. Near Over Bridge, Old Kareem Ganj, Gaya, Bihar 823001"
            className={`w-full p-3 rounded-xl border ${errors.address ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 dark:border-gray-700 focus:ring-emerald-500'} bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2`}
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <p className="text-xs text-red-500 font-medium">{errors.address}</p>}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Special Instructions (Optional)
          </label>
          <textarea
            name="message"
            rows={2}
            placeholder="Any allergies, specific brand preference, or landmark advice..."
            className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-emerald-500 bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-white text-sm outline-none focus:ring-2"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        {/* Form Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-md hover:shadow-lg transition-all text-sm sm:text-base outline-none cursor-pointer focus:ring-2 focus:ring-emerald-500"
          >
            <Send className="h-5 w-5" />
            Send via WhatsApp Now
          </button>
          
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-300 transition-all text-sm sm:text-base cursor-pointer focus:ring-2 focus:ring-gray-300"
          >
            <PhoneCall className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            Call Store Instead
          </a>
        </div>
      </form>
    </div>
  );
}
