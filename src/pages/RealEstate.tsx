import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, DollarSign, Globe, Award, Home, Building, Palmtree, MapPin } from 'lucide-react';

const RealEstate = () => {
  // Add page-specific SEO
  React.useEffect(() => {
    document.title = 'Dominican Republic Real Estate Investment Guide - Properties & Opportunities | Dominican Weather';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Dominican Republic real estate investment opportunities. Explore beachfront condos, luxury villas, and investment properties in Punta Cana, Cap Cana, Las Terrenas, and Puerto Plata with expert guidance.');
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dominicanweather.info/real-estate');
    document.head.appendChild(canonicalLink);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Dominican Weather Real Estate Services",
      "description": "Premier real estate investment services in Dominican Republic",
      "url": "https://dominicanweather.info/real-estate",
      "areaServed": {
        "@type": "Country",
        "name": "Dominican Republic"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('RealEstateAgent')) {
        existingScript.remove();
      }
    };
  }, []);

  const benefits = [
    {
      title: 'Growing Market',
      description: 'Tourism-driven real estate growth with consistent 8-12% annual appreciation',
      icon: TrendingUp,
      stats: '12% avg. annual growth'
    },
    {
      title: 'Affordable Prices',
      description: 'Competitive pricing compared to other Caribbean destinations',
      icon: DollarSign,
      stats: '$1,800-$3,500/sqm'
    },
    {
      title: 'Foreign Ownership',
      description: 'Full property ownership rights for non-residents with legal protection',
      icon: Globe,
      stats: '100% ownership allowed'
    },
    {
      title: 'Tax Incentives',
      description: 'Government incentives and favorable tax structure for investors',
      icon: Award,
      stats: 'Up to 15 years tax exemption'
    }
  ];

  const propertyTypes = [
    {
      type: 'Beachfront Condos',
      priceRange: '$200K - $800K',
      description: 'Luxury oceanfront properties with resort amenities',
      icon: Palmtree,
      features: ['Ocean views', 'Resort amenities', 'Rental potential', 'Beach access']
    },
    {
      type: 'Villa Developments',
      priceRange: '$400K - $2M',
      description: 'Private villas with pools and tropical gardens',
      icon: Home,
      features: ['Private pools', 'Gated communities', 'Golf course access', 'Concierge services']
    },
    {
      type: 'Investment Properties',
      priceRange: '$150K - $500K',
      description: 'High-yield rental properties in tourist areas',
      icon: Building,
      features: ['High ROI', 'Property management', 'Tourist zones', 'Furnished options']
    }
  ];

  const locations = [
    {
      name: 'Punta Cana',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop',
      description: 'Premier beach resort destination with luxury developments',
      averagePrice: '$2,800/sqm',
      growth: '+15% annually',
      highlights: ['International airport', 'Tourism hub', 'Golf courses', 'Marina access'],
      alt: 'Punta Cana luxury beachfront real estate development with modern condos and resort amenities'
    },
    {
      name: 'Cap Cana',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      description: 'Ultra-luxury resort community with world-class amenities',
      averagePrice: '$4,200/sqm',
      growth: '+18% annually',
      highlights: ['Luxury marina', 'Championship golf', 'Private beaches', 'Exclusive community'],
      alt: 'Cap Cana ultra-luxury marina and golf resort community with premium real estate properties'
    },
    {
      name: 'Las Terrenas',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
      description: 'European-influenced coastal town with natural beauty',
      averagePrice: '$2,100/sqm',
      growth: '+12% annually',
      highlights: ['European community', 'Natural beaches', 'Eco-tourism', 'Boutique hotels'],
      alt: 'Las Terrenas European-style coastal real estate with natural beaches and mountain views'
    },
    {
      name: 'Puerto Plata',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      description: 'Historic port city with modern developments',
      averagePrice: '$1,600/sqm',
      growth: '+10% annually',
      highlights: ['Historic charm', 'Cable car access', 'Cultural sites', 'Growing expat community'],
      alt: 'Puerto Plata historic city real estate with mountain cable car and colonial architecture'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
        role="img"
        aria-label="Dominican Republic luxury real estate background with tropical architecture"
      />
      
      <div className="relative z-10">
        <Header temperatureUnit="C" onTemperatureUnitChange={() => {}} />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 text-center text-white">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-6">Dominican Republic Real Estate Investment Opportunities</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Discover exceptional Caribbean real estate investment opportunities in the Dominican Republic's booming property market. From luxury beachfront condos to profitable rental properties, your Caribbean investment dream awaits with expert guidance and legal support.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Invest in Dominican Republic Real Estate</h2>
                <p className="text-gray-600 text-lg">Exceptional investment opportunities in the Caribbean's fastest-growing property market</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <article 
                      key={benefit.title}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{benefit.description}</p>
                      <div className="text-blue-600 font-bold text-sm">{benefit.stats}</div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Property Types */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Dominican Republic Property Types</h2>
                <p className="text-gray-600 text-lg">Find the perfect real estate investment opportunity for your portfolio</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {propertyTypes.map((property, index) => {
                  const IconComponent = property.icon;
                  return (
                    <article key={property.type} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center relative">
                        <IconComponent className="w-16 h-16 text-white" aria-hidden="true" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.type}</h3>
                        <div className="text-2xl font-bold text-blue-600 mb-3">{property.priceRange}</div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{property.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                          {property.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Prime Locations */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Prime Real Estate Investment Locations</h2>
                <p className="text-gray-600 text-lg">Discover the most sought-after areas for Caribbean property investment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {locations.map((location, index) => (
                  <article key={location.name} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={location.image} 
                        alt={location.alt}
                        className="w-full h-64 object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                        {location.growth}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                        <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                        {location.name}
                      </h3>
                      <div className="text-xl font-bold text-blue-600 mb-3">{location.averagePrice}</div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{location.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">Investment Highlights:</h4>
                        {location.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default RealEstate;
