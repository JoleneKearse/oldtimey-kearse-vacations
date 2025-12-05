import Image from "next/image";
import { getPhotos } from "@/lib/cloudinary";

const Grid = async () => {
    const photos = await getPhotos();

    return ( 
        <div className="grid grid-cols-4 row-auto justify-center items-center gap-4 p-4">
        {photos.map((photo, index) => (
            <Image 
                key={index}
                src={photo.url.replace("upload/", "upload/f_auto,q_auto/")}
                alt={photo.publicId}
                width={photo.width}
                height={photo.height}
                loading="eager"
                className=""
            />
        ))}
        </div>
     );
}
 
export default Grid;