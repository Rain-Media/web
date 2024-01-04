import React from "react";
import { socialIcons } from "../../constants/constant";
import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = socialIcons.filter((item) =>
    item.name.includes("Sosyal")
  );

  return (
    <div className="flex gap-3 justify-center">
      {socialLinks[0].links.map((link, index) => {
        return (
          <Link
            href={link.to}
            key={index}
            className="hover:bg-white rounded-full transition-all duration-300 hover:rotate-[360deg]"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
