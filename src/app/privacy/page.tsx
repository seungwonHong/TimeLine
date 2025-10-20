'use client'
import React from "react";
import FooterHeader from "@/features/landing/components/FooterHeader";
import Footer from "@/features/landing/components/Footer";
import Navigation from "@/features/landing/components/Navigation";
import Link from "next/link";
import "@/features/landing/styles/footer.css";

const Privacy = () => {
  const ids = [
    "privacy-1",
    "privacy-2",
    "privacy-3",
    "privacy-4",
    "privacy-5",
    "privacy-6",
    "privacy-7",
    "privacy-8",
    "privacy-9",
  ];
  const handleNavClick = (index: number) => {
    const id = ids[index];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]">
        <FooterHeader />

        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[2.4rem] font-normal">
            Privacy Policy
          </h1>
          <h2 className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] font-normal text-center 2xl:w-[120rem] lg:w-[80rem] md:w-[64rem] w-[36rem] mx-auto">
            TimeLine protects your personal data. This policy clearly explains
            how we collect, use, store, delete, and safeguard your information,
            and outlines your rights.
          </h2>

          <div className="w-full flex flex-row items-start justify-between 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:px-[10rem] lg:px-[6rem] px-[3rem] min-h-screen">
            <Navigation
              navigationText={[
                "Privacy Policy Intro",
                "Data Collection",
                "Data Use",
                "Data Storage",
                "Data Transfers",
                "Data Deletion",
                "Data Security",
                "Children",
                "Your Rights and Choices",
              ]}
              onItemClick={handleNavClick}
            />

            <div className="flex flex-col 2xl:w-[80rem] lg:w-[64rem] md:w-[48rem] w-[32rem] 2xl:mr-[10rem] lg:mr-[6rem]">
              {/* Privacy Policy Intro */}
              <div id="privacy-1" className="flex flex-col">
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.4rem] text-[1.8rem] text-normal">
                  Privacy Policy Intro
                </h3>
                <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] font-normal">
                  At TimeLine, we take your privacy seriously and built our
                  platform with privacy in mind. This Privacy Policy explains
                  how we handle personal data. By using or accessing TimeLine,
                  you agree to the practices and policies described below and
                  allow us to collect, use, and share your information as
                  outlined in this Policy. This Privacy Policy applies to your
                  use of TimeLine and is incorporated into TimeLine’s{" "}
                  <Link href="/termsofuse" className="text-[#6299FF]">
                    Terms of Use
                  </Link>
                  . Any capitalized terms not defined here have the meanings
                  given in the Terms of Use. We collect only what’s necessary to
                  run the service: cookies to keep your login session active,
                  and data used to provide personalized ads. We use cookies and
                  similar technologies for authentication and session
                  continuity, and we process limited ad-related data (like
                  interactions and standard device information) to make ads more
                  relevant. We don’t sell personal information, and we share
                  data only with service providers who help us operate TimeLine
                  under strict safeguards. We’re always improving TimeLine, so
                  this Policy may change from time to time. If we make material
                  changes, we’ll notify you by posting a notice in the app or on
                  our website and/or sending an email. By continuing to use
                  TimeLine after changes are posted, you agree to the updated
                  Policy.
                </span>
              </div>

              {/* Data Collection */}
              <div id="privacy-2" className="flex flex-col lg:mt-[10rem] mt-[8rem]">
                <h3 className="2xl:text-[4rem] lg:text-[3.2rem] md:text-[2.4rem] text-[1.8rem] text-normal">
                  Data Collection
                </h3>
                <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] font-normal">
                  At TimeLine, we take your privacy seriously and built our
                  platform with privacy in mind. This Privacy Policy explains
                  how we handle personal data. By using or accessing TimeLine,
                  you agree to the practices and policies described below and
                  allow us to collect, use, and share your information as
                  outlined in this Policy. This Privacy Policy applies to your
                  use of TimeLine and is incorporated into TimeLine’s{" "}
                  <Link href="/termsofuse" className="text-[#6299FF]">
                    Terms of Use
                  </Link>
                  . Any capitalized terms not defined here have the meanings
                  given in the Terms of Use. We collect only what’s necessary to
                  run the service: cookies to keep your login session active,
                  and data used to provide personalized ads. We use cookies and
                  similar technologies for authentication and session
                  continuity, and we process limited ad-related data (like
                  interactions and standard device information) to make ads more
                  relevant. We don’t sell personal information, and we share
                  data only with service providers who help us operate TimeLine
                  under strict safeguards. We’re always improving TimeLine, so
                  this Policy may change from time to time. If we make material
                  changes, we’ll notify you by posting a notice in the app or on
                  our website and/or sending an email. By continuing to use
                  TimeLine after changes are posted, you agree to the updated
                  Policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
