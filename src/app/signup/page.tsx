"use client";
import React from "react";
import SignupStep from "@/features/signup/components/SignupStep";
import useStepStore from "@/features/signup/store/step";
import AgeVerification from "@/features/signup/components/AgeVerification";
import RefreshNotice from "@/shared/components/RefreshNotice";
import GoBackNotice from "@/shared/components/GoBackNotice";
import PersonalInfo from "@/features/signup/components/PersonalInfo";
import Modal from "@/shared/components/Modal";
import CheckBox from "@/features/signup/components/CheckBox";
import IntroduceYourself from "@/features/signup/components/IntroduceYourself";
import ChooseYourInterest from "@/features/signup/components/ChooseYourInterest";
import FollowDevelopers from "@/features/signup/components/FollowDevelopers";

const Signup = () => {
  const { stepNumber, personalInfo, setPersonalInfo } = useStepStore();

  return (
    <div className="relative flex md:flex-row flex-col items-center md:justify-center h-screen 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] 2xl:gap-[24rem] lg:gap-[20rem] md:gap-[16rem] gap-[6rem] md:overflow-hidden ">
      <SignupStep />
      {stepNumber === 1 && (
        <AgeVerification className="2xl:w-[58rem] lg:w-[48rem] md:w-[40rem] w-[32rem]" />
      )}
      {stepNumber === 2 && (
        <PersonalInfo className="2xl:w-[58rem] lg:w-[48rem] md:w-[40rem] w-[32rem]" />
      )}
      {stepNumber === 3 && (
        <IntroduceYourself className="2xl:w-[58rem] lg:w-[48rem] md:w-[40rem] w-[32rem]" />
      )}
      {stepNumber === 4 && (
        <ChooseYourInterest className="2xl:w-[58rem] lg:w-[48rem] md:w-[40rem] w-[32rem]" />
      )}
      {stepNumber === 5 && (
        <FollowDevelopers className="2xl:w-[58rem] lg:w-[48rem] md:w-[40rem] w-[32rem]" />
      )}
      <RefreshNotice />
      <GoBackNotice />

      {/* 모달 */}
      <Modal className="2xl:min-w-[60rem] lg:min-w-[48rem] md:min-w-[40rem] w-[36rem]">
        <h1 className="2xl:text-[4.8rem] lg:text-[3.2rem] md:text-[2.4rem] text-[3rem] text-medium">
          Policy Confirmation
        </h1>
        <div className="flex flex-col lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem]">
          <div className="flex flex-row items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal ">
            <CheckBox
              checked={personalInfo?.termsOfUse ?? false}
              onChange={(checked) => setPersonalInfo({ termsOfUse: checked })}
            />

            <div className="flex flex-col gap-[0.8rem]">
              <span>
                Terms of Use: I agree to the Terms of Use.{" "}
                <span className="text-red-500">(required)</span>
              </span>
              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => window.open("/termsofuse", "_blank")}
              >
                View Details
              </span>
            </div>
          </div>

          <div className="flex flex-row items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
            <CheckBox
              checked={personalInfo?.personalData ?? false}
              onChange={(checked) => setPersonalInfo({ personalData: checked })}
            />
            <div className="flex flex-col gap-[0.8rem]">
              <span>
                Personal Data: We collect and use your data to create and
                operate your account.{" "}
                <span className="text-red-500">(required)</span>
              </span>

              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => window.open("/privacy#privacy-3", "_blank")}
              >
                View Details
              </span>
            </div>
          </div>

          <div className="flex flex-row items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
            <CheckBox
              checked={personalInfo?.thirdPartySharing ?? false}
              onChange={(checked) =>
                setPersonalInfo({ thirdPartySharing: checked })
              }
            />
            <div className="flex flex-col gap-[0.8rem]">
              <span>
                Third‑Party Sharing: We may share limited data with trusted
                partners. <span className="text-red-500">(required)</span>
              </span>

              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => window.open("/privacy#privacy-3", "_blank")}
              >
                View Details
              </span>
            </div>
          </div>

          <div className="flex flex-row items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
            <CheckBox
              checked={personalInfo?.crossBorderTransfer ?? false}
              onChange={(checked) =>
                setPersonalInfo({ crossBorderTransfer: checked })
              }
            />
            <div className="flex flex-col gap-[0.8rem]">
              <span>
                Cross‑Border Transfer: Your data may be stored in other
                countries. <span className="text-red-500">(required)</span>
              </span>

              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => window.open("/privacy#privacy-6", "_blank")}
              >
                View Details
              </span>
            </div>
          </div>

          <div className="flex flex-row items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
            <CheckBox
              checked={personalInfo?.marketing ?? false}
              onChange={(checked) => setPersonalInfo({ marketing: checked })}
            />

            <div className="flex flex-col gap-[0.8rem]">
              <span>
                Marketing: I agree to receive promotions via Email / Push / SMS.{" "}
                <span className="text-[#676767]">(optional)</span>
              </span>

              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => window.open("/privacy#privacy-9", "_blank")}
              >
                View Details
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;
