import { useEffect, useRef, useState } from "react";
import Photos from "./Images.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import imagesUrls from "./imagesTest.js";
const SliderTesting = ({ data, title }) => {
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";
  console.log(imagesUrls);

  const sliderRef = useRef(null);
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
    // sliderRef.scrollRight = sliderRef.scrollLeft - 500;
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
    // sliderRef.scrollLeft = sliderRef.scrollLeft + 500;
  };
  // const handleHorizantalScroll = (element, speed, distance, step) => {
  //   let scrollAmount = 0;

  //   const slideTimer = setInterval(() => {
  //     element.scrollLeft += step;
  //     scrollAmount += Math.abs(step);
  //     if (scrollAmount >= distance) {
  //       clearInterval(slideTimer);
  //     }
  //     if (element.scrollLeft === 0) {
  //       setArrowDisable(true);
  //     } else {
  //       setArrowDisable(false);
  //     }
  //   }, speed);
  // };

  return (
    <>
      <div className="h-screen relative flex items-center bg-white">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          id="slider"
          className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth "
        >
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />{" "}
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />
          <img src="./src/assets/card.jpg" alt="" className=" w-40 h-40" />
          {/* {imagesUrls.map((item, idx) => (
            <img
              key={idx}
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))} */}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};
export default SliderTesting;
