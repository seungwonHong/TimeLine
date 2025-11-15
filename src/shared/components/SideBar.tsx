"use client";
import React, { useEffect } from "react";
import { House } from "lucide-react";
import { Bell } from "lucide-react";
import { Code } from "lucide-react";
import { Play } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { User } from "lucide-react";
import useSidebarStore from "../store/sidebarStore";
import { Plus } from "lucide-react";
import useDropDownStore from "../store/dropDownStore";
import DropDownMenu from "./DropDownMenu";

const SideBar = () => {
  const { setIsOpen, isMobile, isClicked, setIsClicked } = useSidebarStore();
  const { sideBarDropDownOpen, setSideBarDropDownOpen } = useDropDownStore();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop();
    setIsClicked(page || "");
  }, []);

  return (
    <div className="fixed h-full flex flex-col items-center justify-center 2xl:w-[24rem] lg:w-[20rem] md:w-[4.8rem] w-[16rem]">
      <nav className="flex flex-col w-full lg:gap-[0.4rem] md:gap-[1.2rem] gap-[0.4rem]">
        <Link
          href="/main/home?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "home"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("home");
            isMobile && setIsOpen(false);
          }}
        >
          <House className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Home
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/notification?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "notification"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("notification");
            isMobile && setIsOpen(false);
          }}
        >
          <Bell className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Notification
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/coding?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "coding"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("coding");
            isMobile && setIsOpen(false);
          }}
        >
          <Code className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Coding
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/video?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "video"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("video");
            isMobile && setIsOpen(false);
          }}
        >
          <Play className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Video
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/audio?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "audio"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("audio");
            isMobile && setIsOpen(false);
          }}
        >
          <AudioLines className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Audio
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/design?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "design"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("design");
            isMobile && setIsOpen(false);
          }}
        >
          <Paintbrush className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Design
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
      </nav>

      <div className=" flex-col md:items-center md:justify-center lg:items-start xl:justify-start md:absolute hidden md:flex 2xl:bottom-[1.6rem] lg:bottom-[1.4rem] md:bottom-[1.2rem] bottom-[1rem] left-0 w-full">
        {/* 포스트 & 토픽 추가 버튼 */}
        <div className="md:flex hidden relative xl:hidden mb-[1.2rem]">
          {sideBarDropDownOpen && (
            <DropDownMenu className="bottom-[4.8rem] left-[2rem]" align="left">
              <div className="flex flex-row items-center justify-center px-[3.2rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out">
                <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                  Create Post
                </span>
              </div>
              <div className="flex flex-row items-center justify-center px-[3.2rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out">
                <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                  Create Topic
                </span>
              </div>
            </DropDownMenu>
          )}

          <button
            className="flex flex-row items-center justify-center rounded-full bg-side-bar-plus-button w-[4rem] h-[4rem] cursor-pointer hover:bg-side-bar-plus-button-hover backdrop-blur-sm transition-all duration-300 ease-in-out "
            onClick={(e) => {
              e.stopPropagation();
              setSideBarDropDownOpen(!sideBarDropDownOpen);
            }}
          >
            <Plus className="w-[2.4rem] h-[2.4rem]" />
          </button>
        </div>

        {/* 프로필 */}
        <div className="flex flex-row items-center ">
          <Link
            href="/profile"
            className="rounded-full bg-header-profile-bg lg:w-[4rem] lg:h-[4rem] md:w-[4.8rem] md:h-[4.8rem] w-[3.2rem] h-[3.2rem] flex items-center justify-center"
            onClick={() => isMobile && setIsOpen(false)}
          >
            <User className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[1.6rem] h-[1.6rem]" />
          </Link>

          <div className="lg:flex hidden flex-col lg:ml-[1.2rem] ml-[0.8rem]">
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
              hong.seung.won
            </span>
            <span className="2xl:text-[1.2rem] lg:text-[1rem] md:text-[1rem] text-[0.6rem] font-normal">
              nonamed814@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
