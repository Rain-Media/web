"use client"
import React, {useState} from 'react';
import ProjectPoster from "./ProjectPoster";
import {useDispatch} from "react-redux";
import {setCurrentlyTab} from "../../../store/features/project-contents/project-content-slice";
import {projects} from "../../../constants/constant";

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProjectWidth = 280;
  const dispatch = useDispatch();
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    dispatch( setCurrentlyTab( projects.find( item => item.id === (index + 1) ).slug ))
  };
  
  return (
    <div className="flex items-center justify-center">
      {projects.map(( project, index ) => {
        const isActive = index === activeTab;
        return (
          <div
            key={index}
            onClick={ () => handleTabClick(index) }
            className={`cursor-pointer ${isActive ? 'active-tab' : '' }`}>
            <ProjectPoster
              src={ project.image }
              alt={ project.name }
              width={ isActive ? activeProjectWidth : project.width }
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTabs;