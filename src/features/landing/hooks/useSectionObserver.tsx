import React, { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface Props {
  isManualScroll: RefObject<boolean>;
  setClicked: Dispatch<SetStateAction<number>>;
  sections: string[];
}

export const useSectionObserver = ({ isManualScroll, setClicked, sections }: Props) => {
  useEffect(() => {
    const getRootMargin = () => {
      if (window.innerWidth >= 1536) return "-80px 0px 0px 0px"; // 2xl
      if (window.innerWidth >= 1024) return "-60px 0px 0px 0px"; // lg
      if (window.innerWidth >= 768) return "-40px 0px 0px 0px"; // md
      return "-30px 0px 0px 0px"; // 기본
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const sectionNumber = parseInt(sectionId.split("-")[1]);
            setClicked(sectionNumber);
          }
        });
      },
      {
        threshold: 0.3, // 50% 보일 때 트리거
        rootMargin: getRootMargin(), // 헤더 높이만큼 오프셋
      }
    );

    // 각 섹션 관찰 시작
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
};
