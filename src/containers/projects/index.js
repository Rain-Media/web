"use client";
import React from "react";
import ProjectTabs from "./ProjectTabs";
import Image from "next/image";
import arrow from "../../assets/images/arrow.svg";
import ProjectContents from "./ProjectContents";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentlyProject } from "../../store/features/project-contents/project-content-slice";
import { projects } from "../../constants/constant";

function Projects(props) {
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.projectContent);

  useEffect(() => {
    if (currentProject === "") {
      dispatch(
        setCurrentlyProject(projects.find((item) => item.id === 1).slug)
      );
    }
  }, []);

  return (
    <div className="bg-[#1C1C1C] pt-32 lg:pt-40 relative">
      <div className="text-white w-[150px] sm:w-[250px] h-[120px] sm:h-[220px] xl:w-[394px] xl:h-[350px] bg-[#FEFFDE]/[.40] absolute top-0 left-0 md:left-64 xl:left-96 skew-y-12 rounded-full blur-2xl md:blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="text-white w-[150px] sm:w-[250px] h-[120px] sm:h-[220px] xl:w-[394px] xl:h-[350px] bg-[#FEFFDE]/[.40] absolute top-10 right-0 md:right-32 xl:right-52 skew-y-12 rounded-full blur-2xl md:blur-[120px] animate-[pulse_8s_ease-in_infinite]"></div>
      <ProjectTabs />
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className="text-[#FDDC01] font-medium mt-12 mb-5">SCROLL</div>
        <Image
          className="animate-[bounce_2s_ease-in-out_infinite]"
          src={arrow}
          width={6}
          height={67}
          alt="arrow"
        />
      </div>
      <ProjectContents />
    </div>
  );
}

export default Projects;
