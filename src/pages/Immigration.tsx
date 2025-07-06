
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plane, Briefcase, Home, Star, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Immigration = () => {
  const visaTypes = [
    {
      title: 'Tourist Visa',
      duration: '60 days (renewable)',
      icon: Plane,
      description: 'Perfect for vacation, exploration, and short-term stays',
      requirements: [
        'Valid passport (6+ months)',
        'Tourist card ($10 USD)',
        'Return ticket',
        'No criminal record'
      ],
      processing: '1-3 days',
      cost: '$10 USD',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business Visa',
      duration: '1 year (multiple entry)',
      icon: Briefcase,
      description: 'For business meetings, conferences, and commercial activities',
      requirements: [
        'Business invitation letter',
        'Company registration',
        'Financial statements',
        'Valid passport'
      ],
      processing: '5-10 days',
      cost: '$150 USD',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Temporary Residency',
      duration: '1-3 years (renewable)',
      icon: Home,
      description: 'Long-term residency with work authorization',
      requirements: [
        'Proof of income ($2,000/month min)',
        'Background check',
        'Health certificate',
        'Application fees'
      ],
      processing: '30-60 days',
      cost: '$1,500-$3,000 USD',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Pensionado Status',
      duration: 'Permanent (renewable)',
      icon: Star,
      description: 'Special status for retirees with monthly pension income',
      requirements: [
        'Pension proof ($1,500/month min)',
        'Age 45+ years',
        'Clean criminal record',
        'Health insurance'
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
    'Live and work in the Dominican Republic',
    'Access to public healthcare system',
    'Open bank accounts and establish credit',
    'Import household goods duty-free',
    'Favorable tax treatment on foreign income',
    'Path to permanent residency and citizenship',
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
              <h1 className="text-5xl font-bold mb-6">Dominican Republic Immigration</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Start your new life in paradise. We'll guide you through every step of the immigration process to make the Dominican Republic your new home.
              </p>
            </div>
          </section>

          {/* Visa Types Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Visa & Residency Options</h2>
                <p className="text-gray-600 text-lg">Choose the right path for your Dominican Republic journey</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visaTypes.map((visa, index) => {
                  const IconComponent = visa.icon;
                  return (
                    <div 
                      key={visa.title}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className={`h-24 bg-gradient-to-r ${visa.gradient} flex items-center justify-center relative`}>
                        <IconComponent className="w-8 h-8 text-white" />
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
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Processing</div>
                            <div className="font-semibold text-gray-800">{visa.processing}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Cost</div>
                            <div className="font-semibold text-gray-800">{visa.cost}</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-800 mb-2">Requirements:</div>
                          {visa.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Process</h2>
                <p className="text-gray-600 text-lg">Simple steps to your new life in paradise</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.step} className="text-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                      <div className="text-blue-600 font-medium text-sm">{step.timeframe}</div>
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
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Residency Benefits</h2>
                <p className="text-gray-600 text-lg">Enjoy the advantages of Dominican Republic residency</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl text-white max-w-2xl mx-auto">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Need Professional Help?</h3>
                  <p className="leading-relaxed">
                    Our experienced immigration lawyers and consultants can guide you through the entire process, 
                    ensuring your application is complete and submitted correctly.
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
