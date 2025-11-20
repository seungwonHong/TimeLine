"use client";
import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import Button from "../Button";

type Props = {};

const TopicComponentJoin = (props: Props) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex flex-row items-center lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem]">
      <Bookmark
        className={`w-[2.4rem] h-[2.4rem] cursor-pointer ${
          bookmarked && "fill-foreground"
        }`}
        strokeWidth={1.5}
        onClick={() => setBookmarked(!bookmarked)}
      />

      <Button className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:rounded-[0.8rem] lg:rounded-[0.6rem] rounded-[0.4rem] hover:bg-button-hover transition-all duration-300 ease-in-out">
        🔒 Join
      </Button>
    </div>
  );
};

export default TopicComponentJoin;
