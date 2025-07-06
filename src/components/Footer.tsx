
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Weather',
      links: [
        'Current Weather',
        '7-Day Forecast',
        'City Weather',
        'Weather Maps'
      ]
    },
    {
      title: 'Tourism',
      links: [
        'Destinations',
        'Activities',
        'Beaches',
        'Adventure Tours'
      ]
    },
    {
      title: 'Services',
      links: [
        'Real Estate',
        'Immigration',
        'About Us',
        'Contact'
      ]
    }
  ];

  const socialIcons = [
    { icon: '📘', label: 'Facebook' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📷', label: 'Instagram' },
    { icon: '📺', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-tropical-gradient rounded-full flex items-center justify-center">
                <span className="text-xl">🌴</span>
              </div>
              <h3 className="text-xl font-bold">Dominican Weather</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your comprehensive guide to Dominican Republic weather, tourism, real estate, and immigration opportunities.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <div 
                  key={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-tropical-turquoise transition-colors cursor-pointer"
                >
                  <span className="text-lg">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-tropical-turquoise">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Dominican Weather. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
