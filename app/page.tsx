import Header from "../components/Header";
import Gallery from "@/components/Gallery";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-stone-900 font-sans dark:bg-black">
      <Header />
      <Gallery />
    </div>
  );
}
