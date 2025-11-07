"use client";
import React, { useEffect } from "react";
import { CornerUpRight } from "lucide-react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import useStepStore from "@/features/signup/store/step";
import { ArrowLeft } from "lucide-react";
import GridBox from "@/shared/components/GridBox";
import { PanelsTopLeft } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Brain } from "lucide-react";
import { Hammer } from "lucide-react";
import { PaintbrushVertical } from "lucide-react";
import { Box } from "lucide-react";
import { Video } from "lucide-react";
import { Music } from "lucide-react";
import { KeyboardMusic } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { Database } from "lucide-react";
import { Ungroup } from "lucide-react";
import useGridBoxStore from "@/shared/store/gridBoxStore";

interface Props {
  className?: string;
}

const ChooseYourInterest = ({ className }: Props) => {
  const { setStepNumber } = useStepStore();
  const { selectedInterests, setSelectedInterests } = useGridBoxStore();

  const handleContinue = () => {
    if (Object.values(selectedInterests).some(Boolean)) {
      setStepNumber(5);
    }
  };

  return (
    <div
      className={`flex flex-col h-full md:overflow-y-auto p-0 md:py-[3.2rem] 2xl:w-[48rem] lg:w-[40rem] md:w-[32rem] w-[32rem] ${className}`}
    >
      <div className="flex items-center justify-center mr-auto 2xl:rounded-[0.6rem] lg:rounded-[0.4rem] rounded-[0.2rem] hover:bg-[var(--color-input-bg)] duration-300 ease-in-out cursor-pointer px-[0.8rem] py-[0.8rem]">
        <ArrowLeft
          className="2xl:w-[2.4rem] lg:w-[2rem] md:w-[1.6rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] md:h-[1.6rem] h-[2rem]"
          onClick={() => setStepNumber(3)}
        />
      </div>

      <h1 className="2xl:text-[6.4rem] lg:text-[4rem] md:text-[3.2rem] text-[3.2rem] text-medium 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:w-[52rem] lg:w-[40rem] md:w-[32rem] w-[32rem]">
        What are you interested in?
      </h1>

      <h2 className="text-[#676767] 2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.4rem] text-normal 2xl:mt-[5.6rem] lg:mt-[4.8rem] md:mt-[4rem] mt-[3.2rem]">
        Select the topics that inspire you
      </h2>

      {/* 관심 분야(그리드) */}
      <div className="grid grid-cols-3 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem] 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
        <GridBox
          icon={
            <PanelsTopLeft
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Web"
          selected={selectedInterests.web}
          onClick={() => setSelectedInterests("web", !selectedInterests.web)}
        />
        <GridBox
          icon={
            <TabletSmartphone
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Mobile"
          selected={selectedInterests.app}
          onClick={() => setSelectedInterests("app", !selectedInterests.app)}
        />
        <GridBox
          icon={
            <Brain
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="AI"
          selected={selectedInterests.ai}
          onClick={() => setSelectedInterests("ai", !selectedInterests.ai)}
        />
        <GridBox
          icon={
            <Hammer
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Design"
          selected={selectedInterests.tools}
          onClick={() =>
            setSelectedInterests("tools", !selectedInterests.tools)
          }
        />
        <GridBox
          icon={
            <PaintbrushVertical
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Art"
          selected={selectedInterests.uiux}
          onClick={() => setSelectedInterests("uiux", !selectedInterests.uiux)}
        />
        <GridBox
          icon={
            <Box
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="3D & Motion"
          selected={selectedInterests.threeDMotion}
          onClick={() =>
            setSelectedInterests(
              "threeDMotion",
              !selectedInterests.threeDMotion
            )
          }
        />
        <GridBox
          icon={
            <Video
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Video"
          selected={selectedInterests.video}
          onClick={() =>
            setSelectedInterests("video", !selectedInterests.video)
          }
        />
        <GridBox
          icon={
            <Music
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Music"
          selected={selectedInterests.music}
          onClick={() =>
            setSelectedInterests("music", !selectedInterests.music)
          }
        />
        <GridBox
          icon={
            <KeyboardMusic
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Sound Design"
          selected={selectedInterests.soundDesign}
          onClick={() =>
            setSelectedInterests("soundDesign", !selectedInterests.soundDesign)
          }
        />
        <GridBox
          icon={
            <Gamepad2
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Game"
          selected={selectedInterests.game}
          onClick={() => setSelectedInterests("game", !selectedInterests.game)}
        />
        <GridBox
          icon={
            <Database
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Data Analysis"
          selected={selectedInterests.dataAnalysis}
          onClick={() =>
            setSelectedInterests(
              "dataAnalysis",
              !selectedInterests.dataAnalysis
            )
          }
        />
        <GridBox
          icon={
            <Ungroup
              className="2xl:w-[6.4rem] 2xl:h-[6.4rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1}
            />
          }
          name="Blockchain"
          selected={selectedInterests.blockChain}
          onClick={() =>
            setSelectedInterests("blockChain", !selectedInterests.blockChain)
          }
        />
      </div>

      <Button
        className="self-start flex flex-row items-center gap-[0.8rem] 2xl:mt-[4rem] lg:mt-[3.2rem] md:mt-[2.4rem] mt-[3.2rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal lg:rounded-[0.8rem] rounded-[0.6rem] hover:bg-[var(--color-button-hover)] duration-300 ease-in-out"
        disabled={!Object.values(selectedInterests).some(Boolean)}
        onClick={handleContinue}
      >
        Continue
        <CornerUpRight className="w-6 h-6" />
      </Button>

      <div className="flex flex-row items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
        <span className="2xl:text-[1.4rem] text-[1.2rem] text-normal">
          Joined us before?{" "}
          <Link href="/login" className="text-[var(--color-primary-color)]">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ChooseYourInterest;
