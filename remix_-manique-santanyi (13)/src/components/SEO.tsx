import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './LanguageContext';

interface SEOProps {
  pageKey: string;
}

export default function SEO({ pageKey }: SEOProps) {
  const { t } = useLanguage();
  const title = t(`seo.${pageKey}.title`);
  const description = t(`seo.${pageKey}.desc`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Manique",
    "image": "https://manique.restaurant/logo.png",
    "@id": "https://manique.restaurant/",
    "url": "https://manique.restaurant/",
    "telephone": "+34675019515",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer Portell, 14",
      "addressLocality": "Santanyí",
      "addressRegion": "Illes Balears",
      "postalCode": "07650",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.3546,
      "longitude": 3.1293
    },
    "hasMap": "https://maps.google.com/?cid=14188932262524028191",
    "servesCuisine": ["Restaurant", "Brazilian restaurant", "Fusion restaurant", "Seafood restaurant", "Spanish restaurant", "Mediterranean restaurant"],
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:30",
        "closes": "23:00"
      }
    ],
    "sameAs": [
      "https://www.tripadvisor.es/Restaurant_Review-g663368-d24132333-Reviews-Manique-Santanyi_Majorca_Balearic_Islands.html",
      "https://www.instagram.com/manique.santanyi/",
      "https://www.facebook.com/manique.santanyi/",
      "https://www.youtube.com/@ManiqueSantany%C3%AD",
      "https://www.tiktok.com/@maniquesantanyi"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
