"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import useStepStore from "../store/step";

type Props = {};

const SignupStep = (props: Props) => {
  const { stepNumber } = useStepStore();
  const steps = [
    "Age Verification",
    "Personal Info",
    "Introduce Yourself",
    "Choose Your Interests",
    "Follow Developers",
  ];

  return (
    <div className="flex flex-col md:mt-0 mt-[4rem] md:items-start items-center">
      <h2 className="md:flex hidden 2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal">
        Account Setup
      </h2>

      <div className="flex md:flex-col flex-row 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[3.2rem]">
        {steps.map((step, index) => (
          <div
            className="flex flex-row items-center 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.6rem]"
            key={index}
          >
            <div
              className={`rounded-full lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2rem] md:h-[2rem] w-[3.6rem] h-[3.6rem] flex items-center justify-center ${
                index + 1 < stepNumber
                  ? "bg-[#3DD42C]"
                  : index + 1 === stepNumber
                  ? "bg-transparent border border-[var(--primary-color)]"
                  : "bg-[var(--color-input-bg)]"
              }`}
            >
              {index + 1 < stepNumber ? (
                <Check className="lg:h-6 lg:w-6 md:h-4 md:w-4 h-8 w-8 text-white" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`md:flex hidden 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal ${
                index + 1 === stepNumber && "text-[var(--primary-color)]"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <span className="md:hidden flex text-[1.6rem] font-normal mt-[2.4rem] text-[var(--color-primary-color)]">
        {steps[stepNumber - 1]}
      </span>
    </div>
  );
};

export default SignupStep;
