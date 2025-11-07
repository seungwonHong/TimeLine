"use client";
import { useEffect } from "react";

const GoBackNotice = () => {
  useEffect(() => {
    const onPopState = () => {
      // 뒤로가기를 일단 취소하고 모달 노출
      history.pushState(null, "", location.href);
      const ok = window.confirm(
        "Are you sure you want to go back to the previous page?"
      );
      if (ok) {
        // 실제 뒤로가기 실행
        window.removeEventListener("popstate", onPopState);
        location.href = "/login";
      }
      // 취소 시 아무것도 안 함(현재 페이지에 머무름)
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
};

export default GoBackNotice;
