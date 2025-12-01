import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 p-8">
        <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0]">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Pluimmers, we believe in delivering quality craftsmanship with care. Our mission is to provide outstanding service and support to all our clients, ensuring their satisfaction every step of the way.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Dedicated to Quality</li>
          <li>Craftsmanship with Care</li>
          <li>Client-Centric Approach</li>
          <li>Innovative Solutions</li>
        </ul>
        <button className="bg-gradient-to-r from-[#A3D9E1] to-[#B9E5C0] px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
          Get in Touch
        </button>
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1556742031-5a0a4f3b3a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGNhcmZ0c2hpcHR8ZW58MHx8fHwxNjYzOTM3MjQ0&ixlib=rb-1.2.1&q=80&w=1080" 
            alt="Craftsmanship" 
            className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;