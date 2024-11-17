import Button from "./Button";

function PageNav() {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[100000] flex justify-between px-12 phone:px-2 mdphone:px-4 ptab:px-6 mtab:px-8 tablet:px-10 laptop:px-12 pt-6 pb-2 content-center items-center from-[#FBF7F4] to-[#fbf7f400] bg-gradient-180 overflow-hidden`}
      >
        <div className="absolute top-4 right-12 phone:right-[12%] ptab:right-[8%] laptop:invisible"></div>
        <div className="flex justify-center items-center">
          <img src="pharma-logoo.png" height="50px" width="50px" />
          <p className="font-Poppins font-medium text-white text-lg font-bold capitalise phone:text-base mtab:text-lg">
            D-EXPRESS
          </p>
        </div>
        <ul
          className={`flex gap-12 justify-center items-center ml-24 visible `}
        >
          <li className="font-Poppins group relative font-medium text-white capitalize text-base text-base hover:cursor-pointer hover:text-green-500 transition-all duration-200">
            Home
          </li>
          <li className="font-Poppins group relative font-medium text-white capitalize text-base text-base hover:cursor-pointer hover:text-green-500 transition-hover duration-200">
            Buy Medicine
          </li>
          <li className="font-Poppins group relative font-medium text-white capitalize text-base text-base hover:cursor-pointer hover:text-green-500 transition-hover duration-200">
            Contact Pharmacist
          </li>
        </ul>
        <div className="flex gap-12">
          <Button variant="primary" size="lg" className="font-bold">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default PageNav;
