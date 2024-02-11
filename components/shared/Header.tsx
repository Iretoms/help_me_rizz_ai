import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center sticky top-0 bg-slate900">
      {/* <div className="text-sm text-white font-bold">
        <Image
          className="object-contain border"
          src="/logo.png"
          alt="logo"
          width={400}
          height={400}
        />
      </div> */}

      {/* Signup Button */}
      <button className="flex justify-center items-center bg-coral text-white font-bold py-2 px-4 rounded-full w-fit h-20 md:h-20 shadow-md text-sm">
        Sign Up
      </button>
    </div>
  );
};

export default Header;
