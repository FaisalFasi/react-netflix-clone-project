import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
        className={`sticky flex justify-between bg-black text-white  ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div id="left" className="flex items-center gap-12 m-6">
          <div className="w-40">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex gap-8">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name} </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="right" className=" flex items-center gap-6 m-6">
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
