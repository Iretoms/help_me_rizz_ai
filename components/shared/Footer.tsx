import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-[1px] flex flex-col gap-10 p-10 border-white border-opacity-30 mb-10 mt-28 py-4 w-full rounded-2xl bg-[#18181B]">
      <div className="flex items-center justify-center">
        <div className="text-sm flex items-baseline gap-2 text-white font-bold">
          <Image
            className="object-contain"
            src="/Group.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <p className="font-extrabold text-3xl">RUMI AI</p>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-white opacity-20"></div>
      <div className="flex justify-between items-center  ">
        <div className="space-x-4 text-sm">
          <a href="#" className="text-white hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="flex gap-3 mt-4 text-white">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              className="object-contain"
              src="/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              className="object-contain"
              src="/twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              className="object-contain"
              src="/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              className="object-contain"
              src="/tiktok.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
      <Image
        className="absolute top-5 md:top-10 opacity-10 md:opacity-5 right-5  md:-left-10"
        src="/spiral.svg"
        alt="spiral"
        width={800}
        height={800}
      />
    </footer>
  );
};

export default Footer;
