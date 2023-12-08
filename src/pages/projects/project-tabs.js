"use client"
import React, { useState } from 'react';
import ProjectPoster from "./project-poster";
import memuzin from '/src/assets/images/memuzinposter.png';
import damdadelivar from '/src/assets/images/damdadelivar.png';
import tomris from '/src/assets/images/tomris.png';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentlyTab} from "../../store/features/project-contents/project-content-slice";

const projects = [
  {
    id: 1,
    name: "Memuzin",
    image: memuzin,
    width: 200,
  },
  {
    id: 2,
    name: "Damda deLi var",
    image: damdadelivar,
    width: 200,
  },
  {
    id: 3,
    name: "Tomris",
    image: tomris,
    width: 200,
  },
];

function ProjectTabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const activeProjectWidth = 280;
  const dispatch = useDispatch();
  const currentTab = useSelector( state => state.projectContent.currentTab )
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    dispatch( setCurrentlyTab( projects.find( item => item.id === (index + 1) ).name ))
  };
  
  console.log('yeh baby', currentTab )
  
  return (
    
    <div className="flex items-center justify-center">
      {projects.map(( project, index ) => {
        const isActive = index === activeTab;
        return (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer ${isActive ? 'active-tab' : ''}`}>
            <ProjectPoster
              src={project.image}
              alt={project.name}
              width={ isActive ? activeProjectWidth : project.width }
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTabs;
