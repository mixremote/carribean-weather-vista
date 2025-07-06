
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & CEO',
      experience: '15+ years in Dominican tourism',
      specialization: 'Tourism Development & Strategy',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c0a?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Carlos Fernandez',
      role: 'Real Estate Director',
      experience: '12+ years in Caribbean real estate',
      specialization: 'Luxury Properties & Investment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ana Gutierrez',
      role: 'Immigration Specialist',
      experience: '10+ years in immigration law',
      specialization: 'Residency & Legal Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Success Rate', icon: Heart }
  ];

  const services = [
    {
      title: 'Tourism Consultation',
      description: 'Personalized travel planning and destination guidance for the perfect Dominican Republic experience.',
      features: ['Custom itineraries', 'Local insider tips', 'Activity booking', '24/7 support']
    },
    {
      title: 'Real Estate Services',
      description: 'Complete real estate solutions from property search to ownership transfer and management.',
      features: ['Property search', 'Legal assistance', 'Investment analysis', 'Property management']
    },
    {
      title: 'Immigration Support',
      description: 'Full immigration services to help you relocate and establish residency in the Dominican Republic.',
      features: ['Visa applications', 'Document preparation', 'Legal representation', 'Relocation assistance']
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
              <h1 className="text-5xl font-bold mb-6">About Dominican Weather</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Your trusted partner for tourism, real estate, and immigration services in the Dominican Republic. 
                We've been helping people discover and make paradise their home for over 15 years.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Founded in 2008, Dominican Weather began as a simple weather information service for tourists 
                    visiting the Dominican Republic. Over the years, we've evolved into a comprehensive platform 
                    providing essential services for anyone looking to visit, invest in, or relocate to this Caribbean paradise.
                  </p>
                  <p>
                    Our passion for the Dominican Republic and commitment to helping others discover its beauty has 
                    driven us to expand our services beyond weather forecasting. Today, we're proud to offer tourism 
                    planning, real estate investment guidance, and complete immigration support services.
                  </p>
                  <p>
                    With a team of local experts and international professionals, we bridge the gap between dream 
                    and reality, making it easier than ever to experience everything the Dominican Republic has to offer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                <p className="text-gray-600 text-lg">Experienced professionals dedicated to your Dominican Republic journey</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {team.map((member, index) => (
                  <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                      <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
                      <div className="text-sm text-gray-700 font-medium">{member.specialization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-gray-600 text-lg">Comprehensive solutions for all your Dominican Republic needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={service.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg">Ready to start your Dominican Republic journey? Contact us today.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Office Location</h3>
                  <p className="text-gray-600 text-sm">
                    Av. Winston Churchill<br />
                    Santo Domingo, Dominican Republic
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Phone & WhatsApp</h3>
                  <p className="text-gray-600 text-sm">
                    +1 (809) 555-0123<br />
                    Available 24/7
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm">
                    info@dominicanweather.com<br />
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-2xl text-white max-w-2xl mx-auto">
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM (EST)</p>
                  <p>Saturday: 9:00 AM - 2:00 PM (EST)</p>
                  <p className="text-sm mt-2 opacity-90">Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;
