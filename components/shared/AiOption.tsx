'use client'
import React from "react";
import Link from "next/link";
import HoverCard from "./HoverCard";

const AiOption = () => {
  return (
    <div>
      <h1 className="text-white font-extrabold text-4xl mb-10 md:mb-0">
        Try For Free
      </h1>
      <div className=" text-black  text-extrabold w-[90vw] md:w-[70vw] md:mt-12  flex flex-wrap justify-center gap-4 md:gap-4 min-h-[21rem] rounded-2xl relative">
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard text="Unleash Awesome Icebreakers" />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard text="Give Me Date Night Ideas" />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard text="Tingle their spine with flirty response" />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard text="They said this, what should i say next" />
        </Link>
        <Link
          className="cursor-pointer font-bold rounded-2xl flex justify-center items-center"
          href="/icebreaker"
        >
          <HoverCard text="Banger pickup line" />
        </Link>
        
      </div>
    </div>
  );
};

export default AiOption;
