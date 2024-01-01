"use client"
import React,{useEffect} from 'react';
import ProjectTabs from "../../src/pages/projects/ProjectTabs";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentlyData, setCurrentlyTab} from "../../src/store/features/project-contents/project-content-slice";
import {projects} from "../../src/constants/constant";
import ProjectContents from "../../src/pages/projects/ProjectContents";

function Page(props) {
  const dispatch = useDispatch();
  const { currentProject } = useSelector( state => state.projectContent )
  
  useEffect( () => {
    if( currentProject === '' ) {
      dispatch( setCurrentlyProject( projects.find( item => item.id === 1 ).slug ))
    }
  },[])
  
  return (
    <div className="bg-[#1C1C1C] pt-32 lg:pt-40">
      <ProjectTabs />
      <ProjectContents/>
    </div>
  );
}

export default Page;
