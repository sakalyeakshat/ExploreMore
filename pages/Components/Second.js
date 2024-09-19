import React from "react";

const BannerSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-44"
      style={{ backgroundImage: "url(/images/banner-2.jpg)" }}>
      <div className="lg:max-w-[1300px] mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold font-montserrat text-green-700">
            VAKRATUNDA HOMESTAY
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="px-24">
            <p className="text-center text-lg leading-relaxed text-gray-800">
              Vakratunda Homestays in Ujjain offers a unique opportunity to
              create lasting memories with your loved ones. Nestled in the heart
              of Ujjain, a city renowned for its rich cultural heritage and
              ancient temples, our homestays provide the perfect sanctuary.
              Whether you are seeking peaceful reflection or quality family
              time, our homestays offer the ideal setting for relaxation.
              Explore the historic city of Ujjain while enjoying the comfort of
              Vakratunda Homestay - the place where your memorable journey
              begins.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-12">
          <div className="w-1/2 md:w-1/4 text-center">
            <img
              src="https://www.anamalahomestays.com/assets/img/icons/ep.svg"
              className="mx-auto h-16 w-16"
              alt="Environmentally Conscious"
            />
            <p className="text-black mt-4 font-semibold">
              Environmentally Conscious
            </p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <img
              src="https://www.anamalahomestays.com/assets/img/icons/hf.svg"
              className="mx-auto h-16 w-16"
              alt="Home Cooked Food"
            />
            <p className="text-black mt-4 font-semibold">Home Cooked Food</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <img
              src="https://www.anamalahomestays.com/assets/img/icons/pl.svg"
              className="mx-auto h-16 w-16"
              alt="Peaceful Locale"
            />
            <p className="text-black mt-4 font-semibold">Peaceful Locale</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <img
              src="https://www.anamalahomestays.com/assets/img/icons/ec.svg"
              className="mx-auto h-16 w-16"
              alt="Warm Hospitality"
            />
            <p className="text-black mt-4 font-semibold">Warm Hospitality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
