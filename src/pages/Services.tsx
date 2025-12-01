import React from 'react'; 

const Services: React.FC = () => { 
  return ( 
    <section className="py-20 max-w-7xl mx-auto bg-gradient-to-b from-[#A3D9E1] to-[#B9E5C0] rounded-lg shadow-lg"> 
      <h2 className="text-6xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0]">Our Services</h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl"> 
          <img src="https://images.unsplash.com/photo-1573497049050-12f9d8c8b64c?w=400&h=300&fit=crop" alt="Custom Design" className="w-full h-32 object-cover rounded-t-2xl"/> 
          <h3 className="text-2xl font-semibold mb-4 mt-4">Custom Design</h3> 
          <p>We offer personalized design services to match your unique style and preferences.</p> 
        </div> 
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl"> 
          <img src="https://images.unsplash.com/photo-1511734408214-1f0c6a0f7f36?w=400&h=300&fit=crop" alt="Consultation" className="w-full h-32 object-cover rounded-t-2xl"/> 
          <h3 className="text-2xl font-semibold mb-4 mt-4">Consultation</h3> 
          <p>Our experts provide consultations to help you make informed decisions.</p> 
        </div> 
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl"> 
          <img src="https://images.unsplash.com/photo-1582719489831-edc6eecf1f29?w=400&h=300&fit=crop" alt="Installation" className="w-full h-32 object-cover rounded-t-2xl"/> 
          <h3 className="text-2xl font-semibold mb-4 mt-4">Installation</h3> 
          <p>We handle installations with precision and care for a seamless experience.</p> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Services;