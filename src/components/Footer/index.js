import React from "react";
import { footerLinks } from "/src/constants/constant";
import Route from "./Route/Route";
import logo from "../../assets/images/oooo.png";
import Image from "next/image";
import SocialLinks from "../Shared/SocialLinks";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#141414]">
      <div className="flex flex-col lg:flex-row 2xl:justify-between gap-y-8 sm:gap-x-52 px-5 sm:px-20 2xl:pr-96 pt-10 pb-24">
        <div>
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="rain logo" />
          </Link>
          <h1 className="text-white text-2xl lg:text-3xl font-bold">
            Rain Media
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-32 divide-y sm:divide-y-0 divide-slate-400/40 gap-y-5">
          {footerLinks.map((item, index) => {
            return (
              <div className="flex flex-col gap-y-6 text-white" key={index}>
                <h2 className="mt-3 text-xl md:text-2xl font-semibold">
                  {item.name}
                </h2>
                <div className={`flex flex-col gap-y-2 gap-x-2.5 font-light`}>
                  {item.links.map((item, index) => (
                    <Route key={index} url={item.to} name={item.name} />
                  ))}
                </div>
              </div>
            );
          })}
          <div>
            <h2 className="text-white mt-3 mb-6 text-xl md:text-2xl font-semibold">
              Sosyal Medya
            </h2>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="text-white text-xs text-center pb-5 opacity-60">
        © 2023 Rain Media Designed by Maide Nur Girgin
      </div>
    </div>
  );
}

export default Footer;
