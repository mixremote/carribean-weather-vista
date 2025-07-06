
import React from 'react';

const ImmigrationSection: React.FC = () => {
  const residencyOptions = [
    {
      title: 'Tourist Visa',
      duration: '60 days, renewable for tourism and short visits',
      icon: '✈️',
      benefits: [
        'No visa required for most countries',
        'Tourist card on arrival',
        'Renewable for additional periods'
      ],
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Business Visa',
      duration: '1 year multiple entry for business activities',
      icon: '💼',
      benefits: [
        'Required for commercial activities',
        'Multiple entries allowed',
        'Can lead to work permits'
      ],
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      title: 'Temporary Residency',
      duration: 'Renewable residency with income requirements',
      icon: '🏠',
      benefits: [
        'Proof of income required',
        'Renewable periods',
        'Path to permanent residency'
      ],
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Pensionado/Rentista',
      duration: 'For retirees with $2,000+ monthly passive income',
      icon: '⭐',
      benefits: [
        '$2,000+ monthly income required',
        'Special benefits and incentives',
        'Fast-track to permanent residency'
      ],
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const businessServices = [
    {
      title: 'Investment Incentives',
      description: 'Law 171-07 provides special benefits for $200,000+ investments',
      icon: '📊'
    },
    {
      title: 'Business Formation',
      description: 'Easy company registration with foreign ownership allowed',
      icon: '🏢'
    },
    {
      title: 'Tax Benefits',
      description: 'Territorial tax system with various incentives for investors',
      icon: '🧾'
    },
    {
      title: 'Professional Support',
      description: 'Legal and accounting services available for foreign investors',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-tropical-gradient bg-clip-text text-transparent mb-4">
            Your Path to Paradise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Immigration and business opportunities in the Dominican Republic
          </p>
        </div>

        {/* Residency Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Residency Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residencyOptions.map((option, index) => (
              <div 
                key={option.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-24 bg-gradient-to-r ${option.gradient} flex items-center justify-center`}>
                  <div className="text-4xl text-white">{option.icon}</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{option.duration}</p>
                  <div className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-tropical-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business & Investment */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Business & Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-tropical-turquoise">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSection;
