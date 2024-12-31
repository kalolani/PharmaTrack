const StatioUI = () => {
  return (
    <div className="bg-[#005030] min-h-screen text-white font-sans">
      {/* Navigation Bar */}
      <nav className="p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Statio</div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:underline">
            Platform
          </a>
          <a href="#" className="hover:underline">
            Solutions
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <button className="bg-transparent border border-white rounded-md px-4 py-2 hover:bg-white hover:text-[#005030]">
            Log in
          </button>
          <button className="bg-white text-[#005030] rounded-md px-6 py-2 hover:bg-gray-200">
            Get Started
          </button>
          {/* Search Icon (You'll need an icon library like react-icons) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 md:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Start excelling with <br /> digital analytics
        </h1>
        <p className="text-lg mb-10">
          Get reliable data and the insights you need to take action and promote
          growth.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#FFC85E] text-[#005030] rounded-md px-8 py-3 font-medium hover:bg-[#e6b44b]">
            Contact Sales
          </button>
          <button className="border border-white rounded-md px-8 py-3 font-medium hover:bg-white hover:text-[#005030]">
            Get the Demo
          </button>
        </div>
      </section>

      {/* Mock Dashboard (Simplified) */}
      <div className="bg-white text-gray-800 rounded-2xl mx-8 md:mx-20 p-6 shadow-lg">
        {/* Simplified Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium">Statio</div>
          <div className="text-sm">James Workman</div>
        </div>
        {/* Simplified Navigation */}
        <div className="flex space-x-4 mb-4 text-sm">
          <div>Dashboard</div>
          <div>Activity</div>
          <div>Calendar</div>
          <div>Event</div>
        </div>
        {/* Placeholder Content */}
        <div className="bg-gray-100 rounded-md p-4 text-center text-gray-500">
          Mock Dashboard Content
        </div>
      </div>
    </div>
  );
};

export default StatioUI;
