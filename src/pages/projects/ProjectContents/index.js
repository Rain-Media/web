import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProjectTopic from "./ProjectTopic";
import ProjectGallery from "./ProjectGallery";
import {contents} from "../../../constants/constant";
import {setCurrentlyData} from "../../../store/features/project-contents/project-content-slice";
import {selectCurrentProjectData} from "../../../utils/projects";

function ProjectContents() {
  const { selectedTab, currentTab, currentlyData } = useSelector( state => state.projectContent );
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch( setCurrentlyData( selectCurrentProjectData( contents, currentTab )))
  },[ currentTab, currentlyData ]);
  
  return (
    <div className="text-white p-10">
      {selectedTab === 'topic' ? <ProjectTopic data={currentlyData} /> : <ProjectGallery/> }
    </div>
  );
}

export default ProjectContents;
