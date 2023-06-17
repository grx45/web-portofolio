import React from "react";
import Tables from "./table";

function History() {
  return (
    <section id="history" className="bg-[#0E0B16] pt-[100px]">
      <div className="container mx-auto">
        <h1 className="text-center mb-16 text-2xl lg:text-5xl font-semibold text-[#9b6dff]">
          Work Experience
        </h1>
        <Tables />
      </div>
    </section>
  );
}

export default History;
