"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import "swiper/css/parallax";

const Explore= () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    paymentMethod: "Paytm",
  });

  const places = [
    {
      src: "/images/seclude.jpg",
      alt: "Secluded Treehouse Gateway",
      price: "$450 / night",
      description: "Nestled in a secluded forest, this treehouse offers a peaceful escape surrounded by nature.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/beachfront.jpg",
      alt: "Beachfront Paradise",
      price: "$800 / night",
      description: "Enjoy breathtaking views of the ocean from this luxurious beachfront property.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/historic.jpg",
      alt: "Historic Canal House",
      price: "$350 / night",
      description: "Step back in time with this charming historic house located by the canal.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/island.jpg",
      alt: "Private Island Retreat",
      price: "$1200 / night",
      description: "Escape to a private island surrounded by turquoise waters.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/bali.jpg",
      alt: "Beachfront Bunglow in Bali",
      price: "$600 / night",
      description: "A perfect blend of comfort and luxury, with stunning views of Bali's beaches.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/dubai.jpg",
      alt: "Desert Oasis in Dubai",
      price: "$700 / night",
      description: "Experience modern luxury amidst stunning sand dunes in Dubai.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/tokyo.jpg",
      alt: "Modern Apartment in Tokyo",
      price: "$500 / night",
      description: "Stay in the heart of Tokyo in this stylish apartment with easy access to culture and dining.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/banf.jpg",
      alt: "Mountain View Cabin in Banff",
      price: "$400 / night",
      description: "Experience the beauty of the Canadian Rockies in this cozy mountain cabin.",
      contactNumber: "+1234567890",
    },
    {
      src: "/images/scotland.jpg",
      alt: "Historic Castle in Scotland",
      price: "$850 / night",
      description: "Live like royalty in a historic Scottish castle with stunning views.",
      contactNumber: "+1234567890",
    },
    // other places...
  ];

  const openImage = (image, details) => {
    setSelectedImage(image);
    setSelectedDetails(details);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedDetails(null);
  };

  const handleBookingClick = () => {
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    alert("Booking details submitted!");
    setShowFormModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="sm:-my-24 -my-0 sm:py-[90px] py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <h2 className="sm:text-4xl text-3xl font-bold text-black mb-2">
            Explore All Around The World
          </h2>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, // Enable pagination click functionality
          }}
          navigation={true} // Show next/prev buttons
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper-container">
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  className="w-full h-96 object-cover cursor-pointer"
                  src={place.src}
                  alt={place.alt}
                  onClick={() => openImage(place.src, place)}
                />
                <div className="text-center mt-4 font-semibold text-gray-700">
                  {place.alt}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && selectedDetails && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}>
          <div
            className="bg-white p-8 rounded-lg relative max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full-screen"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 text-gray-700 text-lg">{selectedDetails.description}</div>

            <div className="mt-4 text-xl font-semibold text-gray-900">
              {selectedDetails.price}
            </div>

            {/* Book Online Button */}
            <button
              onClick={handleBookingClick}
              className="mt-6 inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Book Online
            </button>

            <button
              className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
              onClick={closeImage}
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showFormModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseFormModal}>
          <div
            className="bg-white p-8 rounded-lg relative max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">Book Your Stay</h3>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleFormChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Paytm">Paytm</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit Booking
              </button>
            </form>

            <button
              className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
              onClick={handleCloseFormModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default  Explore;
