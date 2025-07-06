
import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import WeatherForecastModal from './WeatherForecastModal';

interface WeatherSectionProps {
  temperatureUnit: 'C' | 'F';
}

const WeatherSection: React.FC<WeatherSectionProps> = ({ temperatureUnit }) => {
  const [selectedCity, setSelectedCity] = useState<{city: string, region: string} | null>(null);

  const weatherData = [
    {
      city: 'Santo Domingo',
      region: 'Distrito Nacional',
      temperature: 28,
      condition: 'partly cloudy',
      humidity: 75,
      windSpeed: 12,
      windDirection: 'E',
      icon: '⛅',
      feelsLike: 32
    },
    {
      city: 'Santiago',
      region: 'Santiago',
      temperature: 26,
      condition: 'sunny',
      humidity: 68,
      windSpeed: 8,
      windDirection: 'NE',
      icon: '☀️',
      feelsLike: 29
    },
    {
      city: 'Punta Cana',
      region: 'La Altagracia',
      temperature: 30,
      condition: 'sunny',
      humidity: 78,
      windSpeed: 15,
      windDirection: 'E',
      icon: '☀️',
      feelsLike: 34
    },
    {
      city: 'Puerto Plata',
      region: 'Puerto Plata',
      temperature: 27,
      condition: 'partly cloudy',
      humidity: 72,
      windSpeed: 18,
      windDirection: 'NE',
      icon: '⛅',
      feelsLike: 31
    },
    {
      city: 'La Romana',
      region: 'La Romana',
      temperature: 29,
      condition: 'sunny',
      humidity: 74,
      windSpeed: 10,
      windDirection: 'SE',
      icon: '☀️',
      feelsLike: 33
    },
    {
      city: 'Samaná',
      region: 'Samaná',
      temperature: 25,
      condition: 'cloudy',
      humidity: 82,
      windSpeed: 14,
      windDirection: 'N',
      icon: '☁️',
      feelsLike: 28
    }
  ];

  const handleCardClick = (city: string, region: string) => {
    setSelectedCity({ city, region });
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-opacity%3D%220.03%22%3E%3Cpolygon%20fill%3D%22%23000%22%20points%3D%2250%200%2060%2040%20100%2050%2060%2060%2050%20100%2040%2060%200%2050%2040%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Weather Across Paradise
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real-time weather information for major Dominican Republic cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData.map((data, index) => (
              <div key={data.city} style={{ animationDelay: `${index * 0.1}s` }}>
                <WeatherCard 
                  data={data} 
                  temperatureUnit={temperatureUnit}
                  onClick={() => handleCardClick(data.city, data.region)}
                />
              </div>
            ))}
          </div>

          {/* Search section */}
          <div className="mt-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="flex bg-white rounded-full shadow-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search cities..."
                  className="flex-1 px-6 py-4 outline-none text-gray-700"
                />
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 hover:opacity-90 transition-opacity">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Forecast Modal */}
      {selectedCity && (
        <WeatherForecastModal
          isOpen={!!selectedCity}
          onClose={closeModal}
          city={selectedCity.city}
          region={selectedCity.region}
          temperatureUnit={temperatureUnit}
        />
      )}
    </>
  );
};

export default WeatherSection;
