"use client";
import React, { useEffect } from "react";
import ProjectTabs from "../../src/pages/projects/ProjectTabs";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentlyData,
  setCurrentlyTab,
} from "../../src/store/features/project-contents/project-content-slice";
import { projects } from "../../src/constants/constant";
import ProjectContents from "../../src/pages/projects/ProjectContents";

function Page(props) {
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
      <div className="text-white w-[394px] h-[350px] bg-[#FEFFDE]/[.40] absolute top-0 left-96 skew-y-12 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="text-white w-[394px] h-[350px] bg-[#FEFFDE]/[.40] absolute top-0 right-52 skew-y-12 rounded-full blur-[120px] animate-[pulse_8s_ease-in_infinite]"></div>
      <ProjectTabs />
      <ProjectContents />
    </div>
  );
}

export default Page;
