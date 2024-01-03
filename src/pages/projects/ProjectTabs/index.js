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

  console.log(activeTab, "activeeeee");

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
              width={isActive ? activeProjectWidth : project.width}
              isActive={isActive}
            />

            <div
              className={`w-full h-10 rounded-[50%] bg-[#FEFFDE]/[.40] blur-sm transition-all duration-200 ${
                isActive
                  ? "visible opacity-100 animate-[pulse_5s_ease-in-out_infinite]"
                  : "invisible opacity-0"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTabs;
