"use client"
import React,{useEffect} from 'react';
import ProjectTabs from "../../src/pages/projects/project-tabs";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentlyTab} from "../../src/store/features/project-contents/project-content-slice";
import {projects} from "../../src/constants/constant";
import ProjectContents from "../../src/pages/projects/ProjectContents";

function Page(props) {
  const dispatch = useDispatch();
  const { currentTab } = useSelector( state => state.projectContent )
  
  useEffect( () => {
    if( currentTab === '' ) {
      dispatch( setCurrentlyTab( projects.find( item => item.id === 1 ).name ))
    }
  },[] )
  
  return (
    <div className="bg-[#1C1C1C]">
      <ProjectTabs />
      <ProjectContents/>
    </div>
  );
}

export default Page;
