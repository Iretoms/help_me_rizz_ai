import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

const PickupLine = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:gap-10">
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
    </div>
  );
}

export default PickupLine