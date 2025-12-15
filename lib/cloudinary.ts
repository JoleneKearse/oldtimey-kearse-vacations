import { v2 as cloudinary } from "cloudinary";
import type { Photo } from "@/types/photo";
import type { CloudinaryResource } from "@/types/cloudinaryResource";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getPhotos(tag?: string): Promise<Photo[]> {
  let expression = "folder:family-photos";
  if (tag) {
    expression += ` AND tags=${tag}*`;
  }

  const result = await cloudinary.search
    .expression(expression)
    .with_field("tags")
    .execute();

  return result.resources.map(
    (file: CloudinaryResource): Photo => ({
      publicId: file.public_id,
      url: file.secure_url,
      width: file.width,
      height: file.height,
      format: file.format,
      tags: file.tags || [],
    })
  )
}
