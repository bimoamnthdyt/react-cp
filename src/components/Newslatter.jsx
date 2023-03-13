import React from "react";

function Newslatter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-3">
          <h1 className="md:text-1xl sm:text-3xl text-lg font-bold py-1">Want tips & tricks to optimize your flow? </h1>
          <p className=" font-light">Sign up to our newslatter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-2 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-[#404040] w-[150px] rounded-md font-medium ml-2 my-6 py-1 text-slate-200">Notify Me</button>
          </div>
          <p className="text-[#C0C0C0] font-thin">
            We care bout the protection of your data. Read our <span className="text-[#404040]">Privacy Police</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
