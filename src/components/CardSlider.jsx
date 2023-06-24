import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import React, { useRef, useState } from "react";
export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);

  const [arrowDisable, setArrowDisable] = useState(true);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="relative text-white">
        <h1 className="ml-10 text-lg font-semibold">{title}</h1>
        <div className="relative flex items-center h-full ">
          {/* left arrow  */}
          <AiOutlineLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />

          {/* movies displaying here  */}
          <div
            id="slider"
            className="flex gap-2 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-2"
          >
            {data.map((movie, index) => {
              return <Card moviesData={movie} index={index} key={movie.id} />;
            })}
          </div>
          {/* right arrow  */}
          <AiOutlineRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
}
// const elementRef = useRef(null);

// const handleHorizantalScroll = (element, speed, distance, step) => {
//   let scrollAmount = 0;
//   const slideTimer = setInterval(() => {
//     element.scrollLeft += step;
//     scrollAmount += Math.abs(step);
//     if (scrollAmount >= distance) {
//       clearInterval(slideTimer);
//     }
//   }, speed);
// };
// const handleDirection = (direction) => {
//   const containerWidth = elementRef.current.offsetWidth; // Width of the container
//   const totalCardsWidth = data.length * CARD_WIDTH; // Total width of all the cards
//   const maxPositions = Math.ceil(
//     (totalCardsWidth - containerWidth) / containerWidth
//   ); // Maximum scrollable positions

//   if (direction === "left" && sliderPosition > 0) {
//     const newPosition = sliderPosition - 1;
//     const translateX = -newPosition * containerWidth;
//     elementRef.current.style.transform = `translateX(${translateX}px)`;
//     setSliderPosition(newPosition);
//   }
//   if (direction === "right" && sliderPosition < maxPositions) {
//     const newPosition = sliderPosition + 1;
//     const translateX = -newPosition * containerWidth;
//     elementRef.current.style.transform = `translateX(${translateX}px)`;
//     setSliderPosition(newPosition);
//   }
// };

// return (
//   <div className="relative text-white ">
//     <h1 className="ml-10 text-lg font-semibold">{title}</h1>
//     <div
//       className="  flex items-center mb-6 ml-10 pt-2  "
//       style={{ width: "max-content", transform: "translateX(0px)" }}
//       ref={elementRef}
//     >
//       {data.map((movie, index) => {
//         return <Card moviesData={movie} index={index} key={movie.id} />;
//       })}
//     </div>
//     <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50">
//       <button onClick={() => handleDirection("left")}>
//         <AiOutlineLeft className="cursor-pointer text-5xl font-bold" />
//       </button>
//     </div>
//     <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50">
//       <button onClick={() => handleDirection("right")}>
//         <AiOutlineRight className="cursor-pointer text-5xl font-bold" />
//       </button>
//     </div>
//   </div>
// );
