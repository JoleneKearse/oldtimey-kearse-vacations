export function shufflePhotos(photos: Array<any>) {
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
  return photos;
}

export function getStoredPhotoCount(): number {
  if (typeof window === "undefined") {
    return 0;
  }
  const count = localStorage.getItem("photoCount");
  return count ? parseInt(count, 10) : 0;
}

export function setStoredPhotoCount(count: number): void {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem("photoCount", count);
}

export function downloadPhoto(url: string): string {
  return url.replace("upload/", "upload/fl_attachment,f_auto,q_auto/");
}