import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase-configs";
import { useState } from "react";
import Header from "../components/Header";
// import "./signup.css";

import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();
  const handleGetStarted = () => {
    if (isEmailValid) {
      setShowPassword(true);
      // navigate("/login");
    } else {
      alert("Please enter a valid email");
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      if (password.length > 5) {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);

        navigate("/login");
        console.log("sign up complete");
      } else {
        alert("Please enter password atleast 6 character long");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" min-h-screen bg-my-image bg-cover">
      <div className="min-h-screen w-full bg-black bg-opacity-60 bg-cover ">
        <Header login />
        <div className="md:pt-20">
          <div className="flex flex-col items-center text-center mt-20 px-8 text-white">
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold">
              Unlimited movies, TV shows and more
            </h1>
            <p className="mt-2 text-md md:text-lg font-normal">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="mt-6 text-sm md:text-md font-normal">
              Ready to watch? Enter your email to create or restart membership
            </p>
          </div>
          <form onSubmit={handleSignIn} method="post">
            <div className="flex flex-col items-center justify-center md:flex-row gap-2 mt-10 px-8 text-black">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-[80%] md:w-[50%] emailInput  border border-black rounded px-2 py-4 "
                value={formValues.email}
                onChange={handleEmailChange}
                required
              />
              {showPassword ? (
                <div className="w-full justify-center">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength={6}
                    className="passwordInput border border-black text-black rounded px-2 py-4"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    autoComplete="username"
                  />
                  <button
                    className="text-center bg-red-600 text-white mt-2 rounded px-6 py-4"
                    // type="submit"
                    // onClick={handleSignIn}
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <button
                  className=" w-[140px] bg-red-600 text-white rounded py-4 px-2 md:px-6"
                  onClick={() => {
                    handleGetStarted();
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="flex flex-col gap-5 text-white text-center">
<h1 className="xl:text-7xl lg:text-5xl md:text-3xl sm:text-xs font-bold">
  Unlimited movies, TV shows and more
</h1>
<h4 className="xl:text-5xl lg:text-3xl md:text-xl sm:text-xs font-semibold">
  Watch anywhere. Cancel anytime.
</h4>
<h6 className="xl:text-lg lg:text-md md:text-sm sm:text-xs font-semibold">
  Ready to watch? Enter your email to create or restart membership
</h6>
</div> */
}
