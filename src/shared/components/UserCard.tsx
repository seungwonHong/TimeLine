import React, { useState } from "react";
import Button from "./Button";

interface Props {
  className?: string;
  profileImage?: string;
  profileImageClassName?: string;
  name: string;
  nameClassName?: string;
  followers: number;
  followersClassName?: string;
  subscribers: number;
  subscribersClassName?: string;
}

const UserCard = ({
  className,
  profileImage,
  name,
  followers,
  subscribers,
  profileImageClassName,
  nameClassName,
  followersClassName,
  subscribersClassName,
}: Props) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div
      className={`flex flex-row items-center w-full 2xl:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[0.4rem] lg:p-[0.8rem] p-[0.6rem] [&:has(button:hover)]:bg-transparent hover:bg-[var(--color-user-card-bg)] duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt="profileImage"
          className={`rounded-full ${profileImageClassName}`}
        />
      ) : (
        <div
          className={`rounded-full bg-gray-200 ${profileImageClassName}`}
        ></div>
      )}

      <div className="flex flex-col lg:ml-[1.6rem] ml-[1.2rem]">
        <span className={`${nameClassName}`}>{name}</span>
        <div className="flex flex-row lg:gap-[1.6rem] gap-[0.8rem]">
          {" "}
          <span className={`${followersClassName}`}>
            followers - {followers}
          </span>
          <span className={`${subscribersClassName}`}>
            subscribers - {subscribers}
          </span>
        </div>
      </div>

      <Button
        className={`ml-auto 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal lg:!rounded-[0.8rem] !rounded-[0.6rem] cursor-pointer ${
          isFollowing
            ? "bg-transparent text-[var(--color-button-bg)] border border-[#848383]"
            : "hover:bg-[var(--color-button-hover)] duration-300 ease-in-out"
        }`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </div>
  );
};

export default UserCard;
