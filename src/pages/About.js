import React from "react";
import Login from "../components/Login";
import { useAppData } from "../App";
import Home from "./Home";
import "tailwindcss/tailwind.css";
import backgroundImg from "../assets/background.svg";

function About() {
  const { state } = useAppData();

  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <Home />
      </>
    );
  }

  return (
    <section
      className="bg-no-repeat pt-20 pb-8 md:pb-16" // Removed mb-10 from here
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
      }}
    >
      <div className="container px-5 md:px-0 mx-auto md:max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-12 col-md-5 shadow-md auth mx-4 md:mx-0 bg-white rounded-lg py-6 px-8">
            <p className="text-danger text-center mb-6">{state.alert}</p>
            <div className="">
              <Login />
            </div>
          </div>
          <div className="col-12 col-md-6 explained px-4 md:px-0">
            <p className="text-orange-500 mb-2">About</p>
            <h1 className="mb-6">
              <span
                className="text-4xl font-bold"
                style={{
                  background: `linear-gradient(to right, rgb(211, 59, 0), rgb(151, 41, 0))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Evangadi Networks
              </span>
            </h1>

            <p className="text-gray-700 mb-4">
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
            <button className="bg-orange-500 text-white rounded-md py-2 px-6">
              HOW IT WORKS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
