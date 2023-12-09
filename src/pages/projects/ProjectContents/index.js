import React from 'react';
import {useSelector} from "react-redux";
import ProjectTopic from "./ProjectTopic";
import ProjectGallery from "./ProjectGallery";

function ProjectContents(props) {
  const { currentTab } = useSelector( state => state.projectContent )
  
  return (
    <div className="text-white">
      {currentTab}
      <ProjectTopic/>
      <ProjectGallery/>
    </div>
  );
}

export default ProjectContents;
