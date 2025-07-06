
import React from 'react';
import WeatherCard from './WeatherCard';

interface WeatherSectionProps {
  temperatureUnit: 'C' | 'F';
}

const WeatherSection: React.FC<WeatherSectionProps> = ({ temperatureUnit }) => {
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

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Cg fill-opacity="0.03"%3E%3Cpolygon fill="%23000" points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-tropical-gradient bg-clip-text text-transparent mb-4">
            Weather Across Paradise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-time weather information for major Dominican Republic cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weatherData.map((data, index) => (
            <div key={data.city} style={{ animationDelay: `${index * 0.1}s` }}>
              <WeatherCard data={data} temperatureUnit={temperatureUnit} />
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
              <button className="bg-tropical-gradient text-white px-8 py-4 hover:opacity-90 transition-opacity">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
