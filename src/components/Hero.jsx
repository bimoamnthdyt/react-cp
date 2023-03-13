import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#606060] font-bold p-5">GROWING WITH OUR COMPANY</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">Darkcode.id</h1>
        <div className="flex justify-center">
          <p className="md:text-3xl font-light text-[#C0C0C0]">" focuses on helping clients create a </p>
          <Typed className="md:text-3xl font-bold text-[#C0C0C0] pl-1" strings={["Product", "Aplication", "Website"]} typeSpeed={50} backSpeed={60} loop />
          <p className="md:text-3xl font-light text-[#C0C0C0] ">"</p>
        </div>
        <div>
          <button className="bg-[#404040] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-slate-200">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
