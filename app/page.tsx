import Gallery from "@/components/Gallery";
import { getPhotos } from "@/lib/cloudinary";
import { shufflePhotos } from "@/lib/photoUtils";

export default async function Home() {
  const images = await getPhotos();
  const photos = shufflePhotos(images);

  return <Gallery photos={photos} />;
}
