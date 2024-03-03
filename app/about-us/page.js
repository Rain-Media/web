import React from "react";
import film from "/src/assets/images/ph_film-slate.svg";
import TeamMember from "../../src/containers/about-us/TeamMember";
import { teamMembers } from "../../src/constants/constant";
import Image from "next/image";
import aboutUsHeadingImage from "../../src/assets/images/about-us-heading-image.png";
import AboutUsSlider from "../../src/containers/about-us/AboutUsSlider";
import { aboutUsTextContent } from "../../src/constants/constant";

function Page(props) {
  return (
    <div className="bg-white pb-5 md:pb-10">
      <div className="relative w-full h-[609px] flex items-center justify-center">
        <Image
          className="object-cover brightness-90"
          src={aboutUsHeadingImage}
          fill={true}
          alt="about us heading image"
        />
        <div className="relative z-10 text-center text-white px-2">
          {/* <h2 className="font-bold text-5xl mb-6 md:mb-10">
            {aboutUsTextContent[0].heading}
          </h2> */}
          <p className="max-w-[673px] md:text-xl mb-4">
            {aboutUsTextContent[0].description}
          </p>
          <p className="max-w-[673px] md:text-xl">
            {aboutUsTextContent[0].description2}
          </p>
        </div>
      </div>
      <div className="py-10 md:py-20 px-5 space-y-14 md:space-y-20">
        {teamMembers.map((item, index) => (
          <TeamMember
            key={index}
            icon={film}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      {/* <AboutUsSlider /> */}
    </div>
  );
}

export default Page;
