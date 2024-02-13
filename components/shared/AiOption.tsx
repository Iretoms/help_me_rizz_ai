import React from "react";
import Link from "next/link";

const AiOption = () => {
  return (
    <div>
      <h1 className="text-white font-extrabold text-4xl mb-10 md:mb-0">
        Try For Free
      </h1>
      <div className=" text-white text-extrabold w-[90vw] md:w-[70vw] md:mt-12  flex flex-wrap justify-center gap-4 md:gap-2 min-h-[21rem] rounded-2xl relative">
        <Link
          className="bg-coralDark cursor-pointer font-bold rounded-2xl flex justify-center items-center flex-grow p-12"
          href="/icebreaker"
        >
          <div>Unleash awesome icebreakers</div>
        </Link>
        <Link
          className="bg-white cursor-pointer font-bold text-black rounded-2xl p-10 flex justify-center items-center flex-grow"
          href="/dateNight"
        >
          <div>Give Me Date Night Ideas</div>
        </Link>
     
        <Link
          className="bg-coralDark cursor-pointer font-bold rounded-2xl p-10 md:p-2 flex justify-center items-center flex-grow"
          href="/icebreaker"
        >
          <div>Tingle their spine with flirty response</div>
        </Link>
        <Link
          className="bg-white cursor-pointer font-bold text-black rounded-2xl flex justify-center items-center flex-grow p-12"
          href="/icebreaker"
        >
          <div>They said this, what should i say next</div>
        </Link>
        <Link
          className="bg-coralDark cursor-pointer font-bold rounded-2xl flex justify-center items-center flex-grow p-6"
          href="/pickupLine"
        >
          <div>Banger pickup line</div>
        </Link>
      </div>
    </div>
  );
};

export default AiOption;
