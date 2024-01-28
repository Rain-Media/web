"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { aboutUsSliderItems } from "../../../constants/constant";
import Image from "next/image";

export default function AboutUsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {aboutUsSliderItems.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={image.imgSrc} width={800} height={800} alt={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
