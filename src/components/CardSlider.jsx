import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import React, { useRef, useState } from "react";
import styled from "styled-components";

export default React.memo(function CardSlider({ data, title }) {
  const listRef = useRef();
  const sliderItemWidth = 230;
  const itemsToShow = 4;

  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleDirection = (direction) => {
    // const containerWidth = listRef.current.offsetWidth;
    const maxSliderPosition = Math.ceil(data.length / itemsToShow) - 1;
    let newPosition = sliderPosition;

    if (direction === "left" && sliderPosition > 0) {
      newPosition = sliderPosition - 1;
    } else if (direction === "right" && sliderPosition < maxSliderPosition) {
      newPosition = sliderPosition + 1;
    }

    const distance = -newPosition * (sliderItemWidth * itemsToShow);
    listRef.current.style.transform = `translateX(${distance}px)`;
    setSliderPosition(newPosition);
  };

  return (
    <Container
      className="flex flex-col text-white"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex justify-center items-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="flex slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card moviesData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex justify-center items-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  /* overflow-x: hidden; */
  width: 100vw;
  position: relative;
  gap: 1rem;
  padding: 2rem 0;

  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
