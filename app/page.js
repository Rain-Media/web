import {footerLinks} from "../src/constants/constant";
import Route from "../src/components/Footer/Route/Route";
import Image from "next/image";
import opera from "../src/assets/images/opera.png";

export default function Page() {
  const socialLinks = footerLinks.filter(item => item.name.includes('Sosyal'));
  
  return (
    <div className="bg-[#1c1c1c]">
      <div className="w-full flex justify-center py-6">
        {
          socialLinks.map((item, index) => {
            return (
                <div className="flex flex-col gap-y-6 text-white" key={index}>
                  <div className={`flex gap-y-2 gap-x-2.5`}>
                    {
                      item.links.map((item, index) => <Route key={index} url={item.to} name={item.name} /> )
                    }
                  </div>
                </div>
              )
          })
        }
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-x-20 gap-y-2">
        <div className="p-5 sm:p-20">
          <Image src={opera}/>
        </div>
        <div className="flex flex-col gap-y-8 p-5 sm:p-20 justify-center">
          <h2 className="text-2xl sm:text-[48px] text-white">MEM U ZIN</h2>
          <p className="text-sm sm:text-[24px] max-w-xl text-white">
            "Epik Aşkın Dansı: Mem u Zin Operası "Tutkunun, Aşkın ve İsyanın Öyküsüne Hoş Geldiniz!"
          </p>
          <button className="border border-[#828282] rounded-3xl py-3 text-white w-[150px]">Daha Fazla...</button>
        </div>
      </div>
    </div>
  )
}
