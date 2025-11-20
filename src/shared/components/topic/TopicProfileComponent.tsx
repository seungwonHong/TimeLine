import React from "react";
import { User } from "lucide-react";

type Props = {};

const TopicProfileComponent = (props: Props) => {
  return (
    <div className="flex flex-row items-center ">
      <div className="flex flex-row items-center w-fit">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className={`shrink-0 flex items-center justify-center rounded-full md:w-[3.2rem] md:h-[3.2rem] w-[2.8rem] h-[2.8rem] bg-[var(--color-topic-profile-bg)] ${
              index > 0 ? "-ml-[0.8rem]" : ""
            } z-[${index + 1}]`}
            key={index}
          >
            <User
              className="w-[2.4rem] h-[2.4rem] text-[var(--color-topic-profile-text)]"
              strokeWidth={1.5}
            />
          </div>
        ))}
        <span className="md:text-[1.4rem] text-[1.2rem] font-normal ml-[0.8rem]">+ 124</span>
      </div>
    </div>
  );
};

export default TopicProfileComponent;
