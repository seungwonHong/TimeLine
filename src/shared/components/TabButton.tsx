import React from "react";
import { useTabStore } from "@/features/landing/store/tabButton";

interface Props {
  tabs: string[];
  onChange?: (tab: string) => void;
  type: "landing" | "home";
}

const TabButton = ({ tabs, onChange = () => {}, type }: Props) => {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div
      className={`flex flex-row items-center justify-center p-[0.4rem] gap-[0.4rem] rounded-[0.8rem] ${
        type === "landing"
          ? "md:h-[4.8rem] h-[4rem] bg-[var(--landing-tab-button)]"
          : ""
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={
            type === "landing" ? () => setActiveTab(tab) : () => onChange(tab)
          }
          className={`font-normal hover:text-black dark:hover:text-white hover:bg-[var(--landing-tab-button-active)] ${
            activeTab === tab
              ? "bg-[var(--landing-tab-button-active)] text-black dark:text-white"
              : "text-gray-500"
          } duration-200 ease-in-out cursor-pointer rounded-[0.6rem] ${
            type === "landing"
              ? "text-[1.4rem] md:text-[1.6rem] md:px-[5.8rem] md:py-[1rem] px-[4rem] h-full"
              : "text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabButton;
