import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import React, { useEffect, useRef, useState } from "react";
export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const listRef = useRef();
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleDirection = () => {};
  return (
    <div
      className="pb-40 overflow-x-scroll no-scrollbar flex flex-col gap-2 relative py-2  text-white"
      onMouseDown={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="mb-1 ml-12 text-2xl font-bold"> {title}</h1>
      <div className="wrapper  w-max-content gap-2 transform translate-x-0 transit duration-100 ease-in-out ml-12 ">
        <div
          className={`flex justify-center items-center ${
            !showControls ? "" : ""
          }`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div
          className="flex gap-2 slider absolute z-50 h-full top-0 bottom-0 "
          ref={listRef}
        >
          {data.map((movie, index) => {
            return <Card moviesData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`flex justify-center items-center ${
            !showControls ? "" : ""
          }`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  );
}
