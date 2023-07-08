import Slider from "../components/Slider";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase-configs";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Navbar from "../components/Navbar";
// import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";

export default function TVShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    // console.log(movies);
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);
  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate("/tv");
  // });

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="navbar text-white"></div>
      <div className="data mt-32">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? (
          <Slider movies={movies} />
        ) : (
          <h1 className="not-available">
            No TV Shows avaialble for the selected genre. Please select a
            different genre.
          </h1>
        )}
      </div>
    </Container>
  );
}
const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
