import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

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

  const team = [
    {
      name: 'Peter Privitera',
      role: 'Founder & CTO',
      experience: '15+ years in Technology & Business development',
      specialization: 'Chief Technology Officer',
      image: '/lovable-uploads/0d1cd08e-2046-4ecb-a7da-b51c5b6ecf0f.png',
      alt: 'Peter Privitera - Founder and CTO of Dominican Weather, expert in Technology & Business development with 15+ years experience'
    },
    {
      name: 'Carlos Fernandez',
      role: 'Real Estate Director',
      experience: '12+ years in Caribbean real estate',
      specialization: 'Luxury Properties & Investment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      alt: 'Carlos Fernandez - Real Estate Director specializing in Dominican Republic luxury properties and Caribbean investment opportunities'
    },
    {
      name: 'Ana Gutierrez',
      role: 'Immigration Specialist',
      experience: '10+ years in immigration law',
      specialization: 'Residency & Legal Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      alt: 'Ana Gutierrez - Immigration Specialist with 10+ years experience in Dominican Republic immigration law and residency services'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: Users, description: 'Satisfied clients who achieved their Dominican Republic dreams' },
    { number: '15+', label: 'Years Experience', icon: Award, description: 'Years of expertise in Dominican Republic services' },
    { number: '50+', label: 'Countries Served', icon: Globe, description: 'International clients from around the world' },
    { number: '98%', label: 'Success Rate', icon: Heart, description: 'Success rate in immigration and real estate transactions' }
  ];

  const services = [
    {
      title: 'Tourism Consultation',
      description: 'Personalized Dominican Republic travel planning and destination guidance for the perfect Caribbean experience.',
      features: ['Custom DR itineraries', 'Local insider tips', 'Activity booking', '24/7 support']
    },
    {
      title: 'Real Estate Services',
      description: 'Complete Dominican Republic real estate solutions from property search to ownership transfer and management.',
      features: ['Property search', 'Legal assistance', 'Investment analysis', 'Property management']
    },
    {
      title: 'Immigration Support',
      description: 'Full Dominican Republic immigration services to help you relocate and establish residency in the Caribbean.',
      features: ['Visa applications', 'Document preparation', 'Legal representation', 'Relocation assistance']
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
      />
      
      <div className="relative z-10">
        <Header temperatureUnit="C" onTemperatureUnitChange={() => {}} />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 text-center text-white">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-6">About Dominican Weather</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Your trusted partner for Dominican Republic tourism, real estate investment, and immigration services. 
                We've been helping people discover and make the Caribbean paradise their home for over 15 years.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Dominican Republic Expertise in Numbers</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Dominican Republic Story</h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Founded in 2008, Dominican Weather began as a comprehensive weather information service for tourists 
                    visiting the Dominican Republic. Over the years, we've evolved into the Caribbean's premier platform 
                    providing essential services for anyone looking to visit, invest in, or relocate to this tropical paradise.
                  </p>
                  <p>
                    Our passion for the Dominican Republic and commitment to helping others discover its beauty has 
                    driven us to expand our services beyond weather forecasting. Today, we're proud to offer expert tourism 
                    planning, strategic real estate investment guidance, and complete immigration support services throughout the Caribbean.
                  </p>
                  <p>
                    With a team of local Dominican experts and international professionals, we bridge the gap between dream 
                    and reality, making it easier than ever to experience everything the Dominican Republic has to offer.
                    From pristine beaches to mountain adventures, luxury resorts to affordable living, we know the DR inside and out.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Dominican Republic Expert Team</h2>
                <p className="text-gray-600 text-lg">Experienced professionals dedicated to your successful Dominican Republic journey</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {team.map((member, index) => (
                  <article key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.alt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        style={{ objectPosition: '50% 20%' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                      <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
                      <div className="text-sm text-gray-700 font-medium">{member.specialization}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Dominican Republic Services</h2>
                <p className="text-gray-600 text-lg">Comprehensive solutions for all your Dominican Republic dreams and needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <article key={service.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Key Features:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Dominican Weather</h2>
                <p className="text-gray-600 text-lg">Ready to start your Dominican Republic journey? Contact our experts today.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-800 mb-2">Dominican Republic Office</h3>
                  <address className="text-gray-600 text-sm not-italic">
                    Av. Winston Churchill<br />
                    Santo Domingo, Dominican Republic
                  </address>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-800 mb-2">Phone & WhatsApp</h3>
                  <div className="text-gray-600 text-sm">
                    <a href="tel:+18095550123" className="hover:text-blue-600">+1 (809) 555-0123</a><br />
                    Available 24/7 for emergencies
                  </div>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                  <div className="text-gray-600 text-sm">
                    <a href="mailto:info@dominicanweather.com" className="hover:text-blue-600">info@dominicanweather.com</a><br />
                    Response within 24 hours
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-2xl text-white max-w-2xl mx-auto">
                  <Clock className="w-8 h-8 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-lg font-bold mb-2">Business Hours (EST)</h3>
                  <div className="space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm mt-2 opacity-90">Emergency Dominican Republic support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;
