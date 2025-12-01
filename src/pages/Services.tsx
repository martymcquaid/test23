import React from 'react'; 

const Services: React.FC = () => { 
  return ( 
    <section className="py-20 max-w-7xl mx-auto"> 
      <h2 className="text-5xl font-semibold mb-10 text-center">Our Services</h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
        <div className="bg-white rounded-2xl shadow-xl p-6"> 
          <h3 className="text-2xl font-semibold mb-4">Custom Design</h3> 
          <p>We offer personalized design services to match your unique style and preferences.</p> 
        </div> 
        <div className="bg-white rounded-2xl shadow-xl p-6"> 
          <h3 className="text-2xl font-semibold mb-4">Consultation</h3> 
          <p>Our experts provide consultations to help you make informed decisions.</p> 
        </div> 
        <div className="bg-white rounded-2xl shadow-xl p-6"> 
          <h3 className="text-2xl font-semibold mb-4">Installation</h3> 
          <p>We handle installations with precision and care for a seamless experience.</p> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Services;