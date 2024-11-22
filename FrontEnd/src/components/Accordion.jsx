/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Accordion.jsx
// import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../Redux/accordionSlice";
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Accordion({ id, icon, iconc, title, children }) {
  const dispatch = useDispatch();
  const curOpen = useSelector((state) => state.accordion.openItem); // Get the current open item number
  const isOpen = id === curOpen; // Check if this item is open
  console.log(isOpen);

  const toggleHandler = () => {
    dispatch(toggleItem(isOpen ? null : id)); // Toggle: close if open, open if closed
  };

  const iconColor = isOpen ? "#00B074" : "#464255";

  return (
    <div className="relative w-[100%]" onClick={toggleHandler}>
      <NavLink
        key={id}
        className={`flex items-center gap-[12px] p-2 pl-6 cursor-pointer rounded-md ${
          isOpen ? "bg-[#00B074] bg-opacity-[0.15]" : ""
        }`}
      >
        {isOpen ? iconc : icon}

        <p
          className={`text-[17px] text-[18px] font-Poppins ${
            isOpen ? "text-[#00B074] font-medium" : "text-[#464255]"
          }`}
        >
          {title}
        </p>
        {isOpen ? (
          <div className="absolute -left-[15px] w-[5px] h-[44px] bg-[#00B074] rounded-sm"></div>
        ) : (
          ""
        )}
      </NavLink>
    </div>
  );
}

export default Accordion;
