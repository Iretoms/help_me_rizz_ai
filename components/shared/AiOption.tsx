import React from "react";

const AiOption = () => {
  return (
    <div className=" text-white w-[90vw] md:w-[70vw]  flex flex-wrap justify-center gap-4 md:gap-1 min-h-[20rem] rounded-2xl relative">
      <div className="bg-coralDark font-bold rounded-2xl flex justify-center items-center flex-grow p-12">
        Unleash awesome icebreakers
      </div>
      <div className="bg-white font-bold text-black rounded-2xl p-12 flex justify-center items-center flex-grow">
        Give Me Date Night Ideas
      </div>
      <div className="bg-coralDark font-bold rounded-2xl p-12 md:p-2 flex justify-center items-center flex-grow">
        Tingle their spine with flirty response
      </div>
      <div className="bg-white font-bold text-black rounded-2xl flex justify-center items-center flex-grow p-10">
        They said this, what should i say next
      </div>
      <div className="bg-coralDark font-bold rounded-2xl flex justify-center items-center flex-grow p-8">
        Banger pickup line
      </div>
    </div>
  );
};

export default AiOption;
