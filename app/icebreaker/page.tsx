"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { icebreaker } from "@/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Icebreaker = () => {
  const [icebreakers, setIcebreakers] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userBio, setUserBio] = useState<string>("");

  const fetchIcebreaker = async () => {
      try {
        setLoading(true)
        const data = await icebreaker(userBio);
        if (data) {
          setIcebreakers(data);
        } else {
          console.log("Data is undefined");
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }

  }


    
   


  return (
    <div className="flex justify-center items-center flex-col gap-6 md:gap-10">
      <div className="w-[90%] md:w-[70%] min-h-[30rem] bg-[#18181B] p-10 md:p-20 flex flex-col gap-10 rounded-3xl">
        {loading ? (
          <div className="flex flex-col items-start gap-6">
            <Skeleton className="h-6 w-10  bg-[#332C39] rounded-full" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
            <Skeleton className="h-4 w-[60%]  bg-[#332C39] rounded-2xl" />
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4">
            <p className="text-white font-bold text-sm">{icebreakers}</p>
          </div>
        )}
      </div>
      <div className="flex w-[70vw] gap-10  items-center space-x-2">
        <Input
          className="text-white border-opacity-20 rounded-xl border-white placeholder:opacity-30"
          type="email"
          onChange={(e) => setUserBio(e.target.value)}
          placeholder="Write or Paste Their Bio or Describe Them A Little....."
        />
        <Button
          className="bg-white px-10 rounded-xl hover:text-white"
          onClick={fetchIcebreaker}
        >
          {loading ? "Icebreaking" : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default Icebreaker;
