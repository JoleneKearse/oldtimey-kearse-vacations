"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "./SearchBar";

const SearchSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.toLowerCase();
    const params = new URLSearchParams(searchParams.toString());

    if (tag) {
      params.set("search", tag);
      router.push(`/grid?tag=${encodeURIComponent(tag)}`);
    } else {
      params.delete("search");
      router.push("/grid");
    }
  };

  return <SearchBar handleSearchChange={handleSearchChange} />;
};

export default SearchSection;
