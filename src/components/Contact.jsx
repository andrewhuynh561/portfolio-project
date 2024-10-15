import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        {/* Flex container to hold both contact card and form */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          
          {/* Contact Details Card */}
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-center md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Find Me</h3>
            <p className="mb-2">📧 Email: andrew.huynh561@gmail.com</p>
            <p>📞 Tel: 0405362155</p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center items-center w-full md:w-2/3">
            <form
              action="https://getform.io/f/71ed5d8e-53fe-4353-aef4-1396c5097ec8"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
