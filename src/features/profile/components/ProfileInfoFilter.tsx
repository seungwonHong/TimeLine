"use client";
import React, { useState } from "react";
import useSidebarStore from "@/shared/store/sidebarStore";

type Props = {};

const ProfileInfoFilter = (props: Props) => {
  const { isOpen } = useSidebarStore();
  const [selectedFilter, setSelectedFilter] = useState("posts");

  return (
    <div
      className={`lg:py-[1.4rem] md:py-[1.6rem] bg-background lg:mt-[2.4rem] md:mt-[1.6rem] mt-[2.4rem] flex flex-row lg:gap-[1rem] md:gap-[0.6rem] items-center w-full overflow-x-auto ${
        isOpen
          ? "md:top-0 md:sticky z-[120]"
          : "2xl:top-[5.6rem] md:top-[4.8rem] z-[95]"
      }`}
    >
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "posts"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => setSelectedFilter("posts")}
      >
        Posts
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "comments"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => setSelectedFilter("comments")}
      >
        Comments
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "topics"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => setSelectedFilter("topics")}
      >
        Topics
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "bookmarks"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => setSelectedFilter("bookmarks")}
      >
        Bookmarks
      </button>
    </div>
  );
};

export default ProfileInfoFilter;
