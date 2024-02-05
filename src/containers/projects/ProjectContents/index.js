import React from "react";
import { useSelector } from "react-redux";
import ProjectTopic from "./ProjectTopic";
import ProjectGallery from "./ProjectGallery";
import ProjectContentButtons from "./ProjectContentButtons";

function ProjectContents() {
  const { selectedTab } = useSelector((state) => state.projectContent);

  return (
    <div className="text-white p-5 lg:p-10">
      <ProjectContentButtons />
      {selectedTab === "topic" ? <ProjectTopic /> : <ProjectGallery />}
    </div>
  );
}

export default ProjectContents;
