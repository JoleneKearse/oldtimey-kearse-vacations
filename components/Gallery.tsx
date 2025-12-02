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
    <Carousel className="w-3/4 h-3/4 mx-auto">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
