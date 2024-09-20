import React from "react";

const SocialMediaSection = () => {
  return (
    <section className=" h-[88vh] relative w-full">
      <img
        src="/images/first.webp"
        alt="Your Image"
        className="object-cover w-full h-full"
      />

      {/* Social Media Icons */}
      <aside className="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col z-10 px-2">
        <a href="#" aria-label="Facebook" className="block">
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48">
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="block">
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48">
            <radialGradient
              id="instagramGradient"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fd5"></stop>
              <stop offset=".328" stopColor="#ff543f"></stop>
              <stop offset=".504" stopColor="#e64771"></stop>
              <stop offset=".761" stopColor="#cc39a4"></stop>
            </radialGradient>
            <path
              fill="url(#instagramGradient)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
          </svg>
        </a>
        <a href="#" aria-label="Pinterest" className="block">
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#E60023"></circle>
            <path
              fill="#FFF"
              d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"></path>
          </svg>
        </a>
      </aside>
    </section>
  );
};

export default SocialMediaSection;
