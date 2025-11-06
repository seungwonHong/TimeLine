import React from "react";
import { Check } from "lucide-react";

interface Props {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange }: Props) => {
  return (
    <div
      className={`flex flex-row shrink-0 items-center justify-center lg:rounded-[0.4rem] rounded-[0.2rem] lg:h-[2rem] h-[1.6rem] lg:w-[2rem] w-[1.6rem] cursor-pointer ${
        checked ? "bg-[#3DD42C]" : "bg-[var(--color-input-bg)]"
      }`}
      onClick={() => onChange?.(!checked)}
    >
      {checked && (
        <Check className="lg:h-[1.6rem] h-[1.2rem] lg:w-[1.6rem] w-[1.2rem] text-white" />
      )}
    </div>
  );
};

export default CheckBox;
