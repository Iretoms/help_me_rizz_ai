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
    <div>
      {/* <h1 className="text-white font-extrabold text-4xl mb-10 md:mb-0">
        Let RUMO Be Your Wing Man
      </h1> */}
      <Carousel className="w-full max-w-xs border">
        <CarouselContent className="flex aspect-square items-center justify-center p-6 text-textGray">
          <CarouselItem className="">One day</CarouselItem>
          <CarouselItem className="">Tue day</CarouselItem>
          <CarouselItem className="">Wed day</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-textGray" />
        <CarouselNext className="text-textGray" />
      </Carousel>
    </div>
  );
};

export default Testimonial;
