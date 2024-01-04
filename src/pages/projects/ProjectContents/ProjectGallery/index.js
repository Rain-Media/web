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

const ProjectGallery = (props) => {
  const [projects, setProjects] = useState([]);
  const { currentlyData, currentProject } = useSelector(
    (state) => state.projectContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProject) {
      dispatch(
        setCurrentlyData(selectCurrentProjectData(contents, currentProject))
      );
    }
  }, [currentProject]);

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
      <ProjectContentButtons />
      <div className="lg:flex pt-14 gap-20">
        <div className="basis-1/3 hidden lg:block">
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
        </div>
        <div className="m max-w-4xl basis-2/3">
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
                  className="!w-[500px] xl:!w-[600px] !h-[450px] xl:!h-[550px] -ml"
                >
                  <Image
                    fill={true}
                    src={data}
                    alt="image"
                    className="object-contain lg:object-cover"
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
