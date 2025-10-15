import React, { useEffect, useState } from "react";

export const useDetectDark = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(mediaQuery.matches);

    // 초기값 설정
    update();

    // 변경 이벤트 구독
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return {
    isDark,
  };
};