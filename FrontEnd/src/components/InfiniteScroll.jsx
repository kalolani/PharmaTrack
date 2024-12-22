import { motion } from "framer-motion";

const InfiniteScroll = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="overflow-hidden relative w-full h-20 bg-gray-100">
      <motion.div
        className="flex absolute whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="px-8 py-4 text-lg bg-blue-500 text-white rounded mx-2"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
