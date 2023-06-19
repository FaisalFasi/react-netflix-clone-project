import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase-configs";

import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./signup.css";

import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      if (password.length > 5)
        await createUserWithEmailAndPassword(firebaseAuth, email, password);

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if (currentUser) {
  //       navigate("/login");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div className=" min-h-screen relative">
      <BackgroundImage />
      <div className="absolute bgContainer top-0 left-0 h-full w-full  bg-black bg-opacity-60">
        <Header login />
        <div className="formController flex flex-col justify-center items-center gap-4 ">
          <div className="flex flex-col gap-5 text-white text-center">
            <h1 className="xl:text-7xl lg:text-5xl md:text-3xl sm:text-xs font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="xl:text-5xl lg:text-3xl md:text-xl sm:text-xs font-semibold">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className="xl:text-lg lg:text-md md:text-sm sm:text-xs font-semibold">
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          {/* ${!showPassword ? "flex-row" : "flex-row"} */}
          <div className={`formController flex justify-center flex-row  `}>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="emailInput  border border-black rounded px-2 py-4 "
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="passwordInput border border-black rounded px-2 py-4"
                minLength={6}
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword && (
              <button
                className="bg-red-600 text-white rounded py-4 px-12"
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                Get Started
              </button>
            )}
          </div>
          <button
            className="bg-red-600 text-white mt-2 rounded px-6 py-2"
            onClick={handleSignIn}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
