"use client";

import { useEffect } from "react";

import Image from "next/image";
import { Londrina_Sketch } from "next/font/google";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useNewPhotos } from "@/context/new-photos-context";

import { setStoredPhotoCount, getStoredPhotoCount } from "@/lib/photoUtils";

import TooltipIcon from "@/components/TooltipIcon";

import type { Photo } from "@/types/photo";

import CarouselIndicators from "./CarouselIndicators";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

type GalleryProps = {
  photos: Photo[];
};

export default function Gallery({ photos }: GalleryProps) {
  const { setHasNewPhotos } = useNewPhotos();

  useEffect(() => {
    const previousCount = getStoredPhotoCount();
    const currentCount = photos.length;

    if (currentCount > previousCount) {
      setHasNewPhotos(true);
    }

    setStoredPhotoCount(photos.length);
  }, [photos.length, setHasNewPhotos]);

  return (
    <Carousel
      className="flex w-[400px] md:w-[700px] lg:w-1/2 lg:h-1/2 mx-auto my-auto flex-col"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem
            key={index}
            className="max-w-[840px] flex justify-center items-center max-h-[840px] overflow-hidden relative px-22"
          >
            <Image
              src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
              alt={photo.publicId}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 768px) 100vw, 840px"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <TooltipIcon tooltip="Previous" side="right" sideOffset={1014}>
        <CarouselPrevious
          className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 cursor-pointer ${sketch.className}`}
        />
      </TooltipIcon>
      <TooltipIcon tooltip="Next" side="left" sideOffset={-56}>
        <CarouselNext
          className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 translate-x-12 cursor-pointer ${sketch.className}`}
        />
      </TooltipIcon>
      <CarouselIndicators variant="dots-slash" />
    </Carousel>
  );
}
