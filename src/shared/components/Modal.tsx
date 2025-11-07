"use client";
import React from "react";
import useModalStore from "../store/modalStore";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  const { isOpen, setIsOpen } = useModalStore();

  if (!isOpen) return null;

  return(
    <div
      className={`z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 2xl:p-[2rem] lg:p-[1.6rem] md:p-[1.2rem] p-[1rem] flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.2)] bg-[var(--color-modal-background)] rounded-[0.8rem] ${
        className || ""
      }`}
    >
      <X className="2xl:w-10 2xl:h-10 lg:w-8 lg:h-8 md:w-6 md:h-6 w-8 h-8 cursor-pointer ml-auto" onClick={() => setIsOpen(false)} />
      {children}
    </div>
  );
};

export default Modal;
