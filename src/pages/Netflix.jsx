import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";

import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/slider";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="relative bg-black overflow-x-hidden">
      <Navbar isScrolled={isScrolled}> </Navbar>

      <div className="relative  bg-contain bg-center bg-no-repeat">
        <div className="brightness-75">
          <img src={backgroundImage} alt="backgroundImage" className="w-full" />
        </div>

        <div className="absolute top-24 md:top-1/3 lg:top-1/2  left-0 transform -translate-y-1/2 text-center ml-6 md:ml-12 lg:ml-16">
          <div className="logo  w-1/2 ">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="flex items-center gap-1 md:gap-2 bg-white text-black text-xs md:text-xl lg:text-2xl font-bold px-2 lg:px-4 py-1 lg:py-2 rounded hover:opacity-80"
              onClick={() => navigate("/player")}
            >
              <FaPlay className="text-xs md:text-xl lg:text-2xl" />
              Play
            </button>
            <button className="flex items-center gap-1 bg-zinc-400 text-black  text-xs md:text-xl lg:text-2xl font-bold px-2 py-1 rounded hover:opacity-80">
              <AiOutlineInfoCircle className="text-xs md:text-2xl lg:text-3xl" />
              More Info
            </button>
          </div>
        </div>
      </div>

      <Slider movies={movies} />
    </div>
  );
}
