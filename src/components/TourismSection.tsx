
import React from 'react';

const TourismSection: React.FC = () => {
  const activities = [
    {
      title: 'Beach & Water Sports',
      description: 'Swimming, snorkeling, diving, windsurfing, and kitesurfing',
      icon: '🏖️',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Adventure Tours',
      description: 'ATV tours, ziplines, river rafting, and mountain hiking',
      icon: '🏔️',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      title: 'Cultural Experiences',
      description: 'Colonial city tours, museums, and local festivals',
      icon: '🏛️',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Island Excursions',
      description: 'Saona Island trips, whale watching, and boat tours',
      icon: '🚤',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const destinations = [
    {
      name: 'Punta Cana',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      description: 'World-famous beaches and luxury resorts'
    },
    {
      name: 'Santo Domingo',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
      description: 'Historic colonial architecture and vibrant culture'
    },
    {
      name: 'Samaná Peninsula',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Pristine nature and whale watching paradise'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-tropical-gradient bg-clip-text text-transparent mb-4">
            Discover Paradise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the most beautiful destinations in the Dominican Republic
          </p>
        </div>

        {/* Featured destinations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {destinations.map((dest, index) => (
            <div key={dest.name} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-tropical-gradient opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 text-shadow">{dest.name}</h3>
                  <p className="text-white/90 text-sm text-shadow">{dest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular activities */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Popular Activities</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={activity.title} 
              className="group p-6 rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${activity.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {activity.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
