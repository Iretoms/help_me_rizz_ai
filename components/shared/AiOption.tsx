import React from "react";
import Link from "next/link";

const AiOption = () => {
  return (
    <div>
      <h1 className="text-white font-extrabold text-4xl mb-10 md:mb-0">
        Try For Free
      </h1>
      <div className=" text-white w-[90vw] md:w-[70vw] md:mt-12  flex flex-wrap justify-center gap-4 md:gap-1 min-h-[20rem] rounded-2xl relative">
        <Link href='/icebreaker'>
          <div className="bg-coralDark cursor-pointer font-bold rounded-2xl flex justify-center items-center flex-grow p-12 ">
            Unleash awesome icebreakers
          </div>
        </Link>
        <div className="bg-white cursor-pointer font-bold text-black rounded-2xl p-12 flex justify-center items-center flex-grow">
          Give Me Date Night Ideas
        </div>
        <div className="bg-coralDark cursor-pointer font-bold rounded-2xl p-12 md:p-2 flex justify-center items-center flex-grow">
          Tingle their spine with flirty response
        </div>
        <div className="bg-white cursor-pointer font-bold text-black rounded-2xl flex justify-center items-center flex-grow p-10">
          They said this, what should i say next
        </div>
        <div className="bg-coralDark cursor-pointer font-bold rounded-2xl flex justify-center items-center flex-grow p-8">
          Banger pickup line
        </div>
      </div>
    </div>
  );
};

export default AiOption;
