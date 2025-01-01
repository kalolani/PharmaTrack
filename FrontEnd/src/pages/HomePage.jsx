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
    <div>
      <div className="relative bg-[#005030] min-h-screen text-white font-sans">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        {/* Navigation Bar */}
        <nav className="z-50 fixed backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 w-[90%] p-6 py-4 flex justify-between items-center bg-green-400 bg-opacity-[0.2] rounded-lg shadow-lg">
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
        <div className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[70%] mx-auto overflow-hidden border-[20px] border-green-200 border-opacity-[0.4] rounded-xl shadow-lg">
          <img
            src="/dashboard.PNG"
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>
      <div className="mt-[400px] min-h-screen">
        <h1 className="text-xl text-center leading-normal md:text-4xl font-bold text-gray-800 mb-6">
          This stock management system
          <br /> has all you need in one place
        </h1>
        <div className="w-[80%] mx-auto mt-[70px] flex justify-between">
          <div className="flex self-center w-full flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-800 font-sans">
              Merge your quantitative
              <br /> and qualitative data
            </h1>
            <p className="text-xl font-semibold font-sans text-gray-800 w-[80%]">
              Integrate your reliable business data with product data using
              session replay to analyze impact on marketing, support, NPS,
              billing and more
            </p>
            <div className="flex gap-6">
              <button className="text-white text-lg tracking-wide px-8 py-2 bg-[#005030] hover:bg-green-700 rounded-md">
                Get Started
              </button>
              <button className="text-green-800 text-lg tracking-wide px-8 py-2 bg-[#FFC85E] hover:bg-yellow-300 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="z-20 relative w-[80%] h-[400px] bg-slate-100 rounded-3xl overflow-hidden">
            <div className="absolute z-0 w-[90%] h-[40px] top-6 right-0 bg-gray-300 rounded-l-lg"></div>
            <div className="z-20">
              <img
                src="/dash.png"
                className="block z-10 w-[95%] h-full absolute top-10 right-0 object-cover bg-right-top rounded-l-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#005030] min-h-screen font-sans">
        <div className="absolute w-full inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div>
          <div className="absolute w-[85%] h-[550px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white grid grid-cols-3 rounded-3xl overflow-hidden">
            <div className="h-full bg-gray-50 bg-opacity-[0.6]">
              <div className="self-center flex flex-col gap-4 px-12 py-4 border-b-2 border-gray-300">
                <h1 className="self-start text-gray-700 text-2xl font-bold font-sans ">
                  Benefits
                </h1>
                <button className="self-start bg-yellow-400 text-[#005030] rounded-md px-8 py-3 font-medium hover:bg-[#e6b44b]">
                  Get Started
                </button>
              </div>
              <h1 className="mt-8 text-center text-gray-800 font-bold text-lg px-4 py-2 font-sans">
                The benefit of using our software
              </h1>
              <ul className="flex flex-col gap-2 px-12">
                <li className="flex items-center gap-2">
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-gray-800 text-lg">
                    Inventory Accuracy
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-gray-800 text-lg">
                    Improved Stock Control
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-gray-800 text-lg">
                    Time Efficiency
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-lg text-gray-800 ">
                    {" "}
                    Cost Savings
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-gray-800 text-lg">
                    Enhanced Reporting and Analysis
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <img src="/star.png" className="h-10" />
                  <p className="font-sans font-semibold text-gray-800 text-lg">
                    Minimizes Human Errors
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-full bg-green-600">
                <div className="absolute w-full inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
                <div className="self-center flex flex-col gap-4 px-12 py-4 border-b-2 border-gray-300">
                  <h1 className="self-start text-white text-2xl font-bold font-sans ">
                    Features
                  </h1>
                  <button className="self-start bg-yellow-400 text-[#005030] rounded-md px-8 py-3 font-medium hover:bg-[#e6b44b]">
                    Get Started
                  </button>
                </div>
                <h1 className="mt-8 text-left text-white font-bold text-lg py-2 pl-16 font-sans">
                  Why to use the system
                </h1>
                <ul className=" flex flex-col gap-2 px-12">
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Inventory Tracking
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Automated Alerts
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Reporting and Analytics
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      {" "}
                      User-Friendly Interface
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Expiry Date Tracking
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Stock Reordering
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Sales and Billing
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-white">
                      Notifications and Alerts
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="h-full bg-gray-50 bg-opacity-[0.6]">
                <div className="self-center flex flex-col gap-4 px-12 py-4 border-b-2 border-gray-300">
                  <h1 className="self-start text-gray-700 text-2xl font-bold font-sans ">
                    Benefits
                  </h1>
                  <button className="self-start bg-yellow-400 text-[#005030] rounded-md px-8 py-3 font-medium hover:bg-[#e6b44b]">
                    Get Started
                  </button>
                </div>
                <h1 className="mt-8 text-center text-gray-700 font-bold text-lg px-4 py-2 font-sans">
                  The benefit of using our software
                </h1>
                <ul className=" flex flex-col gap-2 px-12">
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Inventory Accuracy
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Improved Stock Control
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Time Efficiency
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      {" "}
                      Cost Savings
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Enhanced Reporting and Analysis
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Minimizes Human Errors
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
