"use client";
import React, { useEffect } from "react";
import Input from "@/shared/components/Input";
import { CornerUpRight } from "lucide-react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStepStore from "@/features/signup/store/step";
import { ArrowLeft } from "lucide-react";
import { Trash2 } from "lucide-react";

const personalInfoSchema = z.object({
  status: z.string().optional(),
  introduction: z.string().nonempty({ message: "Introduction is required" }),
  links: z.array(z.string().trim()).default([""]),
  techStacks: z.array(z.string().trim()).default([""]),
});

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

interface Props {
  className?: string;
}

const IntroduceYourself = ({ className }: Props) => {
  const { setStepNumber, introduceYourself, setIntroduceYourself } =
    useStepStore();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange",
    defaultValues: {
      links: [""],
      techStacks: [""],
    },
  });

  const links = watch("links") ?? [""];
  const techStacks = watch("techStacks") ?? [""];

  const handleAddLink = () => {
    setValue("links", [...links, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleAddTechStack = () => {
    setValue("techStacks", [...techStacks, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setValue("links", newLinks.length > 0 ? newLinks : [""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveTechStack = (index: number) => {
    const newTechStacks = techStacks.filter((_, i) => i !== index);
    setValue("techStacks", newTechStacks.length > 0 ? newTechStacks : [""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit = (data: PersonalInfoFormValues) => {
    if (!isValid) return;
    if (!introduceYourself) return;
    setIntroduceYourself({
      status: data.status,
      introduction: data.introduction,
      links: data.links,
      techStacks: data.techStacks,
    });
    setStepNumber(4);
    console.log(data);
  };

  // 스토어 값이 있으면 폼을 업데이트
  useEffect(() => {
    if (introduceYourself) {
      reset({
        status: introduceYourself.status,
        introduction: introduceYourself.introduction,
        links: introduceYourself.links?.length ? introduceYourself.links : [""],
        techStacks: introduceYourself.techStacks?.length
          ? introduceYourself.techStacks
          : [""],
      });
    }
  }, []);

  return (
    <div
      className={`flex flex-col h-full md:overflow-y-auto p-0 md:py-[3.2rem] 2xl:w-[48rem] lg:w-[40rem] md:w-[32rem] w-[32rem] ${className}`}
    >
      <div className="flex items-center justify-center mr-auto 2xl:rounded-[0.6rem] lg:rounded-[0.4rem] rounded-[0.2rem] hover:bg-[var(--color-input-bg)] duration-300 ease-in-out cursor-pointer px-[0.8rem] py-[0.8rem]">
        <ArrowLeft
          className="2xl:w-[2.4rem] lg:w-[2rem] md:w-[1.6rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] md:h-[1.6rem] h-[2rem]"
          onClick={() => setStepNumber(2)}
        />
      </div>

      <h1 className="2xl:text-[6.4rem] lg:text-[4rem] md:text-[3.2rem] text-[3.2rem] text-medium 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:w-[52rem] lg:w-[40rem] md:w-[32rem] w-[32rem]">
        How would you describe yourself?
      </h1>

      <h2 className="text-[#676767] 2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.4rem] text-normal 2xl:mt-[5.6rem] lg:mt-[4.8rem] md:mt-[4rem] mt-[3.2rem]">
        Describe and introduce yourself
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[2rem] lg:gap-[1.6rem] md:gap-[1.2rem] gap-[1.2rem]">
          <Input
            {...register("status")}
            placeholder="Describe your status"
            label="Status"
            type="text"
            error={errors.status?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
          />
          <Input
            {...register("introduction")}
            placeholder="Introduce yourself"
            label="Introduction"
            type="textarea"
            error={errors.introduction?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:text-[1.6rem] text-[1.4rem] p-[0.8rem]"
          />

          {/* 링크 */}
          {links.map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-row items-center gap-[0.8rem]"
            >
              <Input
                {...register(`links.${index}`)}
                placeholder="Add your link"
                label={index === 0 ? "Link" : undefined}
                type="text"
                add={index === 0 ? true : false}
                addHandler={handleAddLink}
                error={errors.links?.[index]?.message}
                wrapperClassName={`gap-[0.8rem] w-full ${
                  index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                }`}
                labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
                inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
              />
              {index > 0 && (
                <Trash2
                  className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                  onClick={() => handleRemoveLink(index)}
                />
              )}
            </div>
          ))}

          {/* 테크 스택 */}
          {techStacks.map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-row items-center gap-[0.8rem]"
            >
              <Input
                {...register(`techStacks.${index}`)}
                label={index === 0 ? "Tech Stack" : undefined}
                type="text"
                add={index === 0 ? true : false}
                addHandler={handleAddTechStack}
                placeholder="Add your tech stack"
                error={errors.techStacks?.[index]?.message}
                wrapperClassName={`gap-[0.8rem] w-full ${
                  index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                }`}
                labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
                inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
              />
              {index > 0 && (
                <Trash2
                  className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                  onClick={() => handleRemoveTechStack(index)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-[1.6rem] 2xl:mt-[4rem] lg:mt-[3.2rem] md:mt-[2.4rem] mt-[3.2rem]">
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="self-start flex flex-row items-center gap-[0.8rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal lg:rounded-[0.8rem] rounded-[0.6rem] hover:bg-[var(--color-button-hover)] duration-300 ease-in-out"
          >
            Continue
            <CornerUpRight className="w-6 h-6" />
          </Button>

          <Button
            onClick={() => setStepNumber(4)}
            className="self-start flex flex-row items-center gap-[0.8rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal text-[var(--color-button-bg)] lg:rounded-[0.8rem] rounded-[0.6rem] bg-transparent"
          >
            Skip
          </Button>
        </div>
      </form>

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

export default IntroduceYourself;
