import React from "react";

const BannerSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-44 mt-32"
      style={{ backgroundImage: "url(/images/banner-2.webp)" }}>
      <div className="w-full mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold font-montserrat text-green-700">
            VAKRATUNDA HOMESTAY
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="px-24">
            <p className="text-center text-lg leading-relaxed text-gray-800 sm:block hidden">
              Experience the warmth of Indian hospitality at Vakratunda Homestay
              in Ujjain. Our cozy accommodations offer a perfect blend of modern
              comfort and traditional charm. Immerse yourself in the spiritual
              ambiance of this ancient city, known for its sacred Mahakaleshwar
              Temple. Whether you are a pilgrim or a curious traveler, our
              homestay serves as an ideal base to explore Ujjain&apos; rich
              history and vibrant culture. Enjoy home-cooked meals, personalized
              service, and insider tips to make your stay truly memorable. At
              Vakratunda Homestay, we are not just offering a place to stay – we
              are inviting you to become part of our family.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-12">
          <div className="w-1/2 md:w-1/4 text-center mb-10">
            <img
              src="https://www.anamalahomestays.com/assets/img/icons/ep.svg"
              className="mx-auto h-16 w-16 "
              alt="Environmentally Conscious"
            />
            <p className="text-black mt-4 font-semibold ">Eco-Friendly</p>
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
