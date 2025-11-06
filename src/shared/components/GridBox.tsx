import React from "react";

interface Props {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
  selected: boolean;
}

const GridBox = ({ icon, name, onClick, selected }: Props) => {
  return (
    <div
      className={`flex flex-col justify-between aspect-square w-full lg:rounded-[0.6rem] rounded-[0.4rem] ${
        selected
          ? "bg-[var(--color-primary-color)]"
          : "hover:bg-[var(--color-primary-color)] bg-[var(--color-grid-box-bg)]"
      }   cursor-pointer duration-300 ease-in-out lg:p-[0.8rem] p-[0.6rem]`}
      onClick={onClick}
    >
      {icon}
      <span className="lg:text-[1.6rem] text-[1.4rem] text-normal ml-auto">
        {name}
      </span>
    </div>
  );
};

export default GridBox;
