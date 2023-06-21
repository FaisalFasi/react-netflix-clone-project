import { useEffect } from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div className="mt-[-160px]">
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
}
