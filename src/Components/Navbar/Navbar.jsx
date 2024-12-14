import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div data-aos="fade" className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>

          {/* Navlinks Section */}
          <ul className="hidden lg:flex space-x-4 text-xl">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Where to find</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div
            // className="lg:hidden"
            onClick={() => setSidebar(!sidebar)}
            role="button"
            aria-label="Toggle sidebar menu"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && setSidebar(!sidebar)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
