import React, { useState } from "react";

import logo from "../../assets/landing/assets/logo.svg";

import navLinks from "../../data/landing";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between  items-center py-8 lg:px-24 px-2 flex-wrap w-full">
      <div className="flex justify-center   items-center flex-wrap w-full gap-6">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-16 h-4" />
          </a>
        </div>
        <div className="flex ">
          <ul className="flex justify-center items-center  flex-wrap ">
            {navLinks.map((link, id) => {
              return (
                <li className="mr-8" key={id}>
                  <a href={link.path} className="">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
