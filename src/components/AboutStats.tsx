
import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const AboutStats = () => {
  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: Users, description: 'Satisfied clients who achieved their Dominican Republic dreams' },
    { number: '15+', label: 'Years Experience', icon: Award, description: 'Years of expertise in Dominican Republic services' },
    { number: '50+', label: 'Countries Served', icon: Globe, description: 'International clients from around the world' },
    { number: '98%', label: 'Success Rate', icon: Heart, description: 'Success rate in immigration and real estate transactions' }
  ];

  return (
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
  );
};

export default AboutStats;
