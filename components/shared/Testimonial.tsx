import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  return (
    <Carousel className="w-full max-w-xs border">
      <CarouselContent className="flex aspect-square items-center justify-center p-6 text-textGray">
        <CarouselItem className="basis-1/3">One day</CarouselItem>
        <CarouselItem className="basis-1/3">Tue day</CarouselItem>
        <CarouselItem className="basis-1/3">Wed day</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="text-textGray" />
      <CarouselNext className="text-textGray" />
    </Carousel>
  );
};

export default Testimonial;
