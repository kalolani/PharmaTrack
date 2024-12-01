/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../Redux/accordionSlice";

import { NavLink } from "react-router-dom";

function Accordion({
  id,
  icon,
  iconc,
  title,
  sub,
  link,
  arrowDown,
  arrowUpGreen,
}) {
  const dispatch = useDispatch();
  const curOpen = useSelector((state) => state.accordion.openItem); // Get the current open item number
  const isOpen = id === curOpen; // Check if this item is open
  console.log(isOpen);
  console.log(sub);

  const toggleHandler = () => {
    dispatch(toggleItem(isOpen ? null : id)); // Toggle: close if open, open if closed
  };

  return (
    <div className="relative w-[100%]">
      <NavLink
        key={id}
        to={link}
        onClick={toggleHandler}
        className={`relative flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
          isOpen ? "bg-[#00B074] bg-opacity-[0.15]" : ""
        }`}
      >
        {isOpen ? iconc : icon}

        <p
          className={`text-[17px] text-[18px] font-Poppins ${
            isOpen ? "text-[#00B074]" : "text-[#464255]"
          }`}
        >
          {title}
        </p>

        {isOpen ? (
          <div className="absolute -left-[15px] w-[5px] h-[40px] bg-[#00B074] rounded-sm"></div>
        ) : (
          ""
        )}
        {isOpen ? arrowUpGreen : arrowDown}
      </NavLink>
      {isOpen ? (
        <motion.div
          className={`${
            sub.some((item) => item.sub.length > 0)
              ? "pt-[10px] pl-[5px] flex flex-col gap-3"
              : ""
          }`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{
            height: { duration: 0.2, ease: "easeInOut" },
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {sub.map((item) =>
            item.sub.length > 0 ? (
              <NavLink
                to={item.to}
                className={`${
                  item.sub.length > 0
                    ? "font-Poppins font-medium text-[#464255] text-[13px] hover:text-[#00B074] cursor-pointer border-[1px] border-[#464255] rounded-lg px-4 py-2"
                    : ""
                }`}
                key={item}
              >
                {item.sub.length > 1 ? item.sub : ""}
              </NavLink>
            ) : (
              ""
            )
          )}
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Accordion;
