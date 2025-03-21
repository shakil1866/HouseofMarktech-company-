import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "#About",
    },
    {
      id: 3,
      title: "Services",
      link: "#Service",
    },
    {
      id: 4,
      title: "Contact",
      link: "#Contact",
    },
  ];

  // Toggle mobile menu visibility
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to hide mobile menu
  const hideMenu = () => {
    setIsMenuOpen(false); // Hide the mobile menu
  };

  return (
    <>
      {/* main Navbar */}
      <nav className="p-3 flex justify-between items-center sticky  top-0 left-0 w-full bg-blue-500 md:bg-amber-500 shadow-md z-10">
        {/* Logo */}
        <a>
          <img
            className="object-cover max-w-[200px] max-h-[60px]"
            src="./logo.png"
            alt="Public Image"
          />
        </a>

        {/* Navigation Menu (Desktop) */}
        <div>
          <ul className="hidden md:flex items-center gap-6 text-xl font-semibold uppercase text-white">
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-red-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden" onClick={handleMenu}>
          <IoMenu className="text-2xl" />
        </button>
      </nav>

      {/* Mobile Navigation (Hidden by Default) */}
      {isMenuOpen && (
        <div
          id="hide"
          className="fixed md:hidden bg-blue-500 inset-0 p-3 z-20"
        >
          <div className="flex justify-between">
            <a>
              <img
                className="object-cover max-w-[200px] max-h-[60px]"
                src="./logo.png"
                alt="Public Image"
              />
            </a>
            <button className="md:hidden" onClick={handleMenu}>
              <IoClose className="text-2xl" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-6 text-xl font-semibold uppercase text-white">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-red-300 font-semibold"
                      onClick={hideMenu} // Hide the menu when a link is clicked
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
