import Image from "next/image";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";

import { getPhotos } from "@/lib/cloudinary";
import { downloadPhoto, shufflePhotos } from "@/lib/photoUtils";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

const Grid = async ({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) => {
  const { tag } = await searchParams;
  const images = await getPhotos(tag);
  const photos = shufflePhotos(images);

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 min-h-[50vh] w-full">
        <p
          className={`text-4xl font-extrabold ${sketch.className} text-stone-700 dark:text-stone-300`}
        >
          No photos found {tag && `for "`}{" "}
          {tag ? (
            <span className="text-purple-600 dark:text-purple-400">
              {tag}
            </span>
          ) : (
            ""
          )}
          {tag && `"`}!
        </p>
        <p className="text-lg">
          Try searching for a something we've actually done, sheesh!
        </p>
        <Link
          href="/grid"
          className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-700 text-stone-800 dark:text-stone-300 rounded-lg transition-colors"
        >
          Retry
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 row-auto justify-center items-center gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative text-purple-600">
          <Image
            key={index}
            src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
            alt={photo.publicId}
            width={photo.width}
            height={photo.height}
            className="relative"
          />
          <a href={downloadPhoto(photo.url)} download>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-8 absolute -top-8 right-0 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20zm0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05zm6.5 0v5.25L14.25 13l.75.66l-3.5 3.5l-3.5-3.5l.75-.66L11 15.25V10z"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Grid;
