import { useState } from "react";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    place: "",
    bookingType: "",
    paymentDetails: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Here you can handle the form data (e.g., send it to the server)
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img5.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
          "Discover new destinations, cultures, adventures, and unforgettable travel experiences worldwide."
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8 font-light italic">
          Where Comfort Meets Spirituality
        </h2>
        <p className="mb-10 text-xl md:text-2xl max-w-3xl leading-relaxed">
          "Explore the world’s hidden gems, vibrant cultures, breathtaking landscapes, and thrilling adventures. Discover unforgettable experiences, unique destinations, and stories that inspire your next journey to new horizons and unforgettable memories."
        </p>

        {/* Book Now Button */}
        <button
          onClick={openPopup}
          className="rounded-full px-8 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white text-lg font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 shadow-lg">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Contact Us</span>
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing the popup
          >
            <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>

            {/* Form inside the popup */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Place to Book */}
              <div>
                <label htmlFor="place" className="block text-lg font-medium text-gray-700">
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Booking Type (Dropdown) */}
              <div>
                <label htmlFor="bookingType" className="block text-lg font-medium text-gray-700">
                  Booking Type
                </label>
                <select
                  id="bookingType"
                  name="bookingType"
                  value={formData.bookingType}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Booking Type</option>
                  <option value="hotel">Hotel</option>
                  <option value="villa">Villa</option>
                  <option value="resort">Resort</option>
                </select>
              </div>

              {/* Payment Details */}
              <div>
                <label htmlFor="paymentDetails" className="block text-lg font-medium text-gray-700">
                  Payment Details
                </label>
                <textarea
                  id="paymentDetails"
                  name="paymentDetails"
                  value={formData.paymentDetails}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
              >
                Submit
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Close
            </button>

          </div>
        </div>
      )}
      
    </div>
  );
};

export default HeroSection;
