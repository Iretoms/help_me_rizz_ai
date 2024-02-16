"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { icebreaker } from "@/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const Icebreaker = () => {
  const [icebreakers, setIcebreakers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userBio, setUserBio] = useState<string>("");
  const { toast } = useToast();

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

  const copyIcebreaker = async (icebreakerText:string) => {
    try {
      await navigator.clipboard.writeText(icebreakerText);
        toast({
          description: "Your Icebreaker has been copied",
        });
    } catch (error) {
       toast({
        variant:'destructive',
         description: "Something went wrong",
       });
      console.error("Could not copy icebreaker: ", error);
    }
  };


    
   


  return (
    <div className="flex justify-center items-center flex-col gap-6 md:gap-10">
      <div className="w-[90%] md:w-[70%] min-h-[30rem] bg-[#18181B] p-10 md:p-20 flex flex-col gap-10 rounded-3xl">
        {loading ? (
          <div className="flex flex-col items-start gap-6">
            <Skeleton className="w-[90%] h-16  bg-[#332C39] rounded-2xl" />
            <Skeleton className="w-[90%] h-16  bg-[#332C39] rounded-2xl" />
            <Skeleton className="w-[90%] h-16  bg-[#332C39] rounded-2xl" />
            <Skeleton className="w-[90%] h-16  bg-[#332C39] rounded-2xl" />
         
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4">
            {icebreakers.map((icebreaker, index) => (
              <div
                key={index}
                className="border-white border border-opacity-20 rounded-2xl p-4 flex items-center justify-between w-full"
              >
                <p className="text-white font-bold text-sm">{icebreaker}</p>
                <Image
                className="object-contain cursor-pointer"
                  onClick={() => copyIcebreaker(icebreaker)}
                  src="/copy.svg"
                  alt="copy"
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row w-[70vw] gap-10  items-center space-x-2">
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
          {loading ? "Icebreaking" : "Rumi it"}
        </Button>
      </div>
    </div>
  );
};

export default Icebreaker;
