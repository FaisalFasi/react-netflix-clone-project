import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import React, { useRef, useState } from "react";
export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [arrowDisable, setArrowDisable] = useState(true);

  const elementRef = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const handleDirection = (direction) => {
    const containerWidth = elementRef.current.offsetWidth; // Width of the container
    const totalCardsWidth = data.length * CARD_WIDTH; // Total width of all the cards
    const maxPositions = Math.ceil(
      (totalCardsWidth - containerWidth) / containerWidth
    ); // Maximum scrollable positions

    if (direction === "left" && sliderPosition > 0) {
      const newPosition = sliderPosition - 1;
      const translateX = -newPosition * containerWidth;
      elementRef.current.style.transform = `translateX(${translateX}px)`;
      setSliderPosition(newPosition);
    }
    if (direction === "right" && sliderPosition < maxPositions) {
      const newPosition = sliderPosition + 1;
      const translateX = -newPosition * containerWidth;
      elementRef.current.style.transform = `translateX(${translateX}px)`;
      setSliderPosition(newPosition);
    }
  };

  return (
    <div className="relative text-white ">
      <h1 className="ml-10 text-lg font-semibold">{title}</h1>
      <div
        className="  flex items-center mb-6 ml-10 pt-2  "
        style={{ width: "max-content", transform: "translateX(0px)" }}
        ref={elementRef}
      >
        {data.map((movie, index) => {
          return <Card moviesData={movie} index={index} key={movie.id} />;
        })}
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button onClick={() => handleDirection("left")}>
          <AiOutlineLeft className="cursor-pointer text-5xl font-bold" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button onClick={() => handleDirection("right")}>
          <AiOutlineRight className="cursor-pointer text-5xl font-bold" />
        </button>
      </div>
    </div>
  );
}
// onClick={() => {
//   handleHorizantalScroll(elementRef.current, 25, 100, 10);
// }}
// return (
//   <div className="relative w-full h-full">
//     <h1 className="text-white ml-20 mb-1 mt-6 text-lg font-semibold z-20">
//       {title}
//     </h1>

//     {/*  movies are being displayed here */}
//     <div
//       className="flex justify-center items-center p-4 gap-2 z-50 h-full py-1 overflow-hidden w-full"
//       ref={listRef}
//     >
//       {data.map((movie, index) => {
//         return <Card moviesData={movie} index={index} key={movie.id} />;
//       })}
//     </div>
//     {/*   wrapper */}
//     <div
//       className=" flex justify-center w-full    text-white ml-10 "
//       style={{ width: "fit-content" }}
//       onMouseEnter={() => setShowControls(true)}
//       onMouseLeave={() => setShowControls(false)}
//     >
//       {/* left arraw */}
//       <button
//         className={`absolute left-0 z-20 transform transition duration-300 ease-in-out h-40
//           bg-[rgba(86,86,86,0.2)]  flex justify-center items-center  ${
//             !showControls ? "hidden" : ""
//           }`}
//         onClick={() => handleHorizontalSlider(listRef.current, 25, 100, -10)}
//       >
//         <AiOutlineLeft
//           // onClick={() => handleDirection("left")}
//           className=" cursor-pointer  text-5xl font-bold "
//         />
//       </button>

//       {/* right arraw */}
//       <button
//         className={`absolute right-0 z-50 transform transition duration-300 ease-in-out h-40
//         bg-[rgba(139,139,139,0.4)]  flex justify-center items-center ${
//           !showControls ? "hidden" : ""
//         }`}
//         onClick={() => handleHorizontalSlider(listRef.current, 25, 100, 10)}
//       >
//         <AiOutlineRight
//           // onClick={() => handleDirection("right")}
//           className=" cursor-pointer  text-5xl font-bold "
//         />
//       </button>
//     </div>
//   </div>
// );
