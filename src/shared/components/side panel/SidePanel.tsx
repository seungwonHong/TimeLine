import React from "react";
import { TrendingUp } from "lucide-react";
import Input from "../Input";
import TabButton from "../TabButton";
import SidePanelHeader from "./SidePanelHeader";
import TrendingComponent from "./TrendingComponent";
import TopicComponent from "../topic/TopicComponent";
import Link from "next/link";

interface Props {}

const SidePanel = (props: Props) => {
  return (
    <div className="sticky top-[5.6rem] xl:flex flex-col hidden 2xl:max-w-[48rem] lg:max-w-[40rem] w-full overflow-y-auto h-[calc(100vh-5.6rem)]">
      {/* 검색 */}
      <Input
        type="search"
        placeholder="Search"
        searchIconClassName="w-[2.4rem] h-[2.4rem] text-[var(--color-search-icon)] absolute top-1/2 -translate-y-1/2 left-[1.6rem]"
        inputClassName="w-full rounded-full h-[4.8rem] lg:text-[1.6rem] font-normal pl-[5rem] pr-[1.8rem]"
        wrapperClassName="w-full mb-[2rem]"
      />

      {/* 사이드 패널 - default */}
      <div className="flex flex-col w-full bg-side-panel-background 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] 2xl:p-[2.4rem] lg:p-[1rem] shadow-sm">
        {/* 포스트 생성 버튼 & 간단한 정보 */}
        <SidePanelHeader />

        {/* 포스트 & 토픽 전환 토글(탭 버튼) */}
        <TabButton tabs={["Posts", "Topics"]} type="home" />

        {/* 트렌딩 */}
        <div className="flex flex-col w-full mt-[4rem]">
          <div className="flex flex-row items-center gap-[1rem]">
            <TrendingUp className="w-[2.4rem] h-[2.4rem]" />
            <h2 className="text-[1.6rem] font-medium">Trending</h2>
          </div>

          <div className="flex flex-col gap-[0.4rem] mt-[1.2rem]">
            {Array.from({ length: 10 }).map((_, index) => (
              <TrendingComponent
                key={index}
                number={index + 1}
                content={`Trending ${index + 1}`}
                trendingNumber={100}
              />
            ))}
          </div>
        </div>

        {/* 내 토픽 */}
        <div className="flex flex-col">
          <h2 className="text-[1.6rem] font-medium mt-[4rem]">My Topics</h2>
          <div className="flex flex-col gap-[0.4rem] mt-[1.2rem]">
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                <TopicComponent />
                {index < 4 && (
                  <div className="my-[0.4rem] bg-divide-color w-full h-[0.5px]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 사이드 패널 - topic */}
      {/* 사이드 패널 - profile */}

      {/* Footer */}
      <div className="flex flex-col mt-[2rem] mb-[2rem] text-[1.4rem] text-[#808080]  transition-colors duration-300 ease-in-out font-normal gap-[0.4rem]">
        {/* 첫번째 줄 */}
        <div className="flex flex-row items-center gap-[1.6rem]">
          <Link href="/privacy" className="hover:text-foreground">
            <span>Privacy</span>
          </Link>
          <Link href="/termsofuse" className="hover:text-foreground">
            <span>Terms of Use</span>
          </Link>
          <Link href="/rules" className="hover:text-foreground">
            <span>Rules</span>
          </Link>
          <Link href="/updates" className="hover:text-foreground">
            <span>Updates</span>
          </Link>
        </div>
        {/* 두번째 줄 */}
        <div className="flex flex-row items-center gap-[1.6rem]">
          <Link href="/help" className="hover:text-foreground">
            <span>Help</span>
          </Link>
          <a href="https://x.com/TimeLine_io" className="hover:text-foreground">
            <span>X</span>
          </a>
          <a
            href="https://www.instagram.com/timeline_io.official"
            className="hover:text-foreground"
          >
            <span>Instagram</span>
          </a>
        </div>
        {/* 세번째 줄 */}
        <div className="flex flex-row items-center text-[1.2rem]">
          <span>© 2025 TimeLine. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
