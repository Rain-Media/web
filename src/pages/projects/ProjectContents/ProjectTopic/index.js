import React, {useEffect, useState} from 'react';
import ProjectContentButtons from "../ProjectContentButtons";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {setCurrentlyData} from "../../../../store/features/project-contents/project-content-slice";
import {selectCurrentProjectData} from "../../../../utils/projects";
import {contents} from "../../../../constants/constant";

const ProjectTopic = () => {
  const {currentlyData,currentTab} = useSelector( state => state.projectContent );
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( currentTab ) {
      dispatch( setCurrentlyData( selectCurrentProjectData( contents, currentTab )));
    }
  },[ currentTab ]);
  
  return(
  <div className="w-full flex">
    <div className="w-full md:w-1/3 flex flex-col items-center">
      { currentlyData && <Image src={ currentlyData?.poster } alt="hiya"/> }
      <span className="text-[24px] font-bold text-center mb-8">{ currentlyData?.slogan }</span>
      <span className="text-[16px] mb-4">Konusu</span>
      <span className="text-[20px] text-[#F4F4F4] font-light text-center max-w-[224px] font-lato">{currentlyData?.summary}</span>
    </div>
    <div className="w-full md:w-1/3 bg-black pt-10 text-center flex flex-col items-center">
      <ProjectContentButtons/>
      <div className="font-playfair text-5xl text-center my-10 overflow-hidden">{currentlyData?.name.toUpperCase()}</div>
      <div className="font-playfair text-[36px] max-w-[274px] text-center">"{ currentlyData?.highlight }"</div>
    </div>
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <div className="mb-4 w-full text-center mt-12 font-medium">Özet</div>
      <div className="font-lato text-[20px] text-[#f4f4f4] font-light text-center max-w-[284px]">{ currentlyData?.summary }</div>
    </div>
  </div>
)};

export default ProjectTopic;
