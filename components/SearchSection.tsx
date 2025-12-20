"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";

const SearchSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const tag = searchParams.get("tag");
    setSearchValue(tag || "");
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.toLowerCase();
    setSearchValue(tag);
    const params = new URLSearchParams(searchParams.toString());

    if (tag) {
      params.set("search", tag);
      router.push(`/grid?tag=${encodeURIComponent(tag)}`);
    } else {
      params.delete("search");
      router.push("/grid");
    }
  };

  return <SearchBar handleSearchChange={handleSearchChange} value={searchValue} />;
};

export default SearchSection;
