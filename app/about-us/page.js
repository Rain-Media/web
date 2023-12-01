import React from 'react';
import film from "/src/assets/images/ph_film-slate.svg";
import TeamMember from "../../src/pages/about-us/TeamMember";
import {teamMembers} from "../../src/constants/constant";

function Page(props) {
  return (
    <div className="bg-black">
      {
        teamMembers.map((item, index) => <TeamMember key={index} icon={film} name={item.name} description={item.description}/>)
      }
    </div>
  );
}

export default Page;
