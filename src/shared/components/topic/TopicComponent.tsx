import React from "react";
import TopicProfileComponent from "./TopicProfileComponent";
import TechStackComponent from "./TechStackComponent";
import TopicComponentJoin from "./TopicComponentJoin";

interface Props {
  type?: "sidePanel" | "mainPage";
}

const TopicComponent = ({ type = "sidePanel" }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-[0.8rem] rounded-[0.8rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out min-w-0">
      <div className="flex flex-col min-w-0 overflow-x-hidden flex-1">
        <span
          className={`${
            type === "sidePanel"
              ? "text-[1.4rem]"
              : "2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.8rem]"
          } font-medium truncate`}
        >
          GDGoC - Google Developer Groups on Campus
        </span>
        <span
          className={`${
            type === "sidePanel"
              ? "text-[1rem]"
              : "2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem]"
          } font-normal text-[#808080]`}
        >
          by Hong.Seung.Won
        </span>

        <div className="flex flex-row items-center mt-[0.8rem] overflow-x-hidden min-w-0">
          <div className="flex-shrink-0">
            <TopicProfileComponent />
          </div>

          <div className="flex flex-row items-center gap-[0.4rem] ml-[1.2rem] min-w-0 overflow-x-auto">
            <TechStackComponent />
            <TechStackComponent />
            <TechStackComponent />
          </div>
        </div>
      </div>

      {type === "mainPage" && <TopicComponentJoin />}
    </div>
  );
};

export default TopicComponent;
