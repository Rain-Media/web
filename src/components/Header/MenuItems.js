"use client";
import React from "react";
import { routes } from "../../constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems() {
  const pathname = usePathname();
  return (
    <div className="gap-x-14 box-border text-white hidden md:flex">
      {routes.map((route, index) => (
        <Link href={route.path} key={index}>
          {route.name}
          {pathname === route.path && (
            <div className="bg-white w-full h-0.5"></div>
          )}
        </Link>
      ))}
    </div>
  );
}
