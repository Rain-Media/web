import {footerLinks} from "../src/components/Footer/constant";
import Route from "../src/components/Footer/Route";

export default function Page() {
  const socialLinks = footerLinks.filter(item => item.name.includes('Sosyal'));
  
  return (
    <div className="bg-[#1c1c1c]">
      <div className="w-full flex justify-center py-6">
        {
          socialLinks.map((item, index) => {
            return (
                <div className="flex flex-col gap-y-6 text-white" key={index}>
                  <div className={`flex gap-y-2 gap-x-2.5`}>
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
  )
}
