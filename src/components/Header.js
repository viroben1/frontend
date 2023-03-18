import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";

import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-violet-500">
      {/* desktop */}

      <div className="flex items-center h-full justify-between ">
        <Link to={""}>
          <div className="h-10  ">
            <img src={logo} className="h-full " alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-fuchsia-400 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center "></div>
          </div>
          <div className=" text-yellow-200" onClick={handleShowMenu}>
            <div className=" text-3xl font-bold cursor-pointer ">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className=" absolute  right-2 text-white py-2 px-2 shadow drop-shadow-md bg-rose-200 font-bold">
                <p className=" whitespace-nowrap cursor-pointer">New product</p>
                <p className=" whitespace-nowrap cursor-pointer">Login</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
