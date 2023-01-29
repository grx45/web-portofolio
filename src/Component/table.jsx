import React from "react";

function Tables() {
  return (
    <div className="relative overflow-x-auto w-4/5 mx-auto rounded-lg shadow-md">
      <table className="w-full text-sm text-left text-gray-500 font-lato">
        <thead className="text-base lg:text-lg text-[#708090] uppercase bg-[#171225] border-b border-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className=" hidden md:block px-6 py-3">
              Duration
            </th>
          </tr>
        </thead>
        <tbody className="lg:text-lg">
          <tr className="bg-[#171225]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-[#9b6dff] "
            >
              PT. Hino Motor Sales Indonesia
            </th>
            <td className="px-6 py-4">Internship</td>
            <td className="px-6 py-4 hidden md:block">Oct '16 – Nov '16</td>
          </tr>
          <tr className="bg-[#171225]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-[#9b6dff] "
            >
              Fachhochschule Südwestfalen
            </th>
            <td className="px-6 py-4">Internship</td>
            <td className="px-6 py-4 hidden md:block">Mar '18 - July '18</td>
          </tr>
          <tr className="bg-[#171225] ">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-[#9b6dff]"
            >
              PT. Petrolink Services Indonesia
            </th>
            <td className="px-6 py-4">Full-Time</td>
            <td className="px-6 py-4 hidden md:block">Aug '21 - Aug '22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
