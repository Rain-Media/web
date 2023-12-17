import React,{useEffect,useState} from 'react';
import ProjectContentButtons from "../ProjectContentButtons";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";

const ProjectGallery = (props) => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/api/projects?populate=*',{
        headers: {
          Authorization: `Bearer 56d70c955462ab8cb37e6b8f9f6fe8df6e4200ce164f5e48539c6564f3f5a960d86b11f6d519aa09c0fbfd60a08277a53a340b1d490221764d5771ea27805a485ca845654ae9c75a7a950d37eaee80a4785632432ecb5b4e16ccbffd00d86297ddce88fdd6eea01297c868fa1b2a6f8bf4ef932805902f0253f5cd71a49a0af2`
        }
      });
      const data = await response.json();
      setProjects(data);
    };
    
    fetchData();
  }, []);
  
  console.log( projects,'yeah' )
  
  return (
    <>
      <ProjectContentButtons/>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      
    </>
  )
};

export default ProjectGallery;
