"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { icebreaker } from "@/api";

const Icebreaker = () => {
  const [icebreakers, setIcebreakers] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await icebreaker();
        if (data) {
          setIcebreakers(data);
        } else {
          console.log("Data is undefined");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:gap-10">
      {icebreakers ? (
        <div className="w-[90%] md:w-[70%] h-[40rem] bg-[#18181B] p-10 md:p-20 flex flex-col gap-10 rounded-3xl">
          <h1 className="text-2xl text-gray-600">
            Here are a few Ice breakers
          </h1>
          <p className="text-white font-bold text-sm">{icebreakers}</p>
        </div>
      ) : (
        <div className="w-[90%] md:w-[70%] h-[40rem] bg-[#18181B] p-10 md:p-20 flex flex-col gap-10 rounded-3xl">
          <Skeleton className="h-10 w-10  bg-[#332C39] rounded-full" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
          <Skeleton className="h-6 w-[60%]  bg-[#332C39] rounded-2xl" />
        </div>
      )}
    </div>
  );
};

export default Icebreaker;
