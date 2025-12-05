import Image from "next/image";
import { getPhotos } from "@/lib/cloudinary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Londrina_Sketch } from "next/font/google";
import { shufflePhotos } from "@/lib/photoUtils";
import Button from "./Button";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

export default async function Gallery() {
  const images = await getPhotos();
  const photos = shufflePhotos(images);
  // TODO: initiate new badge when localStorage number is higher than old photos.length
  // console.log(photos.length);

  return (
    <Carousel className="w-1/2 h-1/2 mx-auto outline" opts={{ loop: true }}>
      <CarouselContent>
        {photos.map((photo: object, index: number) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center max-w-[840px] max-h-[840px] overflow-hidden relative px-22"
          >
            <Button tooltip="Download" className="absolute -top-112 left-144">
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
        <CarouselPrevious className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 ${sketch.className}`} />
      </Button>
      <Button tooltip="Next" className="absolute -top-110 left-236">
        <CarouselNext className={`bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50 translate-x-12 ${sketch.className}`} />
      </Button>
    </Carousel>
  );
}
