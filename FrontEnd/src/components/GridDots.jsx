function GridDots() {
  return (
    <div className=" grid grid-cols-7 gap-4 p-4 rounded-lg">
      {/* Repeat dots to form a square */}
      {[...Array(49)].map((_, i) => (
        <div key={i} className="w-[4px] h-[4px] bg-blue-900 rounded-full"></div>
      ))}
    </div>
  );
}

export default GridDots;
