import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Player from "./components/Player";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/player" element={<Player />}></Route>

          <Route exact path="/" element={<Netflix />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
