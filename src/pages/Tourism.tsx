
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Camera, Mountain, Waves, Calendar, Users } from 'lucide-react';

const Tourism = () => {
  const destinations = [
    {
      name: 'Punta Cana',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
      description: 'World-famous beaches with crystal clear waters and luxury all-inclusive resorts.',
      highlights: ['32km of pristine beaches', 'Championship golf courses', 'Water sports paradise', 'Luxury resorts'],
      bestTime: 'December - April'
    },
    {
      name: 'Santo Domingo',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop',
      description: 'The oldest European city in the Americas, rich with colonial history and culture.',
      highlights: ['Colonial Zone UNESCO site', 'Historic architecture', 'Vibrant nightlife', 'Cultural museums'],
      bestTime: 'Year-round'
    },
    {
      name: 'Samaná Peninsula',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      description: 'Pristine nature, whale watching, and untouched beaches in a tropical paradise.',
      highlights: ['Humpback whale watching', 'El Limón Waterfall', 'Las Terrenas beach', 'Cayo Levantado'],
      bestTime: 'January - March (whales)'
    },
    {
      name: 'Puerto Plata',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
      description: 'Historic port city with cable car rides and beautiful beaches on the north coast.',
      highlights: ['Mount Isabel de Torres', 'Historic Fort San Felipe', 'Playa Dorada', 'Cable car views'],
      bestTime: 'November - April'
    }
  ];

  const activities = [
    {
      title: 'Beach & Water Sports',
      description: 'Swimming, snorkeling, diving, windsurfing, kitesurfing, and deep-sea fishing',
      icon: Waves,
      locations: ['Punta Cana', 'Puerto Plata', 'Las Terrenas']
    },
    {
      title: 'Adventure Tours',
      description: 'ATV tours, ziplines, river rafting, canyoning, and mountain hiking',
      icon: Mountain,
      locations: ['Samaná', 'Puerto Plata', 'Santiago']
    },
    {
      title: 'Cultural Experiences',
      description: 'Colonial city tours, museums, art galleries, and local festivals',
      icon: Camera,
      locations: ['Santo Domingo', 'Santiago', 'Puerto Plata']
    },
    {
      title: 'Group Tours',
      description: 'Organized excursions, island hopping, and guided cultural experiences',
      icon: Users,
      locations: ['All major cities']
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
              <h1 className="text-5xl font-bold mb-6">Discover Dominican Republic</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                From pristine beaches to historic colonial cities, experience the perfect blend of relaxation and adventure in the Caribbean's most diverse destination.
              </p>
            </div>
          </section>

          {/* Destinations Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Destinations</h2>
                <p className="text-gray-600 text-lg">Explore the most beautiful places in the Dominican Republic</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {destinations.map((dest, index) => (
                  <div key={dest.name} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={dest.image} 
                        alt={dest.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {dest.bestTime}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                        <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                        {dest.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{dest.description}</p>
                      <div className="space-y-2">
                        {dest.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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

          {/* Activities Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Activities</h2>
                <p className="text-gray-600 text-lg">Adventure awaits in every corner of paradise</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div 
                      key={activity.title}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{activity.description}</p>
                      <div className="text-xs text-blue-600 font-medium">
                        Available in: {activity.locations.join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Tourism;
