
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
    <div className="min-h-screen bg-white">
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
  );
};

export default Index;
