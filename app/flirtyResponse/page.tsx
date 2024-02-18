import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const firltyResponse = () => {
  return (
    <div className="flex justify-center items-start gap-10 px-10">
      <div className="flex flex-col gap-10 mt-20 w-[40%]">
        <div className="flex flex-col md:flex-row gap-10  items-center space-x-2">
          <Input
            className="text-white border-opacity-20 rounded-xl border-white placeholder:opacity-30"
            type="email"
            placeholder="Enter your message....."
          />
          <Button className="bg-white px-6 rounded-xl hover:text-white">
            Add to chat
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-10  items-center space-x-2">
          <Input
            className="text-white border-opacity-20 rounded-xl border-white placeholder:opacity-30"
            type="email"
            placeholder="Enter their message....."
          />
          <Button className="bg-white px-6 rounded-xl hover:text-white">
            Add to chat
          </Button>
        </div>
        <Button className="bg-white px-6 rounded-xl hover:text-white">
          Generate Response
        </Button>
      </div>
      <div className="relative hidden md:block">
        <Image
          src="/iphone.svg"
          alt="iPhone"
          width={300}
          height={300}
          className=" w-[40vw]"
        />

        <div className="absolute top-[12rem] right-[8rem] text-white text-sm font-semibold">
          <div className="relative bg-[#2FCC59] w-[10rem] h-[5rem] text-white py-1 px-3 text-left flex justify-start items-center bubbleChat">
            <p>Your text here</p>
          </div>
        </div>
        <div className="absolute top-[20rem] left-[8rem] text-white text-sm font-semibold">
          <div className="relative bg-[#8A898E] text-white max-w-[15rem] min-h-[6rem] py-1 px-3 text-left flex justify-start items-center bubbleChat">
            <p>Your text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firltyResponse;
