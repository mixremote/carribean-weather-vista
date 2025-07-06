
import React from 'react';
import { Thermometer } from 'lucide-react';

interface WeatherData {
  city: string;
  region: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  icon: string;
  feelsLike: number;
}

interface WeatherCardProps {
  data: WeatherData;
  temperatureUnit: 'C' | 'F';
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, temperatureUnit }) => {
  const convertTemperature = (temp: number) => {
    if (temperatureUnit === 'F') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  return (
    <div className="weather-card group hover:scale-105 transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{data.city}</h3>
          <p className="text-gray-600 text-sm">{data.region}</p>
        </div>
        <div className="text-4xl animate-float">
          {data.icon}
        </div>
      </div>
      
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-4xl font-bold text-gray-800">
          {convertTemperature(data.temperature)}°
        </span>
        <span className="text-lg text-gray-600">{temperatureUnit}</span>
      </div>
      
      <p className="text-gray-700 mb-4 capitalize">{data.condition}</p>
      
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Thermometer className="w-4 h-4 text-tropical-coral mr-1" />
          </div>
          <p className="text-gray-600">Feels like</p>
          <p className="font-semibold text-gray-800">
            {convertTemperature(data.feelsLike)}°{temperatureUnit}
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-4 h-4 mx-auto mb-1 text-tropical-aqua">💧</div>
          <p className="text-gray-600">Humidity</p>
          <p className="font-semibold text-gray-800">{data.humidity}%</p>
        </div>
        
        <div className="text-center">
          <div className="w-4 h-4 mx-auto mb-1 text-tropical-mint">💨</div>
          <p className="text-gray-600">Wind</p>
          <p className="font-semibold text-gray-800">{data.windSpeed} km/h {data.windDirection}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
