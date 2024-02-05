"use client";
import React, { useState } from "react";
import ProjectPoster from "./ProjectPoster";
import { useDispatch } from "react-redux";
import { setCurrentlyProject } from "../../../store/features/project-contents/project-content-slice";
import { projects } from "../../../constants/constant";

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProjectWidth = 280;
  const dispatch = useDispatch();

  const handleTabClick = (index) => {
    setActiveTab(index);
    dispatch(
      setCurrentlyProject(projects.find((item) => item.id === index + 1).slug)
    );
  };

  return (
    <div className="flex items-center justify-center">
      {projects.map((project, index) => {
        const isActive = index === activeTab;
        return (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer ${isActive ? "active-tab" : ""}`}
          >
            <ProjectPoster
              src={project.image}
              alt={project.name}
              width={isActive ? "scale-110 mx-7 rounded-2xl" : "scale-75 brightness-75"}
              isActive={isActive}
            />

            {/* <div
              className={`w-full h-10 rounded-[50%] bg-[#FEFFDE]/[.25] blur-sm transition-all duration-500 mt-3 md:mt-10 ${
                isActive ? "visible opacity-100" : "invisible opacity-0"
              }`}
            ></div> */}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTabs;
