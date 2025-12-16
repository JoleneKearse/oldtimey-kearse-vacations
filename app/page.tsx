import { getPhotos } from "@/lib/cloudinary";
import { shufflePhotos } from "@/lib/photoUtils";

import Gallery from "@/components/Gallery";

export const dynamic = "force-dynamic";

export default async function Home() {
  const photos = await getPhotos();
  shufflePhotos(photos);

  return <Gallery photos={photos} />;
}
