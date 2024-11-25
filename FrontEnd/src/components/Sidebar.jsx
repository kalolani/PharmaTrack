/* eslint-disable react/prop-types */

import Accordion from "./Accordion";

function Sidebar({ data }) {
  //redux

  return (
    <div className="w-[15%] min-h-screen border-t-[0] text-[max(1vw, 10px)] bg-[#FFFFFF]">
      <div className="p-[7%] pt-[20px] flex flex-col gap-[17px] items-center">
        <div className="flex items-center cursor-pointer p-[4px] pl-[0px]">
          <div className="">
            <img
              src="/pharma-logoo.png"
              alt="Logo"
              className="h-[60px] w-[max(10%,80px)]"
            />
          </div>
          <p className="text-[16px] font-bold font-Poppins">D-EXPRESS</p>
        </div>
        {data.map((item) => (
          <Accordion
            key={item.id}
            id={item.id}
            icon={item.icon}
            iconc={item.iconc}
            title={item.title}
            sub={item.sub}
            link={item.link}
          >
            {/* {item.text} */}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
