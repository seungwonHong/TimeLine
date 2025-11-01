"use client";
import React, { useState } from "react";
import Input from "@/shared/components/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/Button";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormValues) => {
    if (!isValid) return;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        error={errors.email?.message}
        label="Email"
        type="email"
        placeholder="Enter your email"
        inputClassName="lg:rounded-[6px] rounded-[4px] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem]  2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
        labelClassName="text-[var(--color-input-label)] 2xl:text-[2rem] lg:text-[1.6rem] text-[1.4rem] text-normal "
        wrapperClassName="2xl:mt-[4.8rem] lg:mt-[3.2rem] mt-[2.4rem] 2xl:w-[48rem] lg:w-[36rem] w-[32rem] gap-[0.8rem]"
      />
      <Input
        {...register("password")}
        error={errors.password?.message}
        label="Password"
        type="password"
        placeholder="Enter your password"
        inputClassName="lg:rounded-[6px] rounded-[4px] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] text-[1.4rem] px-[0.8rem] 2xl:text-[1.6rem] text-[1.4rem]"
        labelClassName="text-[var(--color-input-label)] 2xl:text-[2rem] lg:text-[1.6rem] text-[1.4rem] text-normal "
        wrapperClassName="2xl:mt-[2.4rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[2rem] 2xl:w-[48rem] lg:w-[36rem] w-[32rem] gap-[0.8rem]"
      />

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="w-full 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[4rem] flex items-center justify-center 2xl:rounded-[8px] lg:rounded-[6px] rounded-[4px] 2xl:text-[1.6rem] text-[1.4rem] hover:bg-[var(--button-hover)] duration-300 ease-in-out"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginComponent;
