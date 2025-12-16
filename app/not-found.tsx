import { Suspense } from "react";

import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";

import { Spinner } from "@/components/ui/spinner";

const sketch = Londrina_Sketch({
  weight: "400",
  subsets: ["latin"],
});

const NotFound = () => {
  return (
    <Suspense fallback={<Spinner className="size-8" />}>
      <article className="w-full mx-auto flex flex-col justify-center items-center p-16 gap-12 text-2xl text-stone-600">
        <h1 className={`${sketch.className} text-7xl`}>Something went wrong</h1>
        <p>(The dogs probably did it.)</p>
        <Link href="/" className="text-blue-500 underline">
          Go back home
        </Link>
      </article>
    </Suspense>
  );
};

export default NotFound;
