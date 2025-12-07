import { v2 as cloudinary } from "cloudinary";
import type { Photo } from "@/types/photo";
import type { CloudinaryResource } from "@/types/cloudinaryResource";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getPhotos(): Promise<Photo[]> {
  const result = await cloudinary.search
    .expression("folder:family-photos")
    .execute();

  return result.resources.map(
    (file: CloudinaryResource): Photo => ({
      publicId: file.public_id,
      url: file.secure_url,
      width: file.width,
      height: file.height,
      format: file.format,
    })
  );
}
