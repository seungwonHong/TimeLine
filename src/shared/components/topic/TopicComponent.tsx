import React from "react";
import TopicProfileComponent from "./TopicProfileComponent";
import TechStackComponent from "./TechStackComponent";

type Props = {};

const TopicComponent = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-[0.8rem] rounded-[0.8rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out">
      <div className="flex flex-col">
        <span className="text-[1.4rem] font-medium truncate">
          GDGoC - Google Developer Groups on Campus
        </span>
        <span className="text-[1rem] font-normal text-[#808080]">
          by Hong.Seung.Won
        </span>

        <div className="flex flex-row items-center mt-[0.8rem]">
          <TopicProfileComponent />

          <div className="flex flex-row items-center gap-[0.4rem] ml-[1.2rem]">
            <TechStackComponent />
            <TechStackComponent />
            <TechStackComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicComponent;
