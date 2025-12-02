"use client";

// import { Card, CardContent } from "@/components/ui/card";
import { Image } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  return (
    <Carousel className="w-full max-w-">
      <CarouselContent>
        <CarouselItem key={index}></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
