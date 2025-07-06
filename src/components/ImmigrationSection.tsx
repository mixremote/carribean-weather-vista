
import React from 'react';
import { Plane, Briefcase, Home, Star, TrendingUp, Building, FileText, Handshake } from 'lucide-react';

const ImmigrationSection: React.FC = () => {
  const residencyOptions = [
    {
      title: 'Tourist Visa',
      duration: '60 days, renewable for tourism and short visits',
      icon: Plane,
      benefits: [
        'No visa required for most countries',
        'Tourist card on arrival',
        'Renewable for additional periods'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business Visa',
      duration: '1 year multiple entry for business activities',
      icon: Briefcase,
      benefits: [
        'Required for commercial activities',
        'Multiple entries allowed',
        'Can lead to work permits'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Temporary Residency',
      duration: 'Renewable residency with income requirements',
      icon: Home,
      benefits: [
        'Proof of income required',
        'Renewable periods',
        'Path to permanent residency'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Pensionado/Rentista',
      duration: 'For retirees with $2,000+ monthly passive income',
      icon: Star,
      benefits: [
        '$2,000+ monthly income required',
        'Special benefits and incentives',
        'Fast-track to permanent residency'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const businessServices = [
    {
      title: 'Investment Incentives',
      description: 'Law 171-07 provides special benefits for $200,000+ investments',
      icon: TrendingUp
    },
    {
      title: 'Business Formation',
      description: 'Easy company registration with foreign ownership allowed',
      icon: Building
    },
    {
      title: 'Tax Benefits',
      description: 'Territorial tax system with various incentives for investors',
      icon: FileText
    },
    {
      title: 'Professional Support',
      description: 'Legal and accounting services available for foreign investors',
      icon: Handshake
    }
  ];

  return (
    <section className="py-16 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Path to Paradise
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Immigration and business opportunities in the Dominican Republic
          </p>
        </div>

        {/* Residency Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Residency Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residencyOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div 
                  key={option.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-24 bg-gradient-to-r ${option.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 font-medium">{option.duration}</p>
                    <div className="space-y-3">
                      {option.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business & Investment */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Business & Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSection;
