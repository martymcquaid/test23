import React from 'react'; 

const Contact: React.FC = () => { 
  return ( 
    <section className="py-20 max-w-7xl mx-auto"> 
      <h2 className="text-5xl font-semibold mb-10 text-center">Contact Us</h2> 
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"> 
        <div className="mb-4"> 
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label> 
          <input type="text" id="name" className="border-2 border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-[#A3D9E1]" required /> 
        </div> 
        <div className="mb-4"> 
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label> 
          <input type="email" id="email" className="border-2 border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-[#A3D9E1]" required /> 
        </div> 
        <div className="mb-4"> 
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label> 
          <textarea id="message" rows={4} className="border-2 border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-[#A3D9E1]" required></textarea> 
        </div> 
        <button type="submit" className="bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0] px-8 py-4 rounded-full text-lg font-semibold">Send Message</button> 
      </form> 
    </section> 
  ); 
}; 

export default Contact;