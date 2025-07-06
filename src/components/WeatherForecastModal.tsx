
import React from 'react';
import { X, Calendar, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud } from 'lucide-react';

interface ForecastDay {
  date: string;
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  uvIndex: number;
}

interface WeatherForecastModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
  region: string;
  temperatureUnit: 'C' | 'F';
}

const WeatherForecastModal: React.FC<WeatherForecastModalProps> = ({
  isOpen,
  onClose,
  city,
  region,
  temperatureUnit
}) => {
  if (!isOpen) return null;

  const convertTemperature = (temp: number) => {
    if (temperatureUnit === 'F') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  // Sample 7-day forecast data
  const forecast: ForecastDay[] = [
    {
      date: '2024-01-07',
      day: 'Today',
      high: 30,
      low: 24,
      condition: 'Partly Cloudy',
      icon: '⛅',
      humidity: 75,
      windSpeed: 12,
      windDirection: 'E',
      precipitation: 10,
      uvIndex: 8
    },
    {
      date: '2024-01-08',
      day: 'Tomorrow',
      high: 32,
      low: 26,
      condition: 'Sunny',
      icon: '☀️',
      humidity: 68,
      windSpeed: 8,
      windDirection: 'NE',
      precipitation: 0,
      uvIndex: 9
    },
    {
      date: '2024-01-09',
      day: 'Tuesday',
      high: 29,
      low: 23,
      condition: 'Thunderstorms',
      icon: '⛈️',
      humidity: 85,
      windSpeed: 18,
      windDirection: 'SE',
      precipitation: 75,
      uvIndex: 5
    },
    {
      date: '2024-01-10',
      day: 'Wednesday',
      high: 31,
      low: 25,
      condition: 'Partly Cloudy',
      icon: '⛅',
      humidity: 72,
      windSpeed: 14,
      windDirection: 'E',
      precipitation: 20,
      uvIndex: 7
    },
    {
      date: '2024-01-11',
      day: 'Thursday',
      high: 33,
      low: 27,
      condition: 'Sunny',
      icon: '☀️',
      humidity: 65,
      windSpeed: 10,
      windDirection: 'NE',
      precipitation: 5,
      uvIndex: 9
    },
    {
      date: '2024-01-12',
      day: 'Friday',
      high: 28,
      low: 22,
      condition: 'Cloudy',
      icon: '☁️',
      humidity: 80,
      windSpeed: 16,
      windDirection: 'N',
      precipitation: 30,
      uvIndex: 4
    },
    {
      date: '2024-01-13',
      day: 'Saturday',
      high: 31,
      low: 25,
      condition: 'Sunny',
      icon: '☀️',
      humidity: 70,
      windSpeed: 12,
      windDirection: 'E',
      precipitation: 0,
      uvIndex: 8
    }
  ];

  // City information
  const cityInfo = {
    'Santo Domingo': {
      description: 'The vibrant capital city of the Dominican Republic, rich in history and culture.',
      population: '3.3 million',
      elevation: '14m above sea level',
      attractions: ['Colonial Zone', 'Alcázar de Colón', 'Cathedral of Santo Domingo', 'National Palace']
    },
    'Santiago': {
      description: 'The second largest city, known as the heart of the Dominican Republic.',
      population: '1.2 million',
      elevation: '178m above sea level',
      attractions: ['Monument to the Heroes', 'Centro León', 'Fort San Luis', 'Gran Teatro del Cibao']
    },
    'Punta Cana': {
      description: 'Paradise destination with pristine beaches and luxury resorts.',
      population: '100,000',
      elevation: '3m above sea level',
      attractions: ['Bavaro Beach', 'Hoyo Azul', 'Indigenous Eyes Ecological Reserve', 'Cap Cana Marina']
    },
    'Puerto Plata': {
      description: 'Historic port city with beautiful beaches and cable car rides.',
      population: '320,000',
      elevation: '5m above sea level',
      attractions: ['Mount Isabel de Torres', 'Fortaleza San Felipe', 'Malecón', 'Amber Cove']
    },
    'La Romana': {
      description: 'Coastal city famous for sugar production and luxury tourism.',
      population: '250,000',
      elevation: '7m above sea level',
      attractions: ['Altos de Chavón', 'Casa de Campo', 'Catalina Island', 'Teeth of the Dog Golf Course']
    },
    'Samaná': {
      description: 'Hidden gem peninsula with stunning natural beauty and whale watching.',
      population: '60,000',
      elevation: '12m above sea level',
      attractions: ['El Limón Waterfall', 'Los Haitises National Park', 'Whale Watching', 'Playa Rincón']
    }
  };

  const currentCityInfo = cityInfo[city as keyof typeof cityInfo];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center">
                <MapPin className="mr-2" />
                {city}
              </h2>
              <p className="text-blue-100 mb-2">{region}</p>
              {currentCityInfo && (
                <p className="text-blue-100 text-sm">{currentCityInfo.description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* City Info */}
        {currentCityInfo && (
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2 text-blue-500" />
              About {city}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-700">Population</p>
                <p className="text-lg">{currentCityInfo.population}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-700">Elevation</p>
                <p className="text-lg">{currentCityInfo.elevation}</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-700">Climate</p>
                <p className="text-lg">Tropical</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Popular Attractions:</h4>
              <div className="flex flex-wrap gap-2">
                {currentCityInfo.attractions.map((attraction, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 7-Day Forecast */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 text-blue-500" />
            7-Day Forecast
          </h3>
          <div className="space-y-4">
            {forecast.map((day, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{day.icon}</div>
                    <div>
                      <p className="font-semibold text-lg">{day.day}</p>
                      <p className="text-gray-600 text-sm">{day.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">
                        {convertTemperature(day.high)}°
                      </span>
                      <span className="text-lg text-gray-600">
                        / {convertTemperature(day.low)}°{temperatureUnit}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Detailed info */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span>{day.humidity}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wind className="w-4 h-4 text-gray-500" />
                    <span>{day.windSpeed} km/h {day.windDirection}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Cloud className="w-4 h-4 text-gray-600" />
                    <span>{day.precipitation}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Sun className="w-4 h-4 text-yellow-500" />
                    <span>UV {day.uvIndex}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-green-500" />
                    <span>Good</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastModal;
