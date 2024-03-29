"use client";
import React, { useState } from "react";
import mail from "../../src/assets/images/mail.svg";
import location from "../../src/assets/images/location.svg";
import phone from "../../src/assets/images/phone.svg";
import Image from "next/image";
import SocialLinks from "../../src/components/Shared/SocialLinks";

Page.propTypes = {};

function Page(props) {
  const [formValidation, setFormValidation] = useState({
    nameInput: "",
    mailInput: "",
    descriptionInput: "",
    nameCheck: false,
    emailCheck: false,
    descriptionCheck: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isButtonDisabled = !(
    formValidation.nameInput.length > 0 &&
    emailRegex.test(formValidation.mailInput) &&
    formValidation.descriptionInput.length > 0
  );

  const handleBlur = (field) => {
    switch (field) {
      case "name":
        setFormValidation({
          ...formValidation,
          nameCheck: !formValidation.nameInput.length > 0,
        });
        break;
      case "email":
        setFormValidation({
          ...formValidation,
          emailCheck: !emailRegex.test(formValidation.mailInput),
        });
        break;
      case "description":
        setFormValidation({
          ...formValidation,
          descriptionCheck: !formValidation.descriptionInput.length > 0,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-[#1C1C1C] min-h-screen relative">
      <div className="relative z-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.7257189082102!2d28.98617898367439!3d41.030337776075136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab762c1c857b3%3A0x98b82171a81b2598!2zUMO8cnRlbGHFnyBIYXNhbiBFZmVuZGksIFN1c2FtIFNrLiBObzoyOCBEOjIsIDM0NDI3IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1706739313579!5m2!1str!2str"
          className="w-full h-96 md:h-[550px]"
        ></iframe>
      </div>
      <div className="flex flex-col-reverse items-center lg:flex-row justify-center gap-20 lg:gap-40 py-28 md:py-40">
        <div className="absolute top-0 right-0 h-[600px] w-full lg:w-[400px] xl:w-[500px] 2xl:w-[600px] lg:h-screen bg-[#FFDD00]"></div>
        <div className="mb-16 lg:mb-0 w-full md:w-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl mb-20 text-white text-center md:text-left">
            Bize Ulaşın
          </div>
          <form className="" action="">
            <div className="mb-10">
              <input
                className="bg-transparent border-b block w-full md:w-96 focus:outline-none text-white"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Adınız - Soyadınız"
                onChange={(e) => {
                  setFormValidation({
                    ...formValidation,
                    nameInput: e.target.value.trim(),
                  });
                }}
                onBlur={() => handleBlur("name")}
              />
              {formValidation.nameCheck && (
                <div className="text-red-500 text-sm">
                  Bu alanı boş bırakmayınız!
                </div>
              )}
            </div>
            <div className="mb-10">
              <input
                className="bg-transparent border-b block w-full md:w-96 focus:outline-none text-white"
                type="text"
                id="mail"
                name="mail"
                required
                placeholder="Mail Adresiniz"
                onChange={(e) => {
                  setFormValidation({
                    ...formValidation,
                    mailInput: e.target.value.trim(),
                  });
                }}
                onBlur={() => handleBlur("email")}
              />
              {formValidation.emailCheck && (
                <div className="text-red-500 text-sm">
                  Bu alanı boş bırakmayınız veya geçerli bir mail adresi
                  giriniz!
                </div>
              )}
            </div>
            <div className="mb-10">
              <input
                className="bg-transparent border-b block w-full md:w-96 focus:outline-none text-white"
                type="text"
                id="message"
                name="message"
                required
                placeholder="Mesajınız"
                onChange={(e) => {
                  setFormValidation({
                    ...formValidation,
                    descriptionInput: e.target.value.trim(),
                  });
                }}
                onBlur={() => handleBlur("description")}
              />
              {formValidation.descriptionCheck && (
                <div className="text-red-500 text-sm">
                  Bu alanı boş bırakmayınız!
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className="border border-[#828282] rounded-full py-1.5 px-10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer disabled:bg-gray-500 disabled:text-white"
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
                  <Image src={mail} width={32} height={32} alt="mail" />
                </div>
                <a href="mailto:info@rainmedia.org" className="font-light">
                  info@rainmedia.org
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Image src={location} width={32} height={32} alt="location" />
                </div>
                <div className="font-light">
                  Susam sok 28/2 Cihangir/İstanbul
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <Image src={phone} width={32} height={32} alt="phone" />
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
