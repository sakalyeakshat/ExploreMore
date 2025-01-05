import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DestinationsNearby = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedImage, setSelectedImage] = useState(null); // Store the clicked image data

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set selected image data
    setIsModalOpen(true); // Open modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <section className="py-12 sm:py-28 px-4 sm:px-16">
      <div className="w-full mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Places you can opt for
          </h4>
          <p className="text-base sm:text-lg text-gray-600">
            Explore the most popular nearby attractions
          </p>
        </div>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          loop={true}
          className="swiper-container mb-10"
        >
          {[
            {
              src: "/images/goa.jpg",
              alt: "Goa",
              title: "Goa, India",
              description: "Goa, India, is famous for its beautiful beaches, vibrant nightlife, and historical landmarks. A perfect destination for a relaxing holiday."
            },
            {
              src: "/images/kerala.jpg",
              alt: "Kerala",
              title: "Kerala, India",
              description: "Kerala, known as 'God's Own Country', offers tranquil backwaters, lush greenery, and stunning hill stations. A serene escape into nature."
            },
            { 
              src: "/images/bangko.jpg", 
              alt: "Bangkok", 
              title: "Bangkok, Thailand", 
              description: "Bangkok, Thailand’s capital, is known for its lively street life, cultural landmarks, and beautiful temples."
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  src={slide.src}
                  loading="lazy"
                  alt={slide.alt}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg cursor-pointer"
                  onClick={() => handleImageClick(slide)} // Trigger the modal on image click
                />
                <div className="text-center mt-4 font-semibold text-gray-700">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black-600 bg-gray text-lg"
            >
              Back to home
            </button>
            <div className="flex justify-between items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-2/3 h-auto object-cover rounded-xl shadow-lg"
              />
              <div className="w-1/3 pl-8">
                <h3 className="text-3xl font-semibold mb-4">{selectedImage.title}</h3>
                <p className="text-lg text-gray-700">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DestinationsNearby;
