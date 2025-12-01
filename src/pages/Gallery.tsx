import React from 'react'; 

const Gallery: React.FC = () => { 
  return ( 
    <section className="py-20 max-w-7xl mx-auto"> 
      <h2 className="text-5xl font-semibold mb-10 text-center">Gallery</h2> 
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6"> 
        {[...Array(12)].map((_, index) => ( 
          <div key={index} className="overflow-hidden rounded-2xl shadow-xl"> 
            <img src={`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop`} alt={`Gallery Item ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/> 
          </div> 
        ))} 
      </div> 
    </section> 
  ); 
}; 

export default Gallery;