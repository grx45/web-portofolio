import React from "react";
import programs from "../Images/html5-logo-31816.png";

function Skills() {
  return (
    <section className="bg-white">
      <div className="container text-[#3D1766] flex flex-wrap items-center justify-center mx-auto py-4 gap-3 md:px-2">
        <div className="bg-white text-center rounded-md flex flex-wrap items-center justify-center w-11/12 lg: flex-col">
          <h1 className="mb-3 mt-3 font-bold text-2xl">SKILLS</h1>
          {/* pemisah antara header sama logos */}

          <div classname="flex flex-wrap w-full">
            <div className="pb-5 inline-block w-[65%] md:w-[45%]">
              <img src={programs} alt="Languages" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
