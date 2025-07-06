
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutStats from '../components/AboutStats';
import AboutStory from '../components/AboutStory';
import AboutTeam from '../components/AboutTeam';
import AboutServices from '../components/AboutServices';
import AboutContact from '../components/AboutContact';

const About = () => {
  useEffect(() => {
    // Set page-specific meta tags
    document.title = 'About Dominican Weather - Expert Caribbean Travel & Immigration Services';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Dominican Weather - your trusted partner for Dominican Republic tourism, real estate investment, and immigration services. 15+ years of Caribbean expertise helping 5000+ clients.');
    }

    // Add structured data for the organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dominican Weather",
      "alternateName": "DR Weather Services",
      "url": "https://dominicanweather.info",
      "logo": "https://dominicanweather.info/logo.png",
      "description": "Leading provider of Dominican Republic tourism, real estate, and immigration services with over 15 years of Caribbean expertise",
      "foundingDate": "2008",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Winston Churchill",
        "addressLocality": "Santo Domingo",
        "addressCountry": "DO"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-809-555-0123",
          "contactType": "customer service",
          "availableLanguage": ["English", "Spanish"],
          "hoursAvailable": "Mo-Fr 08:00-18:00, Sa 09:00-14:00"
        },
        {
          "@type": "ContactPoint",
          "email": "info@dominicanweather.com",
          "contactType": "customer service"
        }
      ],
      "sameAs": [
        "https://facebook.com/dominicanweather",
        "https://twitter.com/dominicanweather",
        "https://instagram.com/dominicanweather"
      ],
      "member": [
        {
          "@type": "Person",
          "name": "Peter Privitera",
          "jobTitle": "Founder & CTO",
          "description": "15+ years experience in Technology & Business development"
        },
        {
          "@type": "Person", 
          "name": "Carlos Fernandez",
          "jobTitle": "Real Estate Director",
          "description": "12+ years experience in Caribbean luxury properties and investment"
        },
        {
          "@type": "Person",
          "name": "Ana Gutierrez", 
          "jobTitle": "Immigration Specialist",
          "description": "10+ years experience in Dominican Republic immigration law and residency services"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dominican Republic Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tourism Consultation",
              "description": "Personalized Dominican Republic travel planning and destination guidance"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Real Estate Services",
              "description": "Complete Dominican Republic real estate solutions from property search to ownership"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Immigration Support",
              "description": "Full Dominican Republic immigration services for visas and residency"
            }
          }
        ]
      }
    };

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://dominicanweather.info/about';

    // Add structured data script
    let script = document.querySelector('script[type="application/ld+json"][data-page="about"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'about');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[data-page="about"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      <div className="relative z-10">
        <Header temperatureUnit="C" onTemperatureUnitChange={() => {}} />
        
        <main>
          <AboutHero />
          <AboutStats />
          <AboutStory />
          <AboutTeam />
          <AboutServices />
          <AboutContact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;
