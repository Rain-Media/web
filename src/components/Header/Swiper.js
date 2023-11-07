// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import birmingham from "/src/assets/images/birmingham.jpeg";
import toma from "/src/assets/images/toma.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import { Navigation } from 'swiper/modules';


export default () => {
  return (
    <Swiper
      className="absolute"
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={birmingham}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={toma}/>
      </SwiperSlide>
    </Swiper>
  );
};
