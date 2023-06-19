import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/song-1.mp4";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="player w-screen h-screen ">
        <div className="back absolute p-2 z-1 ">
          <BsArrowLeft />
        </div>
        <video
          src={video}
          autoPlay
          loop
          controls
          muted
          className="h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
}
