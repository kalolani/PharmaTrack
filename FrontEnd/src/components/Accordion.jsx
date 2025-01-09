/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../Redux/accordionSlice";

import { NavLink } from "react-router-dom";
import { useStores } from "../contexts/storeContext";

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
  const { resetNotificationCount } = useStores();
  console.log(isOpen);
  console.log(sub);

  const toggleHandler = () => {
    dispatch(toggleItem(isOpen ? null : id)); // Toggle: close if open, open if closed
  };

  return (
    <div
      className="relative w-[100%]"
      onClick={link === "notify" ? resetNotificationCount : ""}
    >
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
              ? "relative pt-[10px] pl-[5px] flex flex-col gap-4"
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
              <>
                <NavLink
                  to={item.to}
                  className={`${
                    item.sub.length > 0
                      ? "relative font-Poppins font-medium text-[#5E5A6C] text-[13px] bg-[#66CBB1] bg-opacity-[0.4] hover:text-white hover:bg-green-500 cursor-pointer px-4 py-2 ml-10 rounded-md"
                      : ""
                  }`}
                  key={item}
                >
                  {item.sub.length > 1 ? item.sub : ""}
                  <div className="absolute top-1/2 left-[-25px] w-[16%] h-[2px] bg-[#00B074]">
                    {" "}
                  </div>
                </NavLink>
              </>
            ) : (
              ""
            )
          )}
          {sub.map((item) =>
            item.sub.length > 0 ? (
              <div
                key={item}
                className="absolute top-2 left-5 w-[2px] h-[90%] bg-[#00B074]"
              ></div>
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
