// /* eslint-disable react/prop-types */
// import Button from "../components/Button";
// import PageNav from "../components/PageNav";
// import GridDots from "../components/GridDots";

import Footer from "../components/Footer";

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
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="light-effect"></div>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none">
          <div className="absolute bg-white rounded-full h-1 w-1 top-5 right-10 opacity-80 animate-pulse"></div>
          <div className="absolute bg-yellow-400 rounded-full h-1 w-1 top-10 right-30 opacity-60 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-15 right-50 opacity-70 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-20 right-75 opacity-50 animate-pulse"></div>
          <div className="absolute bg-yellow-300 rounded-full h-1 w-1 top-25 right-20 opacity-90 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-30 right-40 opacity-80 animate-pulse"></div>
          <div className="absolute bg-yellow-200 rounded-full h-1 w-1 top-35 right-45 opacity-60 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-40 right-70 opacity-75 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-50 right-25 opacity-90 animate-pulse"></div>
          <div className="absolute bg-yellow-400 rounded-full h-1 w-1 top-55 right-35 opacity-70 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-60 right-15 opacity-80 animate-pulse"></div>
          <div className="absolute bg-yellow-300 rounded-full h-1 w-1 top-65 right-50 opacity-90 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-70 right-80 opacity-70 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-75 right-40 opacity-50 animate-pulse"></div>
          <div className="absolute bg-yellow-200 rounded-full h-1 w-1 top-80 right-20 opacity-90 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-85 right-60 opacity-70 animate-pulse"></div>
          <div className="absolute bg-yellow-300 rounded-full h-1 w-1 top-90 right-75 opacity-80 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-95 right-10 opacity-75 animate-pulse"></div>
          <div className="absolute bg-yellow-400 rounded-full h-1 w-1 top-10 right-95 opacity-90 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-20 right-15 opacity-70 animate-pulse"></div>
          <div className="absolute bg-yellow-300 rounded-full h-1 w-1 top-30 right-35 opacity-80 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-40 right-60 opacity-75 animate-pulse"></div>
          <div className="absolute bg-yellow-400 rounded-full h-1 w-1 top-50 right-25 opacity-90 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-60 right-10 opacity-70 animate-pulse"></div>
          <div className="absolute bg-yellow-300 rounded-full h-1 w-1 top-70 right-30 opacity-60 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-80 right-50 opacity-80 animate-pulse"></div>
          <div className="absolute bg-yellow-400 rounded-full h-1 w-1 top-90 right-75 opacity-75 animate-pulse"></div>
          <div className="absolute bg-white rounded-full h-1 w-1 top-95 right-40 opacity-90 animate-pulse"></div>
        </div>
        {/* Navigation Bar */}
        <nav className="z-50 fixed backdrop-blur-md top-4 left-1/2 transform -translate-x-1/2 w-[90%] p-6 py-4 flex justify-between items-center bg-green-400 bg-opacity-[0.8] rounded-lg shadow-lg">
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
        <div className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%] w-[70%] mx-auto overflow-hidden border-[20px] border-green-200 border-opacity-[0.4] rounded-xl shadow-2xl">
          <img
            src="/dashboard.PNG"
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>
      <div className="relative pt-[400px] pb-[100px] min-h-screen bg-[#B3DDE8]">
        <div className="absolute w-full inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
        <h1 className="text-xl text-center leading-normal md:text-4xl font-bold text-gray-800 mb-6">
          This stock management system
          <br /> has all you need in one place
        </h1>
        <div className=" w-[85%] mx-auto mt-[70px] flex justify-between">
          <div className="flex self-center w-full flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-800 font-sans w-[100%]">
              Smart Solutions for Your Pharmacy Inventory
            </h1>
            <p className="text-xl font-semibold font-sans text-gray-800 w-[80%]">
              This Pharmacy Stock Management System is your all-in-one solution
              for tracking stock levels, monitoring expiration dates, and
              ensuring your shelves are always stocked with the right products.
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
      <div className="relative py-20 w-full bg-[#005030] min-h-screen font-sans">
        <div className="absolute w-full inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div>
          <div className="absolute w-[85%] h-[550px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white grid grid-cols-3 border-none rounded-3xl overflow-hidden">
            <div className="h-full bg-[#EBE9DD]">
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
              <div className="relative h-full bg-[#005030]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="light-effects"></div>
                </div>
                <div className="absolute right-16 top-10 bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
                <div className="absolute top-40 right-32 bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
                <div className="absolute right-36 top-16 bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
                <div className="absolute top-[100px] right-[60px] bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
                <div className="absolute right-[30px] top-[30px] bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
                <div className="absolute top-[60px] right-[25px] bg-yellow-300 w-2 h-2 rounded-full blur-sm opacity-100"></div>
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
              <div className="h-full bg-[#EBE9DD]">
                <div className="self-center flex flex-col gap-4 px-12 py-4 border-b-2 border-gray-300">
                  <h1 className="self-start text-gray-700 text-2xl font-bold font-sans ">
                    Additional Impact Metrics
                  </h1>
                  <button className="self-start bg-yellow-400 text-[#005030] rounded-md px-8 py-3 font-medium hover:bg-[#e6b44b]">
                    Get Started
                  </button>
                </div>
                <h1 className="mt-8 text-center text-gray-700 font-bold text-lg px-4 py-2 font-sans">
                  The benefit from metric analysis
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
                      Improved Inventory Accuracy
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Enhanced Reporting Efficiency
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      {" "}
                      Faster Decision Making
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Reduction in Stockouts
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <img src="/star.png" className="h-10" />
                    <p className="font-sans font-semibold text-lg text-gray-800 ">
                      Increased Sales Efficiency
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
