
import React, { useState } from 'react';
import Header from '../components/Header';
import WeatherSection from '../components/WeatherSection';
import TourismSection from '../components/TourismSection';
import RealEstateSection from '../components/RealEstateSection';
import ImmigrationSection from '../components/ImmigrationSection';
import Footer from '../components/Footer';

const Index = () => {
  const [temperatureUnit, setTemperatureUnit] = useState<'C' | 'F'>('C');

  const handleTemperatureUnitChange = (unit: 'C' | 'F') => {
    setTemperatureUnit(unit);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Professional tropical Dominican Republic background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      <div className="relative z-10">
        <Header 
          temperatureUnit={temperatureUnit}
          onTemperatureUnitChange={handleTemperatureUnitChange}
        />
        
        <main>
          <WeatherSection temperatureUnit={temperatureUnit} />
          <TourismSection />
          <RealEstateSection />
          <ImmigrationSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
