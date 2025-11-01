"use client";
import React, { useState, forwardRef } from "react";
import { TriangleAlert } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({
  label,
  type,
  placeholder,
  inputClassName,
  labelClassName,
  wrapperClassName,
  error,
  ...rest
}, ref) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <div className={`${wrapperClassName} flex flex-col`}>
      {label && (
        <label htmlFor={label} className={`${labelClassName}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          className={`bg-[var(--color-input-bg)] border-none outline-none ${inputClassName}`}
          id={label}
          {...rest}
        />
        {type === "password" &&
          (viewPassword === false ? (
            <Eye
              className="absolute right-[1.6rem] top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => (setViewPassword(true), setInputType("text"))}
            />
          ) : (
            <EyeOff
              className="absolute right-[1.6rem] top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => (setViewPassword(false), setInputType("password"))}
            />
          ))}
      </div>
      {error && (
        <div className="flex flex-row items-center gap-[0.4rem]">
          <TriangleAlert className="2xl:w-[1.6rem] lg:w-[1.2rem] w-[1rem] 2xl:h-[1.6rem] lg:h-[1.2rem] h-[1rem] text-red-500" />
          <span className="text-red-500 2xl:text-[1.4rem] lg:text-[1.2rem] text-[1rem] text-normal">
            {error}
          </span>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
