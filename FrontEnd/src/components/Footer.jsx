import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 relative bg-[#005030] min-h-screen px-6">
      <div className="mt-16 max-w-6xl py-20 mx-auto flex justify-between items-center bg-yellow-500 px-10 rounded-3xl mb-8">
        <h1 className="text-4xl text-gray-800 font-bold w-[65%]">
          Begin using this software to streamline your stock management
        </h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#005030] text-white rounded-md border-none">
            Get Started
          </button>
          <button className="px-4 py-2 text-gray-800 rounded-md border border-[#005030]">
            Get the Demo
          </button>
        </div>
      </div>
      <div className="mt-16 max-w-6xl py-10 mx-auto grid grid-cols-4 gap-20 border-b-2">
        <div className="self-center text-start">
          <h1 className="mb-4 text-gray-100 text-sm">platform</h1>
          <ul className="flex flex-col gap-4">
            <li className="text-gray-100 font-sans text-sm">Analytics</li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Experment
            </li>
            <li className="text-gray-100 font-sans text-sm">
              Customer Data Platform
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Session Replay
            </li>
          </ul>
        </div>
        <div className="self-center text-start">
          {" "}
          <h1 className="mb-4 text-gray-100 text-sm">Support</h1>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-100 font-sans text-sm">
              Contact Us
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Help Center
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Community
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Developer Docs
            </li>
          </ul>
        </div>
        <div className="self-center text-start">
          {" "}
          <h1 className="mb-4 text-gray-100 text-sm">Resource</h1>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-100 font-sans text-sm">
              Resource center
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">Blog</li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Amp Champs
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Amplitude Acadamy
            </li>
          </ul>
        </div>
        <div className="self-center text-start">
          {" "}
          <h1 className="mb-4 text-gray-100 text-sm ">COMPANY</h1>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-100 font-sans text-sm">
              About Us
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">Careers</li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Press & News
            </li>
            <li className="text-sm text-gray-100 font-sans text-sm">
              Investor Relation
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-6 w-full max-w-6xl mx-auto flex justify-between">
        <div>
          {" "}
          <p className="text-white">@ 2024 copyright by kaleab</p>
        </div>
        <div>
          <ul className="flex gap-2 items-center">
            <li className="text-white">terms</li>
            <li className="text-white">privacy</li>
            <li className="text-white">cookie</li>
            <li className="text-white">legal</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li>
              <CiFacebook color="white" size={20} />
            </li>
            <li>
              <FaInstagram color="white" size={20} />
            </li>
            <li>
              <FaLinkedin color="white" size={20} />
            </li>
            <li>
              <FaYoutube color="white" size={20} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
