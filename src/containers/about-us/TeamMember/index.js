import React from "react";
import Image from "next/image";

export default function ({ icon, name, description }) {
  return (
    <div className="lg:flex lg:px-40 lg:items-center gap-20">
      {/* <div className="mx-auto md:mx-0 basis-1/3">
        <Image
          src={icon}
          alt="icon"
          className="w-20 h-20 sm:w-32 sm:h-32 md:w-[250px] md:h-[250px]"
        />
      </div> */}
      <div className="text-white px-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{name}</h2>
        <p className="text-base md:text-xl">{description}</p>
      </div>
    </div>
  );
}
