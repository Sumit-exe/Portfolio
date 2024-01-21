import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiChat1 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [hamActive, setHamActive] = useState(false);

  const handleHamburger = () => {};

  const links = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Projects",
      link: "project",
    },
    {
      name: "Skills",
      link: "skills",
    },
  ];

  return (
    <header className="flex items-center justify-around bg-white py-4 fixed left-0 right-0 top-0">
      <h1 className="text-4xl font-medium logo text-main">Sumit.</h1>
      <div className="flex gap-10 items-center max-md:hidden">
        <ul className="flex gap-10 ">
          {links.map((link, index) => (
            <Link
              key={index}
              className="listItems"
              activeClass="active"
              to={link.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="btn">
            <CiChat1 className=" font-bold h-8 w-8 " /> Contact Me
          </button>
        </Link>
      </div>

      <div className="hidden max-md:block  relative">
        {!hamActive ? (
          <GiHamburgerMenu
            onClick={() => setHamActive(!hamActive)}
            className="h-10 w-10 text-slate-800 "
          />
        ) : (
          <ImCross
            onClick={() => setHamActive(!hamActive)}
            className="h-7 w-10 text-slate-800 "
          />
        )}

        {hamActive ? (
          <ul className="flex flex-col gap-3 absolute right-0 top-12 bg-white border-2 rounded-lg p-5">
            {links.map((link, index) => (
              <Link
                key={index}
                className="listItems border-main border text-main hover:bg-main hover:text-white p-3 rounded-md w-[14rem]"
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="btn w-full justify-center">
                <CiChat1 className=" font-bold h-8 w-8 " /> Contact Me
              </button>
            </Link>
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
