import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/song-1.mp4";
import { IoPlayBackCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { API_KEY } from "../utilities/constants";

export default React.memo(function Card({
  index,
  moviesData,
  isLiked = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Container
      className="w-[120px] md:w-[230px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${moviesData.image}`}
        alt="card"
        onClick={() => navigate("/player")}
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-continer">
            <img
              src={`https://image.tmdb.org/t/p/w500${moviesData.image}`}
              alt="card"
              onClick={() => navigate("/player")}
            />
            {moviesData.videoURL ? (
              <video
                src={`https://api.themoviedb.org/3/movie/${moviesData.id}/videos?api_key=${API_KEY}`}
                autoPlay={true}
                loop
                muted
                onClick={() => navigate("/player")}
              />
            ) : (
              ""
            )}
          </div>
          <div className="info-container flex flex-col gap-2">
            <h3 onClick={() => navigate("/player")}>{moviesData.name}</h3>

            <div className="icons flex justify-between">
              <div className="controls flex  ">
                <IoPlayBackCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />

                <RiThumbUpFill title="Like" />

                <RiThumbDownFill title="Dislike" />

                {isLiked ? (
                  <BsCheck title="Remove from List" />
                ) : (
                  <AiOutlinePlus title="Add to my list " />
                )}
              </div>

              <div className="info ">
                <BiChevronDown title="More Info " />
              </div>
            </div>

            <div className=" genres flex">
              <ul className="flex  ">
                {moviesData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
});
const Container = styled.div`
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 90;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-continer {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
