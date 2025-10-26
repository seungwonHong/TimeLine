import Link from "next/link";
import React from "react";

const UpdateComponent = () => {
  return (
    <Link
      href="/updates"
      className="flex flex-col 2xl:rounded-[3.2rem] lg:rounded-[2.4rem] md:rounded-[1.6rem] rounded-[1.2rem] 2xl:w-[64rem] 2xl:h-[60rem] lg:w-[50rem] lg:h-[48rem] md:w-[42rem] md:h-[36rem] w-[40rem] h-[34rem] hover:bg-[#DDE9FF] hover:text-black transition-all duration-300 ease-in-out 2xl:p-[1rem] lg:p-[1em] md:p-[0.8rem] p-[0.6rem]"
    >
      <img
        src="/images/community.jpg"
        alt="community"
        className="w-full 2xl:h-[40rem] lg:h-[30rem] md:h-[24rem] h-[20rem] object-cover 2xl:rounded-[2.4rem] lg:rounded-[1.6rem] md:rounded-[1rem] rounded-[0.8rem]"
      />

      <div className="flex flex-col 2xl:mt-[1rem] lg:mt-[0.8rem] md:mt-[0.6rem] mt-[0.4rem]">
        <span className="2xl:text-[3.2rem] lg:text-[2.4rem] md:text-[2rem] text-[2rem] font-normal">
          Community Service Beta Launch
        </span>
        <p className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1rem] text-[1.2rem] font-normal text-[#808080] line-clamp-3">
          We’re excited to announce the beta release of our community feature —
          a space where developers can share insights, ask questions, and
          connect directly with others. During the beta, we’ll be gathering
          feedback to improve discussions, tagging, and notification systems.
        </p>
      </div>

      <div className="mt-auto">
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1rem] text-[1.2rem] font-normal">
          October 26, 2025
        </span>
      </div>
    </Link>
  );
};

export default UpdateComponent;
