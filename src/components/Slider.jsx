import { useEffect } from "react";
import CardSlider from "./CardSlider";
import SliderTesting from "./SliderTesting";
import React from "react";
export default React.memo(function Slider({ movies }) {
  useEffect(() => {}, [movies]);

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div style={{ width: "100vw", zIndex: "100" }}>
      {/* <div className="relative mt-[-80px]  w-screen "> */}

      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider
        title="Blockbaster Movies"
        data={getMoviesFromRange(20, 30)}
      />
      <CardSlider
        title="Popular on Netlfix"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
