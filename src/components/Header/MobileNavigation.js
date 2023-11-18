import {routes} from "./constant";
import Link from "next/link";
import React from "react";

const MobileNavigation = ({ open, setOpen }) => {
  // TODO: add redux for openBurger menu
  
  return(
    <div className={`${ open ? 'flex' : 'hidden' } flex-col text-white absolute left-0 top-0 h-screen z-100  w-full bg-black`}>
      <div className={`text-white p-8 flex justify-end`} onClick={ () => setOpen( false ) }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className={`flex flex-col gap-y-4 box-border items-center justify-center flex-1`}>
        {
          routes.map((route, index) => (
            <Link href={route.path} key={index} className="text-2xl" onClick={() => setOpen(false)}>{route.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default MobileNavigation;
