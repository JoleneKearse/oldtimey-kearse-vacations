import Image from "next/image";
import { getPhotos } from "@/lib/cloudinary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Gallery() {
  const photos = await getPhotos();
  // TODO: initiate new badge when localStorage number is higher than old photos.length
  // console.log(photos.length);

  return (
    <Carousel className="w-1/2 h-1/2 mx-auto" opts={{ loop: true }}>
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center max-w-[840px] max-h-[840px]"
          >
            <Image
              src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
              alt={photo.publicId}
              width={photo.width}
              height={photo.height}
              className="rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50">
        &lt;
      </CarouselPrevious>

      <CarouselNext className="bg-gray-950 text-stone-200 p-3 rounded-full hover:bg-stone-800 hover:text-stone-50">
        &gt;
      </CarouselNext>
    </Carousel>
  );
}
