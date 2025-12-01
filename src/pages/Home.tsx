import React from 'react'; 

const Home: React.FC = () => { 
  return ( 
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#A3D9E1] to-[#B9E5C0]"> 
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop')"}}> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div> 
      </div> 
      <div className="relative z-10 text-center text-white"> 
        <h1 className="text-8xl font-bold leading-tight mb-4">Pluimmers</h1> 
        <h2 className="text-4xl font-light mb-8">Quality, Craftsmanship, and Care.</h2> 
        <div className="space-x-4"> 
          <button className="bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0] px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">Explore Our Services</button> 
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">Reach Out Today</button> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default Home;