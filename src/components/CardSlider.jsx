import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import React, { useEffect, useRef, useState } from "react";
export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const listRef = useRef();
  useEffect(() => {
    // console.log(data);
  }, [data]);

  const handleDirection = () => {};

  return (
    <div
      className="relative flex flex-col gap-2  py-2  text-white  "
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* movies generic title */}
      <h1 className="mb-1 ml-12 text-2xl font-bold"> {title}</h1>

      {/*   wrapper */}
      <div className="_wrapper_left_arrow flex justify-center items-center w-full">
        {/* left arraw */}
        <div
          className={`absolute left-0 z-50 transform transition duration-300 ease-in-out   ml-12 ${
            !showControls ? "hidden" : ""
          }`}
        >
          <AiOutlineLeft
            onClick={() => handleDirection("left")}
            className=" cursor-pointer  text-5xl font-bold "
          />
        </div>

        {/*  movies are being displayed here */}
        <div
          className="flex justify-start gap-2 z-10 h-full  ml-6"
          ref={listRef}
        >
          {data.map((movie, index) => {
            return <Card moviesData={movie} index={index} key={movie.id} />;
          })}
        </div>

        {/* right arraw */}
        <div
          className={`absolute right-0 z-50 transform transition duration-300 ease-in-out   mr-12 ${
            !showControls ? "hidden" : ""
          }`}
        >
          <AiOutlineRight
            onClick={() => handleDirection("right")}
            className=" cursor-pointer  text-5xl font-bold "
          />
        </div>
      </div>
    </div>
  );
}
