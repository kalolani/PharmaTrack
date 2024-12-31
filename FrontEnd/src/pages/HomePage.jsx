// /* eslint-disable react/prop-types */
// import Button from "../components/Button";
// import PageNav from "../components/PageNav";
// import GridDots from "../components/GridDots";

// import CircleOutline from "../components/CircleOutline";
// // import CircleOutline from "../components/CircleOutline";
// function HomePage({ setShowLogin }) {
//   return (
//     <div className="z-[100] relative h-screen w-full bg-home-image bg-cover bg-center">
//       <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

//       <PageNav setShowLogin={setShowLogin} />
//       <h1 className="absolute top-[30%] left-[8%] text-white font-bold text-5xl leading-snug font-Poppins tracking-wide">
//         Efficient Pharmacy Stock
//         <br /> Management Made Easy
//       </h1>
//       <p className="absolute top-[52%] left-[8%] text-white font-normal text-lg leading-normal font-Poppins tracking-normal">
//         Effortlessly monitor stock levels, prevent shortages,
//         <br /> and ensure smooth operations.
//       </p>
//       <div className=" absolute top-[70%] left-[8%] flex justify-center gap-4 mb-8">
//         <Button variant="primary" size="lg" className="font-bold">
//           Get Started
//         </Button>
//         <Button variant="secondary" size="lg" className="font-bold">
//           Explore Features
//         </Button>
//       </div>
//       <div className="z-[99] absolute bottom-[0%] right-[5%]">
//         <img src="pharmacist-1.png" />
//       </div>
//       <div className="z-0 absolute bottom-[30%] right-[26%]">
//         <GridDots />
//       </div>
//       <div className="z-0 absolute bottom-[0%] right-[5%]">
//         <GridDots />
//       </div>
//       <div className="absolute top-[25%] right-[9%]">
//         <CircleOutline diameter="400px" borderWidth="2px" borderColor="#3498db">
//           {/* Inner Circle */}
//           <CircleOutline
//             diameter="300px"
//             borderWidth="2px"
//             borderColor="#3498db"
//           />
//         </CircleOutline>
//       </div>
//       <img src="medicinee.png" className="absolute top-[18%] right-[20%]" />
//       {/* <img src="med-2.png" className="absolute top-[18%] right-[10%]" /> */}
//       <img src="med-3.png" className="absolute bottom-[20%] right-[5%]" />
//       <img src="med-4.png" className="absolute top-[40%] right-[30%]" />
//     </div>
//   );
// }

// export default HomePage;
const Home = () => {
  return (
    <div className="bg-[#005030] min-h-screen text-white font-sans">
      {/* Navigation Bar */}
      <nav className="z-100 fixed backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 w-[90%] p-6 py-4 flex justify-between items-center bg-green-400 bg-opacity-[0.2] rounded-lg shadow-lg">
        <div className="text-xl font-bold">My Pharmacy</div>
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
        </div>
        <div className="flex items-center space-x-6">
          <button className="bg-transparent border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#005030]">
            Log in
          </button>
          <button className="bg-white text-[#005030] rounded-md px-6 py-2 hover:bg-gray-200">
            Get Started
          </button>
          {/* Search Icon (You'll need an icon library like react-icons) */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-8 md:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Efficient Pharmacy Stock <br /> Management Made Easy
        </h1>
        <p className="text-lg mb-10">
          Effortlessly monitor stock levels, prevent shortages, <br /> and
          ensure smooth operations.
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

export default Home;
