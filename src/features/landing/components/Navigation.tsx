"use client";
import React from "react";

interface Props {
  navigationText: string[];
  onItemClick?: (index: number) => void;
  clicked: number;
  setIsClicked: (index: number) => void;
}

const Navigation = ({
  navigationText,
  onItemClick,
  clicked,
  setIsClicked,
}: Props) => {
  return (
    <div className="sticky 2xl:top-[12rem] lg:top-[10rem] top-[8rem] flex flex-col 2xl:px-[2.4rem] lg:px-[1.6rem] px-[0.8rem] 2xl:gap-[2rem] lg:gap-[1.6rem] gap-[1.2rem] 2xl:ml-[10rem] lg:ml-[6rem] md:ml-[4rem]">
      {navigationText.map((text, index) => (
        <div
          key={index}
          onClick={() => {
            onItemClick?.(index);
            setIsClicked(index + 1);
          }}
          className={`group flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] gap-[0.4rem] cursor-pointer text-[var(--privacy-policy-navigation-text)]  ${
            index + 1 === clicked
              ? "text-[var(--privacy-policy-navigation-text-selected)]"
              : "hover:text-[var(--privacy-policy-navigation-text-hover)]"
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className={`w-[2px] rounded-[0.2rem] h-[1.6rem] bg-[var(--privacy-policy-navigation-text)] ${
              index + 1 === clicked
                ? "bg-[var(--privacy-policy-navigation-text-selected)]"
                : "group-hover:bg-[var(--privacy-policy-navigation-text-hover)]"
            } transition-all duration-300 ease-in-out`}
          ></div>
          <span className="lg:text-[1.6rem] md:text-[1.4rem] text-[1rem] font-normal">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
