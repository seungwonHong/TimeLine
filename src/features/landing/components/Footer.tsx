import Link from "next/link";
import React from "react";
import { robotoMono } from "@/app/layout";

const Footer = () => {
  return (
    <div className="flex flex-col 2xl:mx-[16rem] lg:mx-[12rem] md:mx-[3.2rem] mx-[1.6rem] 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem]">
      <div className="flex flex-row items-start 2xl:gap-[10rem] lg:gap-[6.8rem] gap-[4.8rem]">
        <div className="flex flex-col">
          <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal ">
            Product
          </span>
          <Link
            href="/"
            className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Privacy
          </Link>
          <Link
            href="/"
            className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Terms of use
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal ">
            Resources
          </span>
          <Link
            href="/"
            className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Help
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal ">
            Connect
          </span>
          <Link
            href="/"
            className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            X
          </Link>
          <Link
            href="/"
            className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Instagram
          </Link>
        </div>
      </div>

      <div className="h-[0.1px] w-full bg-[#C5C5C5] 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem]"></div>

      <div
        className={`grid grid-cols-3 items-center 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem] w-full`}
      >
        <span className="flex items-center justify-start 2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal font-robotoMono">
          Copyright © 2025
        </span>

        <div className="flex items-center justify-center">
          <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal font-robotoMono 2xl:w-[28rem] lg:w-[24rem] md:w-[15rem] w-[10rem] text-center">
            Designed and built by 'Hong.Seung.Won'
          </span>
        </div>

        <div className="flex items-center justify-end">
          <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal font-robotoMono">
            Current Status: Building
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
