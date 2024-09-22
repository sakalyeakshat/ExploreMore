"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";

const Gallery = () => {
  return (
    <section className="py-16 sm:py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Gallery</h2>
          <p className="text-lg text-gray-600">
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
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover"
                src="/images/img1.jpg"
                alt="Bathroom"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover"
                src="/images/img2.jpg"
                alt="Bedroom"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover "
                src="/images/img3.jpg"
                alt="Balcony"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover"
                src="/images/img4.jpg"
                alt="Bedroom"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover "
                src="/images/img5.jpg"
                alt="Balcony"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover "
                src="/images/img6.jpg"
                alt="Toilet"
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Toilet
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
