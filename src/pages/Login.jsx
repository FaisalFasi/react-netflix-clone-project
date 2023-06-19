import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase-configs";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./signup.css";

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    console.log(formValues);
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" min-h-screen relative">
      <BackgroundImage />
      <div className="absolute bgContainer top-0 left-0 h-full w-full  bg-black bg-opacity-60">
        <Header login />
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div
            id="formLogin"
            className="width-100-percent flex flex-col items-center gap-5 text-white text-center  "
          >
            <div
              className={`w-80 py-12 flex flex-col justify-center items-center border-none rounded  `}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
              <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-sm font-bold">
                Login
              </h3>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="emailInput  border text-black border-black rounded px-2  w-56 py-1 mt-6 "
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="passwordInput border border-black rounded w-56 px-2 py-1 text-black mt-6"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button
                className="  bg-red-600 text-white rounded w-56 py-1 mt-6 w-1/2"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
