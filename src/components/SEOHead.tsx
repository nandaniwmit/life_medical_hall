/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOHeadProps {
  activeTab: ActiveTab;
}

export default function SEOHead({ activeTab }: SEOHeadProps) {
  useEffect(() => {
    // 1. Dynamic Page Title
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    const pageTitle = activeTab === 'home' 
      ? `${BUSINESS_INFO.name} - Best Pharmacy near Over Bridge Gaya`
      : `${capitalize(activeTab)} | ${BUSINESS_INFO.name} - Trusted Medical Store Gaya`;
    
    document.title = pageTitle;

    // 2. Meta Tags Update
    const metaDescription = `Life Medical Hall at Tekari Road More, Gaya, Bihar. Contact ${BUSINESS_INFO.phone}. We offer 100% genuine medicines, healthcare supplements, diabetic products, baby care items and surgical supplies at affordable rates. Order via WhatsApp today!`;
    const metaKeywords = 'Life Medical Hall, medical store Gaya, pharmacy near over bridge Gaya, chemist Tekari Road Gaya, medicine home delivery Gaya, genuine healthcare supplies Bihar, baby care products Gaya, surgical items Gaya, diabetic test strips Gaya';

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDescription);

    let keyTag = document.querySelector('meta[name="keywords"]');
    if (!keyTag) {
      keyTag = document.createElement('meta');
      keyTag.setAttribute('name', 'keywords');
      document.head.appendChild(keyTag);
    }
    keyTag.setAttribute('content', metaKeywords);

    // 3. Open Graph Metadata
    const updateOGMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGMeta('og:title', pageTitle);
    updateOGMeta('og:description', metaDescription);
    updateOGMeta('og:type', 'website');
    updateOGMeta('og:url', window.location.href);
    updateOGMeta('og:image', 'https://picsum.photos/seed/healthcare-banner/1200/630');
    updateOGMeta('og:site_name', BUSINESS_INFO.name);

    // 4. Twitter Cards
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', pageTitle);
    updateTwitterMeta('twitter:description', metaDescription);
    updateTwitterMeta('twitter:image', 'https://picsum.photos/seed/healthcare-banner/1200/630');

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // 6. JSON-LD Schema Injection
    // Local Business & Pharmacy Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${window.location.origin}/#pharmacy`,
      'name': BUSINESS_INFO.name,
      'alternateName': BUSINESS_INFO.alias,
      'image': 'https://picsum.photos/seed/life-medical/800/600',
      'url': window.location.origin,
      'telephone': BUSINESS_INFO.phone,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Tekari Road, More, near Over Bridge, Old Kareem Ganj',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823001',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.0298',
        'longitude': '84.9976'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:00',
        'closes': '22:00'
      },
      'sameAs': [
        'https://maps.google.com/?cid=16546944627192662054'
      ]
    };

    // FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': capitalize(activeTab),
          'item': `${window.location.origin}?tab=${activeTab}`
        }
      ]
    };

    const injectSchema = (id: string, schemaObj: object) => {
      let scriptTag = document.getElementById(id);
      if (scriptTag) {
        scriptTag.remove();
      }
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', id);
      scriptTag.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(scriptTag);
    };

    injectSchema('local-business-schema', localBusinessSchema);
    injectSchema('faq-schema', faqSchema);
    injectSchema('breadcrumb-schema', breadcrumbSchema);

    // Clean up on unmount or tab switch
    return () => {
      // Keep SEO but can clean specific ephemeral nodes if needed
    };
  }, [activeTab]);

  return null;
}
