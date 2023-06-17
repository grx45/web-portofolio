import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#0E0B16] border-gray-200 px-2 sm:px-4 py-2.5 fixed w-screen h-[2.5vw] ">
      <div className="container flex flex-wrap items-center justify-between mx-auto font-lato ">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#EE82EE]">
          Logo
        </span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-[#EE82EE] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#EE82EE]"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#0E0B16]">
            <li>
              <a
                href="#portofolio"
                className="block py-2 pl-3 pr-4 neon-pink bg-[#0E0B16] font-semibold md:hover:bg-transparent md:border-0 md:p-0 text-base"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#history"
                className="block py-2 pl-3 pr-4 neon-pink bg-[#0E0B16] font-semibold md:hover:bg-transparent md:border-0 md:p-0 text-base"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 pl-3 pr-4 neon-pink bg-[#0E0B16] font-semibold md:hover:bg-transparent md:border-0 md:p-0 text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 neon-pink bg-[#0E0B16] font-semibold md:hover:bg-transparent md:border-0 md:p-0 text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
