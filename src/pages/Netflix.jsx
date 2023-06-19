import { useState } from "react";

import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";

import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="relative">
      <Navbar isScrolled={isScrolled}> </Navbar>

      <div className="bg-cover">
        <div className="brightness-25">
          <img
            src={backgroundImage}
            alt="backgroundImage"
            className="w-full h-screen  "
          />
        </div>

        {/* <div className="container absolute top-0 left-0 pl-12 mt-40"> */}
        <div className="container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pl-12">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="flex mt-20 gap-6 ">
            <button
              className="flex gap-2 justify-center items-center px-6 py-2  font-semibold   bg-slate-100 rounded hover:opacity-80  "
              onClick={() => navigate("/player")}
            >
              <FaPlay className="text-2xl" /> Play
            </button>
            <button className="flex gap-2 justify-center items-center px-6 py-2  font-semibold   bg-[rgba(169,169,169,.8)] rounded text-white hover:opacity-80 ">
              <AiOutlineInfoCircle className="text-2xl  " /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
