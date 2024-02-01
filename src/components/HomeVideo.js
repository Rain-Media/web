"use client";
import React from "react";

export default function HomeVideo() {
  return (
    <div className="w-full">
      <video
        className="object-cover h-96 md:h-[500px] lg:h-[850px] w-full brightness-75"
        src={require("/public/videos/Anasayfa-video.mp4")}
        autoPlay
        muted
        loop
      />
    </div>
  );
}
