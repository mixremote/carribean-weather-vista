
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutContact = () => {
  return (
    <section className="py-16 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Dominican Weather</h2>
          <p className="text-gray-600 text-lg">Ready to start your Dominican Republic journey? Contact our experts today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-gray-800 mb-2">Dominican Republic Office</h3>
            <address className="text-gray-600 text-sm not-italic">
              Av. Winston Churchill<br />
              Santo Domingo, Dominican Republic
            </address>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-gray-800 mb-2">Phone & WhatsApp</h3>
            <div className="text-gray-600 text-sm">
              <a href="tel:+18095550123" className="hover:text-blue-600">+1 (809) 555-0123</a><br />
              Available 24/7 for emergencies
            </div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
            <div className="text-gray-600 text-sm">
              <a href="mailto:info@dominicanweather.com" className="hover:text-blue-600">info@dominicanweather.com</a><br />
              Response within 24 hours
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-2xl text-white max-w-2xl mx-auto">
            <Clock className="w-8 h-8 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-bold mb-2">Business Hours (EST)</h3>
            <div className="space-y-1">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-sm mt-2 opacity-90">Emergency Dominican Republic support available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
