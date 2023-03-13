import React from "react";
import Personal from "../assets/icons/personal.png";
import Double from "../assets/icons/double.png";
import Team from "../assets/icons/team.png";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Personal} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#404040] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-slate-200">Start Trail</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold ">$199</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#404040] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-slate-200">Start Trail</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Team} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold ">$299</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-6">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#404040] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-slate-200">Start Trail</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
