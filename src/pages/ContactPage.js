import React, { useState } from "react";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic here, e.g., API call
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false); // Reset the submission state to show the form again
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-yellow-400 to-teal-500">
      <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">
        Contact Us
      </h1>
      <p className="text-lg text-white text-center max-w-2xl animate-fadeIn">
        We would love to hear from you! If you have any questions or inquiries,
        please reach out to us through the form below or via our contact
        details.
      </p>

      {isSubmitted ? (
        <div className="text-center">
          <p className="text-2xl text-white mt-6 animate-fadeIn">
            Message sent successfully!
          </p>
          <button
            onClick={handleReset}
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Click here to send another form
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mt-8 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
