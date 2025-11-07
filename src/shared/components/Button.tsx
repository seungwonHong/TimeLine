"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ children, onClick, className, type, disabled }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-[var(--button-bg)] text-[var(--button-text)] 2xl:rounded-[1.6rem] lg:rounded-[1.2rem] rounded-[1rem] 2xl:px-[3.2rem] lg:px-[2.4rem] px-[1.6rem] 2xl:py-[1.2rem] lg:py-[0.8rem] py-[0.6rem] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
