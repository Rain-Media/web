import React, { useEffect } from "react";
import ProjectContentButtons from "../ProjectContentButtons";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { setCurrentlyData } from "../../../../store/features/project-contents/project-content-slice";
import { selectCurrentProjectData } from "../../../../utils/projects";
import { contents } from "../../../../constants/constant";

const ProjectTopic = () => {
  const { currentlyData, currentProject } = useSelector(
    (state) => state.projectContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProject) {
      dispatch(
        setCurrentlyData(selectCurrentProjectData(contents, currentProject))
      );
    }
  }, [currentProject]);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 lg:flex lg:flex-col items-center order-2 lg:order-1">
        <div className="w-full lg:w-auto flex justify-center">
          {currentlyData && <Image src={currentlyData?.poster} alt="hiya" />}
        </div>
        <span className="text-2xl font-bold text-center mb-8">
          {currentlyData?.slogan}
        </span>
        <span className="text-base mb-4 block text-center font-semibold">
          Konusu
        </span>
        <span className="text-base md:text-lg lg:text-xl text-[#F4F4F4] font-light text-center lg:max-w-[224px] font-lato">
          {currentlyData?.summary}
        </span>
      </div>
      <div className="w-full lg:w-1/3 bg-black pt-10 text-center flex flex-col items-center mb-10 lg:mb-0 lg:mt-0 order-1 lg:order-2 pb-10 lg:pb-0">
        <ProjectContentButtons />
        <div className="font-playfair text-3xl lg:text-5xl text-center my-10 overflow-hidden">
          {currentlyData?.name.toUpperCase()}
        </div>
        <div className="font-playfair text-2xl lg:text-4xl max-w-[274px] text-center">
          "{currentlyData?.highlight}"
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:flex lg:flex-col items-center order-3">
        <div className="mb-4 w-full text-center mt-12 block font-semibold">
          Özet
        </div>
        <div className="font-lato text-base md:text-lg lg:text-xl text-[#f4f4f4] font-light text-center lg:max-w-[284px]">
          {currentlyData?.summary}
        </div>
      </div>
    </div>
  );
};

export default ProjectTopic;
