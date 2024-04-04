import React from "react";
import logo from "../assets/evangadi-logo-footer.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  const bgColor = "#3b455a";

  return (
    <footer className="px-10 py-20" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="flex justify-center md:justify-start mt-4">
              <a href="" className="social-icon">
                <BiLogoFacebook
                  className="hover:bg-orange-700"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "0.5rem",
                    fontSize: "3rem",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "1rem",
                    margin: "0.5rem",
                  }}
                />
              </a>
              <a href="" className="social-icon">
                <AiFillInstagram
                  className="hover:bg-orange-700"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "0.5rem",
                    fontSize: "3rem",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "1rem",
                    margin: "0.5rem",
                  }}
                />
              </a>
              <a href="" className="social-icon">
                <AiFillYoutube
                  className="hover:bg-orange-700"
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "0.5rem",
                    fontSize: "3rem",
                    borderRadius: "50%",
                    border: "2px solid white",
                    padding: "1rem",
                    margin: "0.5rem",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h5 className="text-white">Useful Link</h5>
            <ul>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h5 className="text-white">Contact Info</h5>
            <ul>
              <li className="text-gray-400">Evangadi Networks</li>
              <li className="text-gray-400">support@evangadi.com</li>
              <li className="text-gray-400">+1-202-386-2702</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
