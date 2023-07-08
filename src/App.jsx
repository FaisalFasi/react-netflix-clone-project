import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Player from "./components/Player";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";

function App() {
  return (
    <>
      {/* <Test /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/player" element={<Player />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route exact path="/tv" element={<TVShows />}></Route>
          <Route exact path="/" element={<Netflix />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
