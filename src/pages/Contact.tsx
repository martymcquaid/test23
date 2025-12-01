import React from 'react'; 

const Contact: React.FC = () => { 
  return ( 
    <section className="py-20 max-w-7xl mx-auto bg-gradient-to-b from-[#A3D9E1] to-[#B9E5C0] rounded-xl shadow-lg relative overflow-hidden"> 
      <h2 className="text-6xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0]">Get in Touch</h2> 
      <form className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"> 
        <div className="mb-6"> 
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label> 
          <input type="text" id="name" className="border-2 border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-[#A3D9E1] transition-all duration-300 hover:shadow-lg" required /> 
        </div> 
        <div className="mb-6"> 
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label> 
          <input type="email" id="email" className="border-2 border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-[#A3D9E1] transition-all duration-300 hover:shadow-lg" required /> 
        </div> 
        <div className="mb-6"> 
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label> 
          <textarea id="message" rows={4} className="border-2 border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-[#A3D9E1] transition-all duration-300 hover:shadow-lg" required></textarea> 
        </div> 
        <button type="submit" className="bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg">Send Message</button> 
      </form> 
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop')"}}></div>
    </section> 
  ); 
}; 

export default Contact;