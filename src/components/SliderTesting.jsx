import { useRef, useState } from "react";
import Photos from "./Images.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

const SliderTesting = ({ data, title }) => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      //   if (element.scrollLeft === 0) {
      //     setArrowDisable(true);
      //   } else {
      //     setArrowDisable(false);
      //   }
    }, speed);
  };

  return (
    <>
      <div className="flex justify-between text-white">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          className="w-20 h-10 bg-white text-black mt-20 "
          //   disabled={arrowDisable}
        >
          Left
        </button>
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          Right
        </button>
      </div>
      <div
        className="img-container flex overflow-hidden w-full ml-4"
        ref={elementRef}
      >
        {data.map((movie, index) => {
          return <Card moviesData={movie} index={index} key={movie.id} />;
        })}
      </div>
    </>
  );
};
export default SliderTesting;
