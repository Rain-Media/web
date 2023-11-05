import React from 'react';
import {footerLinks} from "./constant";
import Route from "./Route";

Footer.propTypes = {

};

function Footer(props) {
  return (
    <div className="bg-black px-5 sm:px-20 pt-10 pb-24 gap-y-8 sm:gap-x-52 flex flex-col sm:flex-row">
      <div>
        <h1 className="text-white text-md sm:text-4xl font-bold">Rain Media</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-x-32 divide-y sm:divide-y-0 divide-slate-400/40 gap-y-5">
        {
          footerLinks.map((item, index) => {
            return (
                <div className="flex flex-col gap-y-6 text-white" key={index}>
                  <h2 className="mt-3">{item.name}</h2>
                  <div className={`flex ${ !item.name.includes('Sosyal') && 'flex-col' } gap-y-2 gap-x-2.5`}>
                    {
                      item.links.map((item, index) => <Route key={index} url={item.to} name={item.name} /> )
                    }
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Footer;
