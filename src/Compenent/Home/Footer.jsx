import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#1E88E5", color: "#FFFFFF" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="footer-title" style={{ fontSize: "1.5rem" }}>Suivez-nous</h4>
            <ul className="social-media-links" style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="https://www.facebook.com/" target="_blank" style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
                  <BsFacebook />
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="https://twitter.com/" target="_blank" style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
                  <BsTwitter />
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="https://www.linkedin.com/in/amal-guizeni-a73a00256/" target="_blank" style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
                  <BsLinkedin />
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="https://www.instagram.com/" target="_blank" style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>
                  <BsInstagram />
                </a>
              </li>
            </ul>
            <p style={{ fontSize: "1rem" }}>
              &copy; {new Date().getFullYear()} - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
