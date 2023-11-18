import {routes} from "./constant";
import Link from "next/link";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setClose, setOpen} from "../../store/features/hamburgerSlice";

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const {open} = useSelector(state => state.hamburger);
  
  return(
    <div className={`${ open ? 'flex' : 'hidden' } flex-col text-white absolute left-0 top-0 h-screen overflow-hidden z-100 w-full bg-black`}>
      <div className={`text-white p-8 flex justify-end`} onClick={ () => dispatch(setClose()) }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className={`flex flex-col gap-y-4 box-border items-center justify-center flex-1`}>
        {
          routes.map((route, index) => (
            <Link href={route.path} key={index} className="text-2xl" onClick={() => dispatch(setClose())}>{route.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default MobileNavigation;
