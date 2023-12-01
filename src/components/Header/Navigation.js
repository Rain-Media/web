import React from 'react';
import Link from "next/link";
import {routes} from "../../constants/constant";
import {useWindowSize} from "../../hooks/useWindowSize";
import MobileNavigation from "./MobileNavigation";
import {useDispatch} from "react-redux";
import {setOpen} from "../../store/features/hamburger-menu/hamburgerSlice";

function Navigation() {
  const window = useWindowSize();
  const dispatch = useDispatch();
  
  return (
      <nav className={`flex gap-x-6`}>
        {
          window.width > 680 ? (
              <div className="flex gap-x-14 box-border text-white">
                {
                  routes.map((route, index) => (
                    <Link href={route.path} key={index}>{route.name}</Link>
                  ))
                }
              </div>
          ) : (
            <div className={`text-white`} onClick={ () => dispatch( setOpen()) }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </div>
          )
        }
        <MobileNavigation/>
      </nav>
  );
}

export default Navigation;
