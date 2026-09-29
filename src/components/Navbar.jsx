import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { CiChat1 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [hamActive, setHamActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home",     link: "home"    },
    { name: "About",    link: "about"   },
    { name: "Projects", link: "project" },
    { name: "Skills",   link: "skills"  },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
  };

  return (
    <header
      className={`flex items-center justify-between px-[5vw] lg:px-[7vw] py-4 fixed left-0 right-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white"
        }`}
    >
      {/* Logo */}
      <h1 className="text-3xl font-medium logo text-main cursor-pointer select-none">Sumit.</h1>

      {/* Desktop nav */}
      <nav className="flex gap-10 items-center max-md:hidden">
        <ul className="flex gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              className="listItems cursor-pointer"
              activeClass="active"
              to={link.link}
              {...linkProps}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <Link to="contact" {...linkProps}>
          <button className="btn cursor-pointer">
            <CiChat1 className="h-5 w-5" /> Contact Me
          </button>
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <div className="hidden max-md:block relative">
        {!hamActive ? (
          <GiHamburgerMenu
            onClick={() => setHamActive(true)}
            className="h-8 w-8 text-slate-800 cursor-pointer"
          />
        ) : (
          <ImCross
            onClick={() => setHamActive(false)}
            className="h-6 w-8 text-slate-800 cursor-pointer"
          />
        )}

        {hamActive && (
          <ul className="flex flex-col gap-3 absolute right-0 top-12 bg-white border rounded-xl shadow-xl p-5 min-w-[200px] z-50">
            {links.map((link, index) => (
              <Link
                key={index}
                className="listItems border border-main text-main hover:bg-main hover:text-white p-3 rounded-lg cursor-pointer transition-colors duration-150"
                activeClass="active"
                to={link.link}
                {...linkProps}
                onClick={() => setHamActive(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              {...linkProps}
              onClick={() => setHamActive(false)}
            >
              <button className="btn w-full justify-center cursor-pointer mt-1">
                <CiChat1 className="h-5 w-5" /> Contact Me
              </button>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Navbar;
