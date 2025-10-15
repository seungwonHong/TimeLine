import React from "react";
import Header from "@/features/landing/components/Header";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <Header />

      <div className="text-center 2xl:w-[99rem] lg:w-[80rem] w-[34rem] mx-auto 2xl:mt-[12rem] lg:mt-[8rem] mt-[4rem]">
        <h1 className="2xl:text-[6.4rem] lg:text-[4.8rem] text-[3.2rem] font-medium">
          The best platform to communicate with developers
        </h1>
      </div>

      <div className="2xl:mt-[2rem] lg:mt-[1.2rem] mt-[0.8rem] 2xl:w-[80rem] lg:w-[56rem] w-[34rem] mx-auto">
        <p className="2xl:text-[2.4rem] lg:text-[1.6rem] text-[1.2rem] text-[var(--header-text)] font-light text-center">
          TimeLine is the best platform for various kind of developers. You can
          post your ideas, create a topics, recruit people for projects.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
