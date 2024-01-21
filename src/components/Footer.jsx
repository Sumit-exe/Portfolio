import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn ,FaArrowUp  } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-slate-900 p-10 w-full">
      <div className="flex justify-between items-center">
      <div className="flex justify-around items-center max-md:flex-col gap-4 max-md:items-start flex-1">
        <p>Copyright © 2024 by Sumit Sharma | All rights Reserved</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sumit-sharma-47820b216/"
            className="p-3 rounded-full shadow-md bg-slate-700 cursor-pointer hover:shadow-main"
            target="_blank"
          >
            <FaLinkedinIn className="h-6 w-6 text-gray-300 " />
          </a>
          <a
            href="https://www.instagram.com/sumit_sharmaa27/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"
            target="_blank"
            className="p-3 rounded-full shadow-md bg-slate-700 cursor-pointer hover:shadow-main"
          >
            <FaInstagram className="h-6 w-6 text-gray-300" />
          </a>
          <a
            href="https://github.com/Sumit-exe" target="_blank"
            className="p-3 rounded-full shadow-md bg-slate-700 cursor-pointer hover:shadow-main"
          >
            <FaGithub className="h-6 w-6 text-gray-300" />
          </a>
        </div>
        </div>
        <Link
          className=" p-5 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 "
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          <FaArrowUp className="text-main "/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
