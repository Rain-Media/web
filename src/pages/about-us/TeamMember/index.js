import React from 'react';
import Image from "next/image";

export default function ({icon, name, description}) {
  return (
    <div className="md:flex md:px-40 md:justify-center md:items-center">
      <div className="mx-auto md:mx-0 w-1/2">
        <Image src={icon} alt="icon" className="w-[250px] h-[250px]"/>
      </div>
      <div className="text-white text-center py-4 px-2">
        <h2 className="text-[32px] sm:text-[36px] font-bold my-2">{name}</h2>
        <p className="text-[20px] font-normal">{description}</p>
      </div>
    </div>
  );
}
