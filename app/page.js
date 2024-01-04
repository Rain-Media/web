import { footerLinks } from "../src/constants/constant";
import Route from "../src/components/Footer/Route/Route";
import Image from "next/image";
import opera from "../src/assets/images/opera.png";
import HomeVideo from "../src/components/HomeVideo";
import SocialLinks from "../src/components/Shared/SocialLinks";

export default function Page() {
  const socialLinks = footerLinks.filter((item) =>
    item.name.includes("Sosyal")
  );

  return (
    <div className="bg-[#1c1c1c]">
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
          <Image src={opera} alt="opera" />
        </div>
        <div className="flex flex-col gap-y-8 justify-center">
          <h2 className="text-3xl lg:text-5xl text-white font-bold text-center lg:text-left">
            MEM U ZIN
          </h2>
          <p className="text-lg lg:text-2xl max-w-xl text-white text-center lg:text-left">
            "Epik Aşkın Dansı: Mem u Zin Operası "Tutkunun, Aşkın ve İsyanın
            Öyküsüne Hoş Geldiniz!"
          </p>
          <div className="flex justify-center lg:block">
            <button className="border border-[#828282] rounded-3xl py-3 text-white w-[150px] h-[41px] flex items-center justify-center hover:bg-white hover:text-[#1c1c1c] duration-300 transition-all">
              Daha Fazla...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
