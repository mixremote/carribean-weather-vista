
import React from 'react';

const RealEstateSection: React.FC = () => {
  const benefits = [
    {
      title: 'Growing Market',
      description: 'Tourism-driven real estate growth with high rental income potential',
      icon: '📈',
      color: 'text-green-600'
    },
    {
      title: 'Affordable Prices',
      description: '$1,800-$3,500/sqm in prime locations, significantly below US markets',
      icon: '💰',
      color: 'text-blue-600'
    },
    {
      title: 'Foreign Ownership',
      description: 'Non-residents can own property with full legal protection',
      icon: '🌍',
      color: 'text-purple-600'
    },
    {
      title: 'Tax Benefits',
      description: 'Government incentives and favorable tax structure for investors',
      icon: '🏆',
      color: 'text-orange-600'
    }
  ];

  const locations = [
    {
      name: 'Punta Cana',
      type: 'Beach Resort Properties',
      priceRange: '$200K - $2M',
      highlights: ['Tourism Hub', 'High ROI', 'Luxury Resorts']
    },
    {
      name: 'Cap Cana',
      type: 'Luxury Developments',
      priceRange: '$500K - $5M',
      highlights: ['Golf Courses', 'Marina Access', 'Premium Location']
    },
    {
      name: 'Las Terrenas',
      type: 'Eco-Tourism Properties',
      priceRange: '$150K - $800K',
      highlights: ['Natural Beauty', 'Growing Market', 'European Community']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-tropical-gradient bg-clip-text text-transparent mb-4">
            Investment Paradise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover real estate opportunities in the Caribbean's fastest-growing market
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl mb-4 ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Prime locations */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Prime Investment Locations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={location.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-tropical-gradient opacity-90 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2 text-shadow">{location.name}</h3>
                  <p className="text-white/90 text-shadow">{location.type}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-gray-800 mb-4">
                  {location.priceRange}
                </div>
                <div className="space-y-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-tropical-turquoise rounded-full mr-3"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
