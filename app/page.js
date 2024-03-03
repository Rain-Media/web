import { footerLinks } from "../src/constants/constant";
import Route from "../src/components/Footer/Route/Route";
import Image from "next/image";
import opera from "../src/assets/images/opera.png";
import operaNew from "../src/assets/images/opera-new.png";
import HomeVideo from "../src/components/HomeVideo";
import SocialLinks from "../src/components/Shared/SocialLinks";
import Link from "next/link";

export default function Page() {
  const socialLinks = footerLinks.filter((item) =>
    item.name.includes("Sosyal")
  );

  return (
    <div className="bg-white">
      <HomeVideo />
      <div className="mt-10">
        <SocialLinks />
      </div>
      <div className="w-full flex justify-center py-6">
        {socialLinks.map((item, index) => {
          return (
            <div className="flex flex-col gap-y-6 text-white" key={index}>
              <div className={`flex gap-y-2 gap-x-2.5`}>
                {item.links.map((item, index) => (
                  <Route key={index} url={item.to} name={item.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row sm:gap-x-20 gap-y-2 justify-center items-center p-10 lg:p-20">
        <div className="">
          <Image
            className="rounded-md"
            src={operaNew}
            width={398}
            height={535}
            alt="opera"
          />
        </div>
        <div className="flex flex-col gap-y-8 justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left uppercase">
            Mem û Zîn Operası
          </h2>
          <p className="text-lg lg:text-2xl max-w-xl text-center lg:text-left">
            Mem û Zin Operası ile Tutku ve İsyanın Epik Aşk Yolculuğuna Hoş Geldiniz!
          </p>
          <div className="flex justify-center lg:block">
            
            <Link href="/projects" className="border border-[#828282] rounded-3xl py-3 w-[150px] h-[41px] flex items-center justify-center hover:bg-white hover:text-[#1c1c1c] duration-300 transition-all">
              Daha Fazla...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
