import React from "react";

export const Experiences = () => {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2">
        <img className="w-[390px] mx-auto my-5" src="https://static.wixstatic.com/media/62eb01_d74e3850a7ab4a53a686c6154766c5c2~mv2.png/v1/fill/w_418,h_325,al_c,lg_1,q_85,enc_auto/Illustration%201.png" alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">We share our ideas, knowhow and experiences</h1>
          <p className="font-thin">We try to help our clients innovate and make ideas come to life. We always listen to our client's wishes and share our expertise, know-how, and experiences to ensure your product is the best it can be.</p>
        </div>

        <h1 className="w-[350px] mx-auto my-1 md:text-4xl sm:text-3xl text-2xl font-bold py-3">We share our ideas, knowhow and experiences</h1>
        <div className="flex flex-col justify-center">
          <p className=" font-thin">
            One thing that sets us apart from others is our passionate team. Our business analysts and developers always ensure that we develop high-quality software. All in all, we aim to have long-term relationships with all our clients.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
