import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DestinationsNearby = () => {
  return (
    <section className="py-20 px-16 bg-green-900/20  ">
      <div className="w-full mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-4xl font-extrabold text-black mb-2">
            Destinations Nearby
          </h4>
          <p className="text-lg text-gray-600">
            Explore the most popular nearby attractions
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
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
          className="swiper-container mb-10">
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="/images/card-1.jpg"
                loading="lazy"
                alt="Mahakal Temple"
                className="w-full h-80  object-cover rounded-xl shadow-lg"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Mahakaleshwar Jyotirlinga
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="/images/card-2.jpg"
                loading="lazy"
                alt="Isckon Temple"
                className="w-full h-80 object-cover rounded-xl shadow-lg "
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Isckon Temple
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="/images/card-6.jpg"
                loading="lazy"
                alt="Isckon Temple"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Ram Ghat
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                src="/images/card-4.webp"
                loading="lazy"
                alt="Isckon Temple"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Mahakal Lok
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationsNearby;
