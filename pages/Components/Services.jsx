import React, { useState } from "react";
import Image from "next/image";

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open
  
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-50">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
        <button
          className="mt-4 text-black bg-blue-500 p-2 rounded"
          onClick={onClose}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

const BannerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
  });

  // Function to open the modal with specific content
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-cover bg-center sm:py-28 py-32">
      <div className="w-full mx-auto">
        <div className="text-center mb-4">
          <p className="text-lg text-pink-800">Destination|Travel Guide|Adventure|Blog|Plan Your Trip</p>
          <h1 className="sm:text-4xl text-3xl font-bold text-black">
            Explore World
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="sm:px-24 px-5">
          
            <p className="text-center sm:text-lg text-base leading-relaxed text-white-800 sm:block hidden">
              Explore World is your ultimate guide to discovering the globe's hidden gems, breathtaking landscapes, and vibrant cultures. Whether you're an adventurous traveler or a curious explorer, we provide expert tips, detailed guides, and inspiring stories to help you embark on unforgettable journeys and create lasting memories.
            </p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {/* Peaceful Locale Button */}
          <div className="text-center">
            <Image
              src="/images/destination.png"
              className="mx-auto"
              alt="destination"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Destination', "Explore breathtaking destinations worldwide, from vibrant cities to serene landscapes. Discover rich cultures, iconic landmarks, and unforgettable experiences that will inspire your next adventure.")}>
                  Desinations </button>
            </p>
          </div>

          {/* Travel and guide */}
          <div className="text-center">
          <Image
              src="/images/travel.jpg"
              className="mx-auto"
              alt="travels"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Travel Guide', "Comprehensive travel guides with tips, itineraries, and local insights to help you explore confidently.")}
              >
                Travel Guides
              </button>
            </p>
          </div>

          {/* Adventure */}
          <div className="text-center">
          <Image
              src="/images/adv.png"
              className="mx-auto"
              alt="adventure"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Adventure', "Embark on thrilling adventures with exciting activities, from hiking to extreme sports and unforgettable experiences.")}

               >
                Adventure
              </button>
            </p>
          </div>

          
          <div className="text-center">
          <Image
              src="/images/inspire.jpg"
              className="mx-auto"
              alt="inspire"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Inspiration', "Find travel inspiration through stunning stories, breathtaking destinations, and dream journeys to ignite your wanderlust.")}
              >
                Inspiration
              </button>
            </p>
          </div>

          {/* Blogging */}
          <div className="text-center">
          <Image
              src="/images/blog.jpg"
              className="mx-auto"
              alt="blogging"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Blog', "Explore our blog for travel tips, stories, guides, and expert advice to enhance your journey."

)}
              >
                Blog
              </button>
            </p>
          </div>

          {/* Free Mahakal Darshan Button */}
          <div className="text-center">
          <Image
              src="/images/traveling.jpg"
              className="mx-auto"
              alt="travelling"
              width={95}
              height={95}
              loading="lazy"
            />
            <p className="text-black mt-4 font-semibold">
              <button
                className="text-black"
                onClick={() => openModal('Plan your trip',"Plan your perfect trip with expert advice, customized itineraries, and essential tips for seamless travel."  )}
              >
                Plan your trip
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} />
    </div>
  );
};

export default BannerSection;
