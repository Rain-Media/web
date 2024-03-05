"use client";
import React, { useEffect, useState } from "react";
import ProjectContentButtons from "../ProjectContentButtons";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { projectGalleryImages } from "../../../../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentlyData } from "../../../../store/features/project-contents/project-content-slice";
import { selectCurrentProjectData } from "../../../../utils/projects";
import { contents } from "../../../../constants/constant";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ProjectGallery = (props) => {
  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("forward");
  const { currentlyData, currentProject } = useSelector(
    (state) => state.projectContent
  );
  const dispatch = useDispatch();

  console.log(currentlyData, currentProject);

  useEffect(() => {
    if (currentProject) {
      dispatch(
        setCurrentlyData(selectCurrentProjectData(contents, currentProject))
      );
    }
  }, [currentProject]);

  const goToNextSlide = () => {
    setIsAnimating(true);

    setDirection("forward");
    setTimeout(() => {
      if (currentModalImage < currentlyData.gallery[0].src.length - 1) {
        setCurrentModalImage(currentModalImage + 1);
      } else {
        setCurrentModalImage(0);
      }
      setIsAnimating(false);
    }, 10);
  };

  const goToPrevSlide = () => {
    setDirection("backward");
    setIsAnimating(true);
    setTimeout(() => {
      if (currentModalImage > 0) {
        setCurrentModalImage(currentModalImage - 1);
      } else {
        setCurrentModalImage(currentlyData.gallery[0].src.length - 1);
      }
      setIsAnimating(false);
    }, 10);
  };

  /*useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/projects?populate=*",
        {
          headers: {
            Authorization: `Bearer 56d70c955462ab8cb37e6b8f9f6fe8df6e4200ce164f5e48539c6564f3f5a960d86b11f6d519aa09c0fbfd60a08277a53a340b1d490221764d5771ea27805a485ca845654ae9c75a7a950d37eaee80a4785632432ecb5b4e16ccbffd00d86297ddce88fdd6eea01297c868fa1b2a6f8bf4ef932805902f0253f5cd71a49a0af2`,
          },
        }
      );
      const data = await response.json();
      setProjects(data);
    };

    fetchData();
  }, []);*/

  console.log(projects, "yeah");

  return (
    <>
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 duration-500">
          <div
            onClick={() => setModal(false)}
            className="fixed top-0 left-0 w-full h-full bg-black/[0.90] flex items-center justify-center z-50"
          ></div>
          <IoIosCloseCircleOutline
            onClick={() => setModal(false)}
            className="absolute text-5xl text-white top-10 right-10 z-50 cursor-pointer"
          />
          <div className=" relative z-50 w-full lg:w-[900px] xl:w-[1200px] h-[500px] sm:h-[700px] left-0 right-0 px-5 lg:mx-auto mx-5 flex justify-center items-center">
            <Image
              className={` object-contain duration-100 ${
                isAnimating ? null : "animate-wiggle"
              }`}
              src={currentlyData.gallery[0].src[currentModalImage]}
              fill={true}
              sizes="100%"
              priority={true}
              alt="movie-image"
            />
          </div>
          <div
            onClick={goToPrevSlide}
            className="text-white text-5xl absolute bottom-10 left-20 z-50 cursor-pointer lg:bottom-auto"
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={goToNextSlide}
            className="text-white text-5xl absolute right-20 z-50 cursor-pointer bottom-10 lg:bottom-auto"
          >
            <IoIosArrowForward />
          </div>
        </div>
      )}

      <div className="lg:flex pt-14 gap-20">
        {/* <div className="basis-1/3 hidden lg:block">
          <p className="mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            officia, tempore incidunt laborum similique atque officiis magni ea
            aperiam eligendi culpa nisi quod sint quae! Laudantium possimus
            dolorum veritatis sapiente!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            repellendus ex earum eius sint corporis saepe quae numquam officia
            fugit?
          </p>
        </div> */}
        <div className="max-w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {currentlyData.gallery[0].src.map((data, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="!w-[300px] !h-[400px] sm:!w-[500px] xl:!w-[600px] sm:!h-[450px] xl:!h-[550px] -ml"
                >
                  <Image
                    fill={true}
                    src={data}
                    alt="image"
                    className="object-contain bg-white"
                    onClick={() => {
                      setModal(true);
                      setCurrentModalImage(index);
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
