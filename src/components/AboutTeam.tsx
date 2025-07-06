
import React from 'react';

const AboutTeam = () => {
  const team = [
    {
      name: 'Peter Privitera',
      role: 'Founder & CTO',
      experience: '15+ years in Technology & Business development',
      specialization: 'Chief Technology Officer',
      image: '/lovable-uploads/0d1cd08e-2046-4ecb-a7da-b51c5b6ecf0f.png',
      alt: 'Peter Privitera - Founder and CTO of Dominican Weather, expert in Technology & Business development with 15+ years experience'
    },
    {
      name: 'Carlos Fernandez',
      role: 'Real Estate Director',
      experience: '12+ years in Caribbean real estate',
      specialization: 'Luxury Properties & Investment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      alt: 'Carlos Fernandez - Real Estate Director specializing in Dominican Republic luxury properties and Caribbean investment opportunities'
    },
    {
      name: 'Ana Gutierrez',
      role: 'Immigration Specialist',
      experience: '10+ years in immigration law',
      specialization: 'Residency & Legal Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      alt: 'Ana Gutierrez - Immigration Specialist with 10+ years experience in Dominican Republic immigration law and residency services'
    }
  ];

  return (
    <section className="py-16 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Dominican Republic Expert Team</h2>
          <p className="text-gray-600 text-lg">Experienced professionals dedicated to your successful Dominican Republic journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <article key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square">
                <img 
                  src={member.image} 
                  alt={member.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
                <div className="text-sm text-gray-700 font-medium">{member.specialization}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
