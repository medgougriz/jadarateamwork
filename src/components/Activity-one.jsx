import React from "react";
import Yo1 from "../assets/images/yo1.jpg";
import Yo2 from "../assets/images/yo2.jpg";


export default function Activity1() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300">
        <img
          className="w-64 h-52 object-cover object-top"
          src={Yo1}
          alt="Yoza"
        />
        <div className="flex flex-col items-center">
          <p className="font-medium mt-3">Yoza</p>
          <p className="text-gray-500 text-sm">yoza@gmail.com</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300">
        <img
          className="w-64 h-52 object-cover object-top"
          src={Yo2}
          alt="Youssef"
        />
        <div className="flex flex-col items-center">
          <p className="font-medium mt-3">Youssef</p>
          <p className="text-gray-500 text-sm">youssef@gmail.com</p>
        </div>
      </div>

    </div>
  );
}
