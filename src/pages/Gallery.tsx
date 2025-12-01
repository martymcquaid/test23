import React, { useState } from 'react'; 
import Modal from 'react-modal';

const Gallery: React.FC = () => { 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image: string) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };
  
  return ( 
    <section className="py-24 bg-gradient-to-b from-[#A3D9E1] to-[#B9E5C0]">
      <h2 className="text-6xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#343A40] to-[#495057]">Our Work</h2>
      <p className="text-lg text-center text-gray-700 mb-10">Explore our collection of craftsmanship and creativity.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(12)].map((_, index) => {
          const imageUrl = `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop`;
          return (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer" onClick={() => openModal(imageUrl)}>
              <img src={imageUrl} alt={`Gallery Item ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center bg-black/75">
        <div className="relative">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>✖</button>
          <img src={currentImage} alt="Current View" className="max-w-full max-h-screen" />
        </div>
      </Modal>
    </section> 
  ); 
}; 

export default Gallery;