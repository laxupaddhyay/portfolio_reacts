import React from "react";
import Logo from "../assets/laxupaddhyay-logo.svg";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            {<img  className="w-36" src={Logo} alt="" /> }
          </a>
          {/* button */}
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
