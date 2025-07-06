
import React from 'react';

const AboutServices = () => {
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
  );
};

export default AboutServices;
