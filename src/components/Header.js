import React from "react";
import logo from "../assets/evangadi-logo-header.png";
import { Link } from "react-router-dom";
import { useAppData } from "../App";

function Header() {
  const { state, dispatch } = useAppData();
  return (
    <>
      <nav className="container-fluid navbar bg-[rgb(132,125,125)] shadow-lg border-t-4 border-orange-200">
        <div className="container md:max-w-[1000px] h-[70px] p-3 md:m-auto md:flex md:justify-between sm:block ">
          <Link to="/home">
            <div className="nav-item nav-btn m-2 pb-3">
              <img
                src={logo}
                className="h-[30px] mb-3"
                alt="Evangadi logo image"
              />
            </div>
          </Link>
          <div className="md:flex md:justify-between sm:block">
            <div className="m-3">
              <Link to="/home">Home</Link>
            </div>
            <div className="m-3">
              <Link to="">How it works</Link>
            </div>
            <div className="m-2">
              {!state.user ? (
                <Link to="">
                  <button className="text-white bg-blue-700 hover:bg-orange-800 rounded-md px-6 py-2">
                    SIGN IN
                  </button>
                </Link>
              ) : (
                <p
                  className="text-white bg-orange-700 hover:bg-blue-800 rounded-md px-4 py-2"
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                  }}
                >
                  LOG OUT
                </p>
              )}
            </div>

            <div className="m-1">
              <Link to=""></Link>
            </div>
          </div>
        </div>
        <div className="sm:block md:hidden "></div>
      </nav>
    </>
  );
}

export default Header;
