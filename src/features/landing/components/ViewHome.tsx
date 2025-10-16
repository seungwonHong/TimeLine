import React from "react";
import "@/shared/styles/gradient-shadow.css";

const ViewHome = () => {
  return (
    <div className="w-fit mx-auto 2xl:mt-[12rem] lg:mt-[10rem] mt-[6rem] gradient-shadow">
      <img
        src="/images/ViewHomeDark.png"
        alt="ViewHome Dark"
        className="2xl:w-[160rem] 2xl:h-[103rem] lg:w-[120rem] lg:h-[80rem] md:w-[72rem] md:h-[46rem] w-[34rem] h-[20rem] mx-auto dark:block hidden"
      />{" "}
      <img
        src="/images/ViewHomeLight.png"
        alt="ViewHome Light"
        className="2xl:w-[160rem] 2xl:h-[103rem] lg:w-[120rem] lg:h-[80rem] md:w-[72rem] md:h-[46rem] w-[34rem] h-[20rem] mx-auto dark:hidden block"
      />
    </div>
  );
};

export default ViewHome;
