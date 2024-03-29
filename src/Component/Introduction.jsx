import React from "react";
import Image1 from "../Images/Profile.jpg";

function Introduction() {
  return (
    <div className=" text-[#708090] flex flex-wrap items-center justify-between mx-auto py-4 pt-[100px] bg-[#0E0B16]">
      <div className="flex w-screen justify-center items-center">
        <div id="portrait-container" className="w-80 rounded-full">
          <img className="rounded-full" src={Image1} alt="Profile" />
        </div>
      </div>

      <div className="md:w-auto w-screen font-lato flex justify-center items-center flex-col">
        <h1 className="flex justify-center items-center font-light text-4xl mt-10 mb-2 text-center md:mx-auto">
          Hi! I'm
        </h1>
        <h1 className="flex justify-center items-center font-bold text-6xl mb-8 text-center md:mx-auto text-[#9b6dff] tracking-wider">
          Jeffry Ngasinur
        </h1>
        <p className="px-5 text-justify text-3xl font-normal tracking-wide w-9/12">
          A mechatronics graduate who recently transitioned into a
          <span className="font-extrabold text-[#9b6dff]">
            {" "}
            full-stack web developer
          </span>{" "}
          for a career shift. Check out my portfolio website to see my technical
          skills and problem-solving abilities.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
