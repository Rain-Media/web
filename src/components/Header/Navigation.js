"use client"

import React from 'react';
import Link from "next/link";
import {routes} from "./constant";
import {useWindowSize} from "../../hooks/useWindowSize";

Navigation.propTypes = {

};

function Navigation(props) {
  const window = useWindowSize();
  const [ openBurger, setOpenBurger ] = React.useState(false );
  
  return (
      <div className={`flex gap-x-6`}>
        {
          window.width > 680 ? (
              <nav className="flex gap-x-14 box-border text-white">
                {
                  routes.map((route, index) => (
                    <Link href={route.path} key={index}>{route.name}</Link>
                  ))
                }
              </nav>
          ) : (
            <div className={`text-white`} onClick={ () => setOpenBurger(true ) }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </div>
          )
        }
        <div className={`${ openBurger ? 'flex' : 'hidden' } flex-col text-white absolute left-0 top-0 h-screen z-100  w-full bg-black`}>
          <div className={`text-white p-8 flex justify-end`} onClick={ () => setOpenBurger(false ) }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>
          <div className={`flex flex-col gap-y-4 box-border items-center justify-center flex-1`}>
            {
              routes.map((route, index) => (
                <Link href={route.path} key={index} className="text-2xl" onClick={() => setOpenBurger(false)}>{route.name}</Link>
              ))
            }
          </div>
        </div>
      </div>
  );
}

export default Navigation;
