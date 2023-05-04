/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const auth = getAuth();

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password, Try again");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address");
        } else {
          setError(error.message);
        }
      });
  };

  // sign in With google
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // sign in with github
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-8">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-700"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <FaEye className="w-5 h-5" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="label">
                  <p className="label-text">
                    New to FoodieFrenzy? Please{" "}
                    <Link className="link" to="/register">
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#71bd46] border-[#71bd46] hover:bg-[#a8d969]">
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="text-red-400">{error}</p>
        </div>
        <div className="flex justify-center flex-col lg:flex-row">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mb-2 lg:mr-2 lg:mb-0"
            onClick={signInWithGoogle}
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"
            onClick={signInWithGithub}
          >
            <FaGithub className="mr-2" />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
