import React from 'react';
import {useSelector} from "react-redux";
import ProjectTopic from "./ProjectTopic";
import ProjectGallery from "./ProjectGallery";

function ProjectContents() {
  const { selectedTab } = useSelector( state => state.projectContent );
  
  return (
    <div className="text-white p-10">
      {selectedTab === 'topic' ? <ProjectTopic/> : <ProjectGallery/> }
    </div>
  );
}

export default ProjectContents;
