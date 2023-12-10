import React from 'react';
import ProjectContentButtons from "../ProjectContentButtons";
import {useSelector} from "react-redux";
import Image from "next/image";

const ProjectTopic = () => {
  const {currentlyData} = useSelector( state => state.projectContent );
  
  return(
  <div>
    <div>
      <ProjectContentButtons/>
    </div>
    <div>
      { currentlyData?.name }
      { currentlyData?.slogan }
    </div>
    <Image src={ currentlyData?.poster } alt="hiya"/>
    <div></div>
  </div>
)};

export default ProjectTopic;
