import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between z-20 w-full py-4 px-4 md:px-10  items-center sticky top-0  backdrop-blur-[5px]">
      <div className="text-sm flex items-baseline gap-2 text-white font-bold">
        <Image
          className="object-contain"
          src="/Group.svg"
          alt="logo"
          width={12}
          height={12}
        />
        <p className="font-extrabold text-2xl">
          RUMI <span className="text-coralDark">AI</span>{" "}
        </p>
      </div>

      {/* Signup Button */}
      <button className="flex justify-center items-center bg-textGray text-black font-bold py-2 px-4 rounded-xl w-fit  shadow-md text-sm">
        Sign Up
      </button>
    </div>
  );
};

export default Header;
