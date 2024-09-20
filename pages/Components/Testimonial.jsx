import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const TestimonialAndTrustedBy = () => {
  const TestimonialData = [
    {
      id: 1,
      image: "/images/css-3.jpg",
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "John Doe",
      role: "UI Developer",
    },
    {
      id: 2,
      image: "/images/person.jpg",
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "John Doe",
      role: "UI Developer",
    },
    {
      id: 3,
      image: "/images/person.jpg",
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "John Doe",
      role: "UI Developer",
    },
    {
      id: 4,
      image: "/images/person.jpg",
      content:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "John Doe",
      role: "UI Developer",
    },
  ];

  return (
    <>
      {/* Testimonial Section */}
      <section className="text-gray-600 bg-properties/5 pb-6 pt-6 my-6">
        <div className="py-4">
          <div className="lg:max-w-[1300px] px-4 md:px-8 mx-auto">
            <h2 className="lg:text-2xl text-lg uppercase font-manrope mb-5 lg:mb-8 font-extrabold text-neutral-800 text-center mx-auto">
              Testimonials
            </h2>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              breakpoints={{
                276: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper">
              {TestimonialData.map((data) => (
                <SwiperSlide key={data.id}>
                  <div>
                    <div className="w-full text-gray-600">
                      <div className="h-full rounded-2xl border bg-white border-gray-300">
                        <p className="leading-relaxed mb-6 text-[15px] px-5 pt-5">
                          {data.content}
                        </p>
                        <div className="inline-flex items-center bg-gray-100 px-5 pt-2 pb-[6px] rounded-b-2xl w-full">
                          <Image
                            src={data.image}
                            alt=""
                            className="w-12 h-12 rounded-full object-cover object-center"
                            width={80}
                            height={100}></Image>
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="font-semibold text-neutral-800">
                              {data.name}
                            </span>
                            <span className="text-gray-600 text-sm">
                              {data.role}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAndTrustedBy;
