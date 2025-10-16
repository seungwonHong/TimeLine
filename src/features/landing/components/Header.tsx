"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [clicked, setClicked] = useState(0);
    
  return (
    <div className="sticky top-[2rem] 2xl:mt-[4rem] lg:mt-[3rem] mt-[2rem] flex flex-row items-center justify-between 2xl:p-[1.6rem] lg:p-[0.6rem] p-[0.4rem] 2xl:rounded-[2.4rem] lg:rounded-[1.2rem] rounded-[1.2rem] mx-auto 2xl:w-[1067px] lg:w-[704px] w-[343px] md:w-[600px] bg-[var(--header-background)] z-50 backdrop-blur-sm">
      {/* 원래 글씨였다가 스크롤하면 로고로 바뀌도록 설계 -> 로고는 등장할 때 살짝 회전*/}
      <img
        src="/icons/LogoBlack.png"
        alt="logo"
        className="2xl:w-[56px] 2xl:h-[56px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] h-[32px] dark:hidden block"
      />
      <img
        src="/icons/LogoWhite.png"
        alt="logo"
        className="2xl:w-[56px] 2xl:h-[56px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] h-[32px] dark:block hidden"
      />

      <div className="flex flex-row items-center justify-center 2xl:text-[2rem] lg:text-[1.4rem] text-[1rem] font-normal 2xl:gap-[2rem] lg:gap-[1.6rem] gap-[1.2rem] text-[var(--header-text)]">
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 1 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => setClicked(1)}
        >
          Fields
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 2 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => setClicked(2)}
        >
          Journey
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 3 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => setClicked(3)}
        >
          Subscription
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 4 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => setClicked(4)}
        >
          Pricing
        </span>
      </div>

      <Link
        href="/login"
        className="bg-[var(--login-button)] 2xl:px-[3.2rem] 2xl:py-[1.2rem] lg:px-[2.8rem] lg:py-[1rem] px-[1.6rem] py-[0.8rem] 2xl:rounded-[1.2rem] lg:rounded-[0.8rem] rounded-[0.6rem] text-[1rem] font-normal "
      >
        <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-medium">
          Login
        </span>
      </Link>
    </div>
  );
};

export default Header;
