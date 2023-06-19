import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utilities/firebase-configs";
import { signOut } from "firebase/auth";

export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", link: "/tv" },
    { name: "TV Shows", link: "/movies" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div>
      <nav
        className={`fixed top-0 flex w-screen justify-between text-white ease-in-out duration-500  ${
          isScrolled
            ? "bg-[rgba(0,0,0,1)]"
            : "bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <div
          id="left"
          className="flex items-center gap-4 lg:gap-12 pl-6 md:pl-12 mt-4"
        >
          <div className="w-20 md:w-24 lg:w-36">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex items-center gap-2 md:gap-4 lg:gap-8 sm:text-xs md:text-sm lg:text-lg">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name} </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          id="right"
          className=" flex items-center gap-6 pr-12 md:pr-12  mt-4"
        >
          <div className={`flex gap-2 ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            {showSearch ? (
              <input
                type="text"
                placeholder="Search"
                id="searchInput"
                className="text-black px-2"
                onMouseEnter={() => setInputHover(true)}
                onMouseLeave={() => setInputHover(false)}
                onBlur={() => {
                  setShowSearch(false);
                  setInputHover(false);
                }}
              />
            ) : (
              ""
            )}
          </div>
          <button
            onClick={() => {
              signOut(firebaseAuth);
            }}
          >
            <FaPowerOff className="text-red-600" />
          </button>
        </div>
      </nav>
    </div>
  );
}