import React from "react";
import mail from "../../src/assets/images/mail.svg";
import location from "../../src/assets/images/location.svg";
import phone from "../../src/assets/images/phone.svg";
import Image from "next/image";
import SocialLinks from "../../src/components/Shared/SocialLinks";

Page.propTypes = {};

function Page(props) {
  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      <div className="flex flex-col-reverse items-center lg:flex-row justify-center gap-20 lg:gap-40 pt-16 md:pt-24 lg:pt-40 relative px-3">
        <div className="absolute top-0 right-0 h-[300px] w-full lg:w-[400px] xl:w-[500px] 2xl:w-[600px] lg:h-screen bg-[#FFDD00]"></div>
        <div className="mb-16 lg:mb-0 w-full md:w-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl mb-20 text-white text-center md:text-left">
            Bize Ulaşın
          </div>
          <form className="" action="">
            <input
              className="bg-transparent border-b block mb-10 w-full md:w-96"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Adınız - Soyadınız"
            />
            <input
              className="bg-transparent border-b block mb-10 w-full md:w-96"
              type="text"
              id="mail"
              name="mail"
              required
              placeholder="Mail Adresiniz"
            />
            <input
              className="bg-transparent border-b block mb-10 w-full md:w-96"
              type="text"
              id="message"
              name="message"
              required
              placeholder="Mesajınız"
            />
            <button
              type="submit"
              className="border border-[#828282] rounded-full py-1.5 px-10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Gönder
            </button>
          </form>
        </div>
        <div className="relative z-10">
          <div className="w-full h-[300px] sm:h-[370px] md:w-[491px] md:h-[379px] bg-white p-7 sm:p-14 md:p-0 md:pt-5 relative group">
            <div className="w-12 h-12 absolute bg-[#1C1C1C] lg:bg-[#FFDD00] -left-3 -top-3 sm:-left-5 sm:-top-5 group-hover:rotate-45 transition-all duration-300"></div>
            <div className="text-2xl text-black text-center font-medium mb-5 md:mb-10">
              İletişim
            </div>
            <div className="space-y-3 mb-5 md:pl-32">
              <div className="flex gap-3 items-center">
                <div>
                  <Image src={mail} width={32} height={32} />
                </div>
                <a href="mailto:info@rainmedia.org" className="font-light">
                  info@rainmedia.org
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Image src={location} width={32} height={32} />
                </div>
                <div className="font-light">
                  Susam sok 28/2 Cihangir/İstanbul
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Image src={phone} width={32} height={32} />
                </div>
                <a href="tel:+902128432875" className="font-light">
                  +90 212 843 28 75
                </a>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
