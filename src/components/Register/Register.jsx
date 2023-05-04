/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter.");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers.");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Please add at least one special character.");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password.");
      return;
    }

    if (!/\b(https?:\/\/\S+\.(?:jpg|jpeg|gif|png)\b)/i.test(photo)) {
      setError("Please input valid photo url");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");
        event.target.reset();
        setSuccess("User has created successfully");
        handleLogOut();
        // sendVerificationEmail(result.user);
        updateUserData(result.user, name, photo);
        
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setError("Please add at least 6 characters in your password");
        } else if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address");
        } else {
          setError(error.message);
        }
      });
  };
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  // const sendVerificationEmail = (user) => {
  //   sendEmailVerification(user).then((result) => {
  //     console.log(result);
  //     alert("Please verify your email address");
  //   });
  // };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-8">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text">
                    New to FoodieFrenzy? Please{" "}
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#71bd46] border-[#71bd46] hover:bg-[#a8d969]">
                  Register
                </button>
              </div>
            </div>
          </form>
          <p className="text-error">{error}</p>
          <p className="text-[#71bd46]">{success}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
