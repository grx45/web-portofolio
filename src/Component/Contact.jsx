import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <section className="bg-[#3D1766]">
      <div className="container mx-auto w-screen py-5 px-4 lg:py-10 lg:px-0 lg:flex lg:justify-center">
        {/* ==================================================================================================== */}
        <div className="bg-[#CD0404] text-white lg:w-1/3 px-6 py-3 rounded-t-md">
          <h1 className="my-4 text-2xl font-bold">Get in Touch</h1>
          <div className="flex items-center">
            <BsTelephone className="mr-2" />
            <h4 className="my-2 font-semibold text-sm">Phone</h4>
          </div>
          <h3 className="text-[#3D1766] font-semibold">+62-8558828295</h3>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <h4 className="my-2 font-semibold text-sm">Email</h4>
          </div>
          <h3 className="text-[#3D1766] font-semibold">
            jeffryngasinur@gmail.com
          </h3>
        </div>
        {/* =============================================================================================== */}
        <div className="bg-white text-[#3D1766] lg:w-2/3 px-6 py-3 rounded-b-md">
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3D1766] focus:border-[#3D1766] block w-full p-2.5"
                placeholder="Enter a valid email address"
                required
              />
            </div>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#3D1766] focus:border-[#3D1766]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#3D1766] focus:border-[#3D1766]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3D1766] border-[#3D1766] border sm:w-fit hover:bg-white hover:text-[#3D1766] focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
