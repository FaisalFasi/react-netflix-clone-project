import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase-configs";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();

  const [{ email, password }, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

        if (response.user) {
          navigate("/");
          setFormValues((prevValues) => ({ ...prevValues, password: "" }));
        } else {
          alert("Authentication failed. Please check your email and password.");
        }
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          alert("User not found. Please check your email.");
        } else if (error.code === "auth/wrong-password") {
          alert("Wrong password. Please check your password.");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }
    } else {
      alert("Please enter a valid email and password.");
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className=" min-h-screen relative">
      <BackgroundImage />
      <div className="absolute bgContainer top-0 left-0 h-full w-full  bg-black bg-opacity-60">
        <Header signup />
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div
            id="formLogin"
            className="width-100-percent flex flex-col items-center gap-5 text-white text-center  "
          >
            <div
              className={`w-80 py-12 flex flex-col justify-center items-center border-none rounded px-12 `}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
              <h3 className=" text-3xl  font-bold">Login</h3>
              <form action="">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="emailInput  border text-black border-black rounded px-2  w-56 py-1 mt-6 "
                  value={email}
                  onChange={(e) =>
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="passwordInput border border-black rounded w-56 px-2 py-1 text-black mt-6"
                  value={password}
                  onChange={(e) =>
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  autoComplete="off"
                />
              </form>

              <div className="w-full mt-6 ">
                <button
                  className=" w-full bg-red-600 text-white rounded px-4 py-2    "
                  onClick={handleLogin}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
