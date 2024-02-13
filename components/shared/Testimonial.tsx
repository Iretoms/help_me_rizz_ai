import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { testimonials } from "@/constant";

const Testimonial = () => {
  return (
    <div className="flex  flex-col items-center gap-10">
      <h1 className="text-white md:w-[60%] text-2xl md:text-3xl">
        What Are People Saying?
      </h1>
      <Carousel className="w-[40%] md:w-[60%] border h-[19rem] md:h-[30rem]">
        <CarouselContent className="flex aspect-square  p-2 text-textGray ]">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <ReviewCard
                  name={testimonial.name}
                  review={testimonial.review}
                  icon={testimonial.icon}
                  location={testimonial.location}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-textGray" />
        <CarouselNext className="text-textGray" />
      </Carousel>
    </div>
  );
};

export default Testimonial;
