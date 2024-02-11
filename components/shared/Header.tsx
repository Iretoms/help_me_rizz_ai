import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between sticky top-0 items-center  bg-slate900 border-t-textGray w-[90%] md:w-[60%]  py-4 px-5 ">
      {/* Logo */}
      <div className="text-sm text-white font-bold">
        <Image src='/logo.png' alt="logo" width={200} height={200}/>
      </div>

      {/* Signup Button */}
      <button className="flex justify-center items-center bg-coral text-white font-bold py-2 px-4 rounded-full w-fit h-20 md:h-20 shadow-md text-sm">
        Sign Up
      </button>
    </div>
  );
};

export default Header;
