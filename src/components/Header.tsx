
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  temperatureUnit: 'C' | 'F';
  onTemperatureUnitChange: (unit: 'C' | 'F') => void;
}

const Header: React.FC<HeaderProps> = ({ temperatureUnit, onTemperatureUnitChange }) => {
  const [activeTab, setActiveTab] = useState('weather');

  const navItems = [
    { id: 'weather', label: 'Weather' },
    { id: 'tourism', label: 'Tourism' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'immigration', label: 'Immigration' },
    { id: 'about', label: 'About' }
  ];

  return (
    <header className="relative">
      {/* Background with tropical gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-500 to-green-400 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-2xl">🌴</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white text-shadow">Dominican Weather</h1>
                <p className="text-white/80 text-sm">Your Guide to Paradise</p>
              </div>
            </div>

            {/* Temperature Toggle */}
            <div className="flex items-center space-x-2">
              <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1">
                <Button
                  variant={temperatureUnit === 'C' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onTemperatureUnitChange('C')}
                  className={`rounded-full px-4 ${
                    temperatureUnit === 'C' 
                      ? 'bg-white text-primary shadow-md' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  °C
                </Button>
                <Button
                  variant={temperatureUnit === 'F' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onTemperatureUnitChange('F')}
                  className={`rounded-full px-4 ${
                    temperatureUnit === 'F' 
                      ? 'bg-white text-primary shadow-md' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  °F
                </Button>
              </div>
              <div className="text-white font-semibold text-lg">
                25°{temperatureUnit}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-white text-primary shadow-md'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
