import React from "react";
import Header from "@/features/landing/components/Header";
import Button from "@/shared/components/Button";
import { ChevronRight } from "lucide-react";
import ViewHome from "@/features/landing/components/ViewHome";
import Fields from "@/features/landing/components/Fields";
import Journey from "@/features/landing/components/Journey";
import Subscription from "@/features/landing/components/Subscription";
import Plan from "@/features/landing/components/Plan";
import { ArrowDown } from "lucide-react";
import Footer from "@/features/landing/components/Footer";

const LandingPage = () => {
  return (
    <div className="2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem] ">
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

      <div className="flex flex-col items-center justify-center 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem] 2xl:w-[39rem] lg:w-[32rem] md:w-[24rem] w-[20rem] mx-auto">
        <h2 className="2xl:text-[4.8rem] lg:text-[3.2rem] text-[2.4rem] font-normal text-center">
          Start building your creative journey
        </h2>
        <ArrowDown className="2xl:w-[3.2rem] lg:w-[2.4rem] md:w-[1.6rem] w-[1.2rem] 2xl:h-[3.2rem] lg:h-[2.4rem] md:h-[1.6rem] h-[1.2rem] 2xl:mt-[3.2rem] lg:mt-[2.4rem] md:mt-[1.6rem] mt-[1.2rem] text-[#808080]" />
        <Button className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-regular hover:bg-[var(--button-hover)] duration-300 ease-in-out cursor-pointer 2xl:mt-[3.2rem] lg:mt-[2.4rem] md:mt-[1.6rem] mt-[1.2rem]">
          Get Started
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
