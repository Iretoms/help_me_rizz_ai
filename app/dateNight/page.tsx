"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { dateNight } from "@/api";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const DateNightIdeas = () => {
  const [dateNightIdeas, setDateNightIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const fetchDateNightIdeas = async () => {
    try {
      setLoading(true);
      const data = await dateNight();
      if (data) {
        setDateNightIdeas(data);
      } else {
        console.log("Data is undefined");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const copyDataNightIdeas = async (dateNightText: string) => {
    try {
      await navigator.clipboard.writeText(dateNightText);
      toast({
        description: "You date night idea has been copied",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
      console.error("Could not copy date night: ", error);
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
            {dateNightIdeas.map((dateNightIdea, index) => (
              <div
                key={index}
                className="border-white border border-opacity-20 rounded-2xl p-4 flex items-center justify-between w-full"
              >
                <p className="text-white font-bold text-sm">{dateNightIdea}</p>
                <Image
                  className="object-contain cursor-pointer"
                  onClick={() => copyDataNightIdeas(dateNightIdea)}
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
        <Button
          className="bg-white px-10 rounded-xl hover:text-white"
          onClick={fetchDateNightIdeas}
        >
          {loading ? "Ruming..." : "Get Date Ideas"}
        </Button>
      </div>
    </div>
  );
};

export default DateNightIdeas;
