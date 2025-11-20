import { User } from "lucide-react";
import React from "react";

interface Props {
  bgSize: string;
  defaultProfileSize: string;
  image?: string;
  onClick?: () => void;
}

const ProfileImageComponent = ({
  bgSize,
  defaultProfileSize,
  image,
  onClick,
}: Props) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-header-profile-bg cursor-pointer ${bgSize}`}
      onClick={onClick}
    >
      <User
        className={`fill-[var(--color-profile-default-icon-bg)] ${defaultProfileSize}`}
        strokeWidth={0}
      />
    </div>
  );
};

export default ProfileImageComponent;
