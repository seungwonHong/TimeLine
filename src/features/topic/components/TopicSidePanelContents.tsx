import React from "react";
import ProfileImageComponent from "@/shared/components/ProfileImageComponent";

const TopicSidePanelContents = () => {
  return (
    <>
      {/* Description */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">Description</h2>
        <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
          Google Developer Groups on Campus (GDGoC) is a global program
          supported by Google, designed specifically for university students who
          are passionate about technology, software development, and community
          building. Previously known as Google Developer Student Clubs (GDSC),
          the program was rebranded in 2024 to highlight its strong connection
          with the broader Google Developer Groups (GDG) network.
        </p>
      </div>

      {/* Joined */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">Joined</h2>
        <div className="grid grid-cols-2 gap-[0.4rem] mt-[1.2rem] text-[1.4rem] font-normal text-[#808080]">
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Members</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Managers</span>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Founder</h2>
        <div className="flex flex-row items-center gap-[1.2rem] mt-[1.2rem]">
          <ProfileImageComponent
            bgSize="w-[4rem] h-[4rem]"
            defaultProfileSize="w-[2.4rem] h-[2.4rem]"
          />
          <span className="2xl:text-[1.6rem] lg:text-[1.4rem] font-normal">
            hong.seung.won
          </span>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Links</h2>
        <div className="flex flex-col gap-[0.2rem] mt-[1.2rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              href={`https://www.google.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[1.4rem] font-normal text-[#808080] hover:text-primary-color transition-colors duration-300 ease-in-out"
            >
              instagram
            </a>
          ))}
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Tech Stacks</h2>
        <div className="flex flex-row items-center gap-[0.8rem] flex-wrap mt-[1.2rem]">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="text-[1.4rem] font-normal text-[#808080]"
            >
              # Next.js
            </span>
          ))}
        </div>
      </div>

      {/* Topic Philosophy */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">
          Topic Philosophy
        </h2>
        <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
          Google Developer Groups on Campus (GDGoC) is built on the belief that
          technology is about more than just coding—it is about empowering
          people, solving real problems, and growing together as a community. We
          learn with curiosity, build projects that create real impact, and
          share our knowledge so others can rise with us. Through this cycle of
          learning, building, and sharing, we grow not only as developers but
          also as leaders and innovators. GDGoC is more than a student club; it
          is a movement that shapes the future of technology and the people
          behind it.
        </p>
      </div>

      {/* Rules */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">
          Rules
        </h2>
        <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
          Google Developer Groups on Campus (GDGoC) is built on the belief that
          technology is about more than just coding—it is about empowering
          people, solving real problems, and growing together as a community. We
          learn with curiosity, build projects that create real impact, and
          share our knowledge so others can rise with us. Through this cycle of
          learning, building, and sharing, we grow not only as developers but
          also as leaders and innovators. GDGoC is more than a student club; it
          is a movement that shapes the future of technology and the people
          behind it.
        </p>
      </div>
    </>
  );
};

export default TopicSidePanelContents;
