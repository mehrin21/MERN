import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(!isMenu); // Toggle the value of isMenu
  };

  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-500 text-2xl">Real</span>
            <span className="text-slate-700 text-2xl">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <div className="hidden sm:block">
          <ul className="flex gap-4 ">
            <Link to="/">
              <li className="text-blue-500 font-semibold  cursor-pointer hover:underline">
                HOME
              </li>
            </Link>
            <Link to="/about">
              <li className="text-blue-500 font-semibold  cursor-pointer hover:underline">
                ABOUT
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
              ) : (
                <li className="text-blue-500 font-semibold  cursor-pointer hover:underline">
                  SIGN IN
                </li>
              )}
            </Link>
          </ul>
        </div>
        <div className="block sm:hidden">
          <HiMenuAlt3 onClick={handleMenu} className="text-2xl" />
          {isMenu && (
            <ul className="flex flex-col gap-4 ">
              <li className="text-blue-500 font-semibold  cursor-pointer">
                HOME
              </li>
              <li className="text-blue-500 font-semibold  cursor-pointer">
                ABOUT
              </li>
              <li className="text-blue-500 font-semibold  cursor-pointer">
                SIGN IN
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
