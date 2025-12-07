"use client";

import { useEffect } from "react";
import { useNewPhotos } from "@/context/new-photos-context";
import type { Photo } from "@/types/photo";
import { setStoredPhotoCount, getStoredPhotoCount } from "@/lib/photoUtils";
import { downloadPhoto } from "@/lib/photoUtils";
import { Londrina_Sketch } from "next/font/google";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "./Button";

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
    <Carousel className="w-1/2 h-1/2 mx-auto" opts={{ loop: true }}>
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center max-w-[840px] max-h-[840px] overflow-hidden relative px-22"
          >
            <Button tooltip="Download" className="absolute -top-112 left-144" onClick={() => {
              const downloadUrl = downloadPhoto(photo.url);
              window.open(downloadUrl, "_blank");
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 bg-gray-950 p-3 rounded-full text-stone-200 hover:bg-stone-800outline-stone-100 outline-2 absolute top-4 right-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Button>
            <Image
              src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
              alt={photo.publicId}
              width={photo.width}
              height={photo.height}
              loading="eager"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button tooltip="Previous" className="absolute -top-110">
        <CarouselPrevious
          className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 ${sketch.className}`}
        />
      </Button>
      <Button tooltip="Next" className="absolute -top-110 left-236">
        <CarouselNext
          className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 translate-x-12 ${sketch.className}`}
        />
      </Button>
    </Carousel>
  );
}
