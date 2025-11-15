import React from "react";
import Post from "@/shared/components/post components/Post";
import SidePanel from "@/shared/components/side panel/SidePanel";
import MobilePostButton from "@/features/main/components/MobilePostButton";

const PostDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 포스트 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem] z-[110]">
          <div className="flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* 포스트 */}
            <Post id={id} />

            {/* 댓글 입력 */}
          </div>

          {/* 사이드 패널 */}
          <SidePanel />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />
    </div>
  );
};

export default PostDetail;
