import React from 'react';
import {setSelectedTab} from "../../../../store/features/project-contents/project-content-slice";
import {useDispatch, useSelector} from "react-redux";

const ProjectContentTabs = (props) => {
  const { selectedTab } = useSelector( state => state.projectContent );
  const dispatch = useDispatch();
  
  return(
    <div className="w-full text-center flex gap-2 justify-center">
      <button
        onClick={ () => dispatch( setSelectedTab('topic') ) }
        className={`px-12 rounded-3xl py-1 border border-gray-500 ${ selectedTab === 'topic' && 'bg-amber-300' }`}>Konusu</button>
      <button
        onClick={ () => dispatch( setSelectedTab('gallery') ) }
        className={`px-12 rounded-3xl py-1 border border-gray-500 ${ selectedTab === 'gallery' && 'bg-amber-300' }`}>Galeri</button>
    </div>
  )
};

export default ProjectContentTabs;
