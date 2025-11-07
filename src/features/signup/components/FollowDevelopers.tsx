"use client";
import React from "react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import useStepStore from "@/features/signup/store/step";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Input from "@/shared/components/Input";
import UserCard from "@/shared/components/UserCard";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

const FollowDevelopers = ({ className }: Props) => {
  const { setStepNumber, followDevelopers } = useStepStore();
  const router = useRouter();

  const handleStart = () => {
    if (!followDevelopers.length) return;
    router.push("/login");
  };

  const handleSkip = () => {
    router.push("/login");
  };

  return (
    <div
      className={`flex flex-col h-full md:overflow-y-auto p-0 md:py-[3.2rem] 2xl:w-[48rem] lg:w-[40rem] md:w-[32rem] w-[32rem] ${className}`}
    >
      <div className="flex items-center justify-center mr-auto 2xl:rounded-[0.6rem] lg:rounded-[0.4rem] rounded-[0.2rem] hover:bg-[var(--color-input-bg)] duration-300 ease-in-out cursor-pointer px-[0.8rem] py-[0.8rem]">
        <ArrowLeft
          className="2xl:w-[2.4rem] lg:w-[2rem] md:w-[1.6rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] md:h-[1.6rem] h-[2rem]"
          onClick={() => setStepNumber(4)}
        />
      </div>

      <h1 className="2xl:text-[6.4rem] lg:text-[4rem] md:text-[3.2rem] text-[3.2rem] text-medium 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:w-[52rem] lg:w-[40rem] md:w-[32rem] w-[32rem]">
        Find and follow developers who inspire you.
      </h1>

      <h2 className="text-[#676767] 2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.4rem] text-normal 2xl:mt-[5.6rem] lg:mt-[4.8rem] md:mt-[4rem] mt-[3.2rem]">
        Follow developers you want.
      </h2>

      {/* 검색 */}
      <Input
        placeholder="Search for developers"
        inputClassName="w-full rounded-full 2xl:h-[4.8rem] lg:h-[4rem] md:h-[3.8rem] h-[4rem] 2xl:pl-[4.8rem] lg:pl-[4rem] pl-[3.8rem] 2xl:pr-[2rem] lg:pr-[1.6rem] pr-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
        wrapperClassName="2xl:mt-[3.6rem] lg:mt-[3.2rem] md:mt-[2.4rem] mt-[3.2rem]"
        type="search"
        searchIconClassName="2xl:left-[1.6rem] lg:left-[1.2rem] left-[1rem] text-[var(--color-search-icon)]"
      />

      <div className="flex flex-col lg:mt-[2.4rem] mt-[2rem]">
        <UserCard
          name="Hong.Seung.Won"
          followers={100}
          subscribers={100}
          profileImage="/images/hsw.png"
          profileImageClassName="2xl:w-[4.8rem] lg:w-[4rem] md:w-[3.8rem] w-[3.2rem] 2xl:h-[4.8rem] lg:h-[4rem] md:h-[3.8rem] h-[3.2rem]"
          nameClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
          followersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
          subscribersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
        />
        <UserCard
          name="Hong.Seung.Won"
          followers={100}
          subscribers={100}
          profileImage="/images/hsw.png"
          profileImageClassName="2xl:w-[4.8rem] lg:w-[4rem] md:w-[3.8rem] w-[3.2rem] 2xl:h-[4.8rem] lg:h-[4rem] md:h-[3.8rem] h-[3.2rem]"
          nameClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
          followersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
          subscribersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
        />
        <UserCard
          name="Hong.Seung.Won"
          followers={100}
          subscribers={100}
          profileImage="/images/hsw.png"
          profileImageClassName="2xl:w-[4.8rem] lg:w-[4rem] md:w-[3.8rem] w-[3.2rem] 2xl:h-[4.8rem] lg:h-[4rem] md:h-[3.8rem] h-[3.2rem]"
          nameClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
          followersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
          subscribersClassName="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-normal"
        />
      </div>

      <div className="flex flex-row items-center gap-[1.6rem] 2xl:mt-[4rem] lg:mt-[3.2rem] md:mt-[2.4rem] mt-[3.2rem]">
        <Button
          className="self-start flex flex-row items-center gap-[0.8rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal lg:rounded-[0.8rem] rounded-[0.6rem] hover:bg-[var(--color-button-hover)] duration-300 ease-in-out"
          disabled={!followDevelopers.length}
          onClick={handleStart}
        >
          Start
          <ArrowRight className="w-6 h-6" />
        </Button>

        <Button
          onClick={handleSkip}
          className="self-start flex flex-row items-center gap-[0.8rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal text-[var(--color-button-bg)] lg:rounded-[0.8rem] rounded-[0.6rem] bg-transparent"
        >
          Skip
        </Button>
      </div>

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

export default FollowDevelopers;
