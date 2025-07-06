import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plane, Briefcase, Home, Star, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Immigration = () => {
  useEffect(() => {
    // Set page-specific meta tags
    document.title = 'Dominican Republic Immigration Guide - Visa, Residency & Citizenship Services';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete Dominican Republic immigration guide. Get expert help with tourist visas, business visas, temporary residency, pensionado status, and citizenship applications. Professional immigration services for DR relocation.');
    }

    // Add structured data for immigration services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dominican Republic Immigration Services",
      "description": "Professional immigration consulting services for Dominican Republic visas, residency, and citizenship applications",
      "provider": {
        "@type": "Organization",
        "name": "Dominican Weather",
        "url": "https://dominicanweather.info"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Dominican Republic"
      },
      "serviceType": "Immigration Consulting",
      "offers": [
        {
          "@type": "Offer",
          "name": "Tourist Visa Assistance",
          "description": "Help with Dominican Republic tourist visa applications and renewals"
        },
        {
          "@type": "Offer", 
          "name": "Business Visa Services",
          "description": "Complete business visa application support for Dominican Republic"
        },
        {
          "@type": "Offer",
          "name": "Temporary Residency",
          "description": "Guidance for Dominican Republic temporary residency applications"
        },
        {
          "@type": "Offer",
          "name": "Pensionado Status",
          "description": "Special retirement residency program assistance for Dominican Republic"
        }
      ]
    };

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://dominicanweather.info/immigration';

    // Add structured data script
    let script = document.querySelector('script[type="application/ld+json"][data-page="immigration"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'immigration');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[data-page="immigration"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const visaTypes = [
    {
      title: 'Tourist Visa',
      duration: '60 days (renewable)',
      icon: Plane,
      description: 'Perfect for vacation, exploration, and short-term stays in the Dominican Republic',
      requirements: [
        'Valid passport (6+ months remaining)',
        'Tourist card on arrival ($10 USD)',
        'Return or onward ticket',
        'Clean criminal background check'
      ],
      processing: '1-3 days',
      cost: '$10 USD',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business Visa',
      duration: '1 year (multiple entry)',
      icon: Briefcase,
      description: 'Essential for business meetings, conferences, and commercial activities in DR',
      requirements: [
        'Official business invitation letter',
        'Company registration documents',
        'Financial statements and bank records',
        'Valid passport with 6+ months validity'
      ],
      processing: '5-10 business days',
      cost: '$150 USD',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Temporary Residency',
      duration: '1-3 years (renewable)',
      icon: Home,
      description: 'Long-term residency option with full work authorization and benefits',
      requirements: [
        'Proof of monthly income ($2,000+ minimum)',
        'Apostilled background check from home country',
        'Medical health certificate',
        'Application and processing fees'
      ],
      processing: '30-60 days',
      cost: '$1,500-$3,000 USD',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Pensionado Status',
      duration: 'Permanent (renewable)',
      icon: Star,
      description: 'Exclusive retirement program for foreigners with guaranteed pension income',
      requirements: [
        'Verified pension income ($1,500+ monthly)',
        'Minimum age requirement (45+ years)',
        'Clean criminal record certification',
        'International health insurance coverage'
      ],
      processing: '60-90 days',
      cost: '$2,000-$4,000 USD',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Gather all required documents and get them apostilled',
      icon: FileText,
      timeframe: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Application Submission',
      description: 'Submit your application with all supporting documents',
      icon: CheckCircle,
      timeframe: '1-2 days'
    },
    {
      step: 3,
      title: 'Review Process',
      description: 'Government review and background verification',
      icon: Clock,
      timeframe: '30-90 days'
    },
    {
      step: 4,
      title: 'Approval & Collection',
      description: 'Receive approval and collect your residency card',
      icon: Star,
      timeframe: '1-2 weeks'
    }
  ];

  const benefits = [
    'Live and work legally in the Dominican Republic',
    'Access to public healthcare system and services',
    'Open bank accounts and establish credit history',
    'Import household goods duty-free (first year)',
    'Favorable tax treatment on foreign-sourced income',
    'Clear path to permanent residency and citizenship',
    'Travel freely in and out of the country',
    'Bring family members under dependent status'
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
              <h1 className="text-5xl font-bold mb-6">Dominican Republic Immigration Services</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Expert guidance for your Dominican Republic immigration journey. From tourist visas to permanent residency, 
                we'll help you navigate every step of the process to make the Caribbean paradise your new home.
              </p>
            </div>
          </section>

          {/* Visa Types Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Dominican Republic Visa & Residency Options</h2>
                <p className="text-gray-600 text-lg">Choose the right immigration path for your Dominican Republic adventure</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visaTypes.map((visa, index) => {
                  const IconComponent = visa.icon;
                  return (
                    <article 
                      key={visa.title}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className={`h-24 bg-gradient-to-r ${visa.gradient} flex items-center justify-center relative`}>
                        <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-800">{visa.title}</h3>
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            {visa.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{visa.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Processing Time</div>
                            <div className="font-semibold text-gray-800">{visa.processing}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Application Cost</div>
                            <div className="font-semibold text-gray-800">{visa.cost}</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-800 mb-2">Key Requirements:</div>
                          {visa.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span>{req}</span>
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

          {/* Process Steps */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Dominican Republic Immigration Application Process</h2>
                <p className="text-gray-600 text-lg">Four simple steps to your new life in the Caribbean</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.step} className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                      <div className="text-blue-600 font-medium text-sm">Timeline: {step.timeframe}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Dominican Republic Residency Benefits</h2>
                <p className="text-gray-600 text-lg">Exclusive advantages of Dominican Republic residency and citizenship</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl text-white max-w-2xl mx-auto">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3">Need Professional Immigration Help?</h3>
                  <p className="leading-relaxed">
                    Our experienced Dominican Republic immigration lawyers and certified consultants provide personalized guidance 
                    throughout the entire application process, ensuring your documentation is complete and submitted correctly 
                    for maximum approval chances.
                  </p>
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

export default Immigration;
