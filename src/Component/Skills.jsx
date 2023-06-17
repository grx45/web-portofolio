import React from "react";
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiSequelize,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-[#0E0B16] pt-[100px]">
      <div className="container mx-auto pb-[100px]">
        <h1 className="text-center mb-16 text-2xl lg:text-5xl font-semibold text-[#9b6dff] ">
          Skills
        </h1>
        <div className="flex gap-14 flex-wrap justify-center ">
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <DiHtml5 className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              HTML 5
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225]  rounded-lg shadow-md hover:bg-[#9b6dff] card-body ">
            <DiJavascript className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              JavaScript
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body ">
            <DiCss3 className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              CSS
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body ">
            <DiReact className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              React.JS
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <SiTailwindcss className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              Tailwind
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <SiBootstrap className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              Bootstrap
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <DiNodejsSmall className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              Node.Js
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <SiExpress className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              Express
            </h5>
          </span>
          <span class="flex flex-col justify-center items-center max-w-md md:w-1/3 p-6 bg-[#171225] rounded-lg shadow-md hover:bg-[#9b6dff] card-body">
            <SiSequelize className="icons" />
            <h5 class="mb-2 text-2xl font-bold tracking-normal text-[#708090] text-center card-text">
              Sequelize
            </h5>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
