import React from "react";
import "./FooterStyles.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
          <div className="footer-content">
        <h3>DOLCE</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by Sashank
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="/">dolce</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
          <li>
          <Link to='/'>Home</Link>
      </li>
      <li>
          <Link   to='/recipes'>Recipes</Link>
      </li>
      <li>
          <Link   to='/aboutUs'>AboutUs</Link>
      </li>
      <li>
          <Link   to='/careers'>Careers</Link>
      </li>
          </ul>
        </div>
      </div>
      </footer>

  );
};

export default Footer;
