import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/song-1.mp4";
import { IoPlayBackCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function Card({ index, moviesData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative  bg-red-500   hover:z-10 h-40
          w-sm-40 w-72 cursor-pointer text-white  `}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${moviesData.image}`}
          alt="movie"
          className="border border-r-2 w-full z-20 "
        />
      </div>

      {isHovered && (
        <div
          className="hover absolute  left-0  top-[-80px] z-20 w-80  h-max-content  border-r-2 shadow-lg bg-gray-800 transition ease-in-out duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="image-video-continer relative flex h-40 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${moviesData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
              className="w-full h-36 object-cover border-r-1 z-20 absolute"
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
              className="w-full h-36 object-cover z-30 absolute"
            />
          </div>
          <div className="info-container w-full p-2 gap-1">
            <h3 className="name  w-full" onClick={() => navigate("/player")}>
              {moviesData.name}
            </h3>
            <div className="icons flex justify-between ">
              <div className="controls flex gap-2">
                <IoPlayBackCircleSharp
                  title="play"
                  onClick={() => "/play"}
                  className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                />
                <RiThumbUpFill
                  title="Like"
                  className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                />
                <RiThumbDownFill
                  title="Dislike"
                  className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                />
                {isLiked ? (
                  <BsCheck
                    title="Remove from List"
                    className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                  />
                ) : (
                  <AiOutlinePlus
                    title="Add to my list "
                    className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                  />
                )}
              </div>
              <div className="info ">
                <BiChevronDown
                  title="More Info "
                  className="text-2xl cursor-pointer transition ease-in-out hover:text-[rgb(184,184,184)]"
                />
              </div>
            </div>
            <div className=" genres flex">
              <ul className="flex w-auto list-disc  list-inside flex-wrap pl-4 mt-2 ">
                {moviesData.genres.map((genre) => (
                  <li key={genre} className=" first:list-none pr-4 text-xs ">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
