import React from "react";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <section className="bg-[#171225]">
      <div className="container mx-auto w-screen pb-5 px-4 lg:py-10 lg:px-0">
        {/* ==================================================================================================== */}
        <div className="bg-[#171225] text-[#9b6dff] px-6 py-3 rounded-t-md text-lg">
          <h1 className="my-6 text-2xl lg:text-5xl font-semibold">
            Get in Touch
          </h1>
          <p className="mb-4 text-[#708090] text-2xl">
            Thank you for visiting my website. For any business inquiries,please
            use the contact form or provided information. I appreciate your
            interest and I look forward to connecting with you soon."
          </p>
          <div className="flex items-center">
            <BsTelephone className="mr-2 text-[#9b6dff] text-2xl" />
            <h4 className="my-4 font-semibold text-2xl text-[#9b6dff] lg:my-8">
              Phone
            </h4>
          </div>
          <h3 className="text-[#708090] font-semibold lg:text-2xl">
            +62-8558828295
          </h3>
          <div className="flex items-center">
            <FiMail className="mr-2 text-[#9b6dff] text-2xl" />
            <h4 className="my-4 font-semibold text-2xl text-[#9b6dff] lg:my-8">
              Email
            </h4>
          </div>
          <a
            href="mailto:jeffryngasinur@gmail.com"
            className="text-blue-600 font-semibold underline lg:text-2xl"
          >
            jeffryngasinur@gmail.com
          </a>
          <div className="flex items-center">
            <CiLocationOn className="mr-2 text-[#9b6dff] text-2xl" />
            <h4 className="my-4 font-semibold text-2xl text-text-[#9b6dff] lg:my-8">
              Location
            </h4>
          </div>
          <h3 className="text-[#708090] font-semibold lg:text-2xl">
            Jakarta, Indonesia
          </h3>
        </div>
        <div className="my-4 flex gap-10 px-4 lg:my-8">
          <a
            className="linkedin-icon"
            href="https://www.linkedin.com/in/jeffry-ngasinur-900547204/"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className="linkedin-icon"
            href="https://www.instagram.com/grx45/?hl=en"
          >
            <AiOutlineInstagram className="insta-icon" />
          </a>
        </div>

        {/* =============================================================================================== */}
      </div>
    </section>
  );
}

export default Contact;
