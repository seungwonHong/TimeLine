import React from "react";
import Header from "@/features/landing/components/Header";
import Button from "@/shared/components/Button";
import { ChevronRight } from "lucide-react";
import ViewHome from "@/features/landing/components/ViewHome";
import Fields from "@/features/landing/components/Fields";
import Journey from "@/features/landing/components/Journey";
import Subscription from "@/features/landing/components/Subscription";
import Plan from "@/features/landing/components/Plan";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]">
      <Header />

      <div className="text-center 2xl:w-[99rem] lg:w-[80rem] md:w-[56rem] w-[34rem] mx-auto 2xl:mt-[12rem] lg:mt-[8rem] mt-[4rem]">
        <h1 className="2xl:text-[6.4rem] lg:text-[4.8rem] text-[3.2rem] font-medium">
          The best platform to communicate with developers
        </h1>
      </div>

      <div className="2xl:mt-[2rem] lg:mt-[1.2rem] mt-[0.8rem] 2xl:w-[80rem] lg:w-[56rem] md:w-[48rem] w-[34rem] mx-auto">
        <p className="2xl:text-[2.4rem] lg:text-[1.6rem] text-[1.2rem] text-[var(--header-text)] font-light text-center">
          TimeLine is the best platform for various kind of developers. You can
          post your ideas, create a topics, recruit people for projects.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center 2xl:mt-[6rem] lg:mt-[4rem] mt-[2rem] 2xl:gap-[2rem] lg:gap-[1.6rem] gap-[1.2rem]">
        <Button className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-regular hover:bg-[var(--button-hover)] duration-300 ease-in-out">
          Get Started
        </Button>
        <Button className="flex flex-row items-center justify-center gap-2 2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-regular bg-transparent text-[var(--foreground)] hover:bg-[var(--button-hover-transparent)] duration-300 ease-in-out">
          Explore{" "}
          <ChevronRight className="lg:w-[2rem] lg:h-[2rem] w-[1.6rem] h-[1.6rem]" />
        </Button>
      </div>

          <ViewHome />
          <Fields />
          <Journey />
          <Subscription />
          <Plan />
    </div>
  );
};

export default LandingPage;
