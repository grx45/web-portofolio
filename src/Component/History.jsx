import React from "react";
import University from "../Images/Uni Logo.png";
import programs from "../Images/html5-logo-31816.png";

function History() {
  return (
    <section className="bg-[#CD0404]">
      <div className="container text-[#3D1766] flex flex-wrap items-center justify-center mx-auto py-4 gap-3 md:px-2">
        {/* ===================================================== */}
        <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
          <div className="bg-white text-center rounded-md flex flex-wrap lg:flex-col justify-center w-11/12 pb-5 px-1 md:w-1/2 h-72">
            <h1 className="mb-3 mt-3 font-bold sm:w-full text-2xl break-words md:text-lg">
              EDUCATION HISTORY
            </h1>
            <div className="flex items-center justify-center relative">
              <img className="relative" src={University} alt="SGU Logo" />
            </div>
            <span className="font-semibold">
              Bachelor of Engineering (S.T. , B.E.) | 2015 - 2020
            </span>
          </div>

          <div className="bg-white text-center rounded-md flex flex-wrap justify-center w-11/12 pb-3 px-1 md:w-1/2 h-72">
            <h1 className="mb-3 mt-3 font-bold text-2xl break-words md:text-lg">
              WORK EXPERIENCE
            </h1>
            <div className="w-full flex flex-col">
              <h2 className="font-semibold">INTERNSHIPS</h2>
              <ul className="text-sm">
                <li className="font-semibold mt-2 mb-1 text-base">
                  PT. Hino Motor Sales Indonesia{" "}
                  <span className="font-normal">| Oct '16 – Nov '16</span>
                </li>
                <li className="font-semibold text-base">
                  Fachhochschule Südwestfalen{" "}
                  <span className="font-normal">| Mar '18 - July '18</span>
                </li>
              </ul>
              <h2 className="font-semibold mt-2 mb-1">FULL-TIME</h2>
              <ul className="text-sm">
                <li className="font-semibold">
                  PT. Petrolink Services Indonesia
                  <span className="font-normal text-base">
                    {" "}
                    | Aug '21 - Aug '22
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ========================================================== */}
      </div>
    </section>
  );
}

export default History;
