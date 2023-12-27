import React from "react";
import film from "/src/assets/images/ph_film-slate.svg";
import TeamMember from "../../src/pages/about-us/TeamMember";
import { teamMembers } from "../../src/constants/constant";
import Image from "next/image";
import aboutUsHeadingImage from "../../src/assets/images/about-us-heading-image.png";

function Page(props) {
  return (
    <div className="">
      <div className="relative w-full h-[609px] flex items-center justify-center">
        <Image className="object-cover" src={aboutUsHeadingImage} fill={true} />
        <div className="relative z-10 text-center text-white">
          <h2 className="font-bold text-5xl mb-10">Rain Media</h2>
          <p className="max-w-[673px] text-xl">
            Rain Media, sanatın büyüsünü seyircilerine taşıma misyonuyla yola
            çıkan; farkını yaratıcılık, tutku ve cesaret ile sergileyen, her
            projede sıradanın ötesine geçmeyi hedefleyen, izleyicilerine farklı
            ve akılda kalıcı deneyimler sunmak için yenilikçi yaklaşımlar
            benimseyen genç ve dinamik bir medya şirketidir.
          </p>
        </div>
      </div>
      <div className="bg-[#1C1C1C] py-20 px-5">
        {teamMembers.map((item, index) => (
          <TeamMember
            key={index}
            icon={film}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
