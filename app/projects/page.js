import React from 'react';
import ProjectTabs from "../../src/pages/projects/project-tabs";

function Page(props) {
  
  const eliminate = (tab) => {
    switch ( tab ) {
      case 'memuzin':
        return <div>memuzin</div>
      case 'tomris':
        return <div>tomris</div>
      case 'damda-deli-var':
        return <div>damda-deli-var</div>
    }
  }
  
  return (
    <div className="bg-[#1C1C1C]">
      <ProjectTabs />
      <div>
        {
          eliminate('memuzin')
        }
      </div>
    </div>
  );
}

export default Page;
