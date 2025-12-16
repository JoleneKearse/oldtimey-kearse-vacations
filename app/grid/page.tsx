import Image from "next/image";
import { getPhotos } from "@/lib/cloudinary";
import { shufflePhotos } from "@/lib/photoUtils";

// export const dynamic = "force-dynamic";

const Grid = async ({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) => {
  const { tag } = await searchParams;
  const images = await getPhotos(tag);
  const photos = shufflePhotos(images);

  return (
    <div className="grid grid-cols-4 row-auto justify-center items-center gap-4 p-4">
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
          alt={photo.publicId}
          width={photo.width}
          height={photo.height}
        />
      ))}
    </div>
  );
};

export default Grid;
