import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DateNight = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:gap-10">
      <div className="w-[90%] md:w-[70%] h-[30rem] bg-[#18181B] p-10 md:p-20 flex flex-col gap-10 rounded-3xl">
        <Skeleton className="h-10 w-10  bg-[#332C39] rounded-full" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
      </div>
      <div className="flex w-[70vw] gap-10  items-center space-x-2">
        <Input
          className="text-white border-opacity-20 rounded-xl border-white"
          type="email"
          placeholder="Write or Paste Their Bio or Describe Them A Little"
        />
        <Button
          className="bg-white px-10 rounded-xl hover:text-white"
          type="submit"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default DateNight;
