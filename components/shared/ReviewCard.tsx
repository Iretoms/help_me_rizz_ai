import { TestimonialProps } from "@/types";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ name, review, icon, location }: TestimonialProps) => {
  return (
    <div className="p-4 border border-opacity-40 border-coralDark rounded-2xl flex flex-col items-start justify-center  h-[17rem] md:gap-5 w-full md:h-[28rem]">
      <Image
        src={icon}
        alt="Icon"
        width={100}
        height={100}
        className="object-contain w-10 md:w-20"
      />
      <div className="flex items-center md:mb-2">
        <h3 className="md:text-5xl font-semibold text-xl">{name}</h3>
      </div>
      <p className="md:text-3xl text-gray-600  text-sm font-light">{review}</p>
      <p className="text-xs text-gray-400 mt-2">{location}</p>
    </div>
  );
};

export default ReviewCard;
