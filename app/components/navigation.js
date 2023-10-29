"use client"

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo1963.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex items-center h-max-[6vh] hw-full bg-slate-800`}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block w-full py-5">
              
              <Image
                src={Logo}
                alt="logo"
                width="110"
                height="60"
                className="w-16 h-8"
              />
              
            </a>
          </div>
          <div className="bg-slate-800 flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute bg-slate-600 right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`bg-slate-800 absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-slite-800 py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-[1.33rem] text-red-500 hover:text-slate-200 hover:border-b-2 hover:border-slate-200 hover:scale-110 hover:translate-x-3 hover:-translate-y-1"
                    NavLink="/"
                  >
                    Home
                  </ListItem>
                  <ListItem
                   navItemStyles="text-[1.33rem] text-amber-500 hover:text-slate-200 hover:border-b-2 hover:border-slate-200 hover:scale-110 hover:translate-x-3 hover:-translate-y-1"
                    NavLink="/Wohin"
                  >
                    Wohin?
                  </ListItem>
                  <ListItem
                  navItemStyles="text-[1.33rem] text-amber-500 hover:text-slate-200 hover:border-b-2 hover:border-slate-200 hover:scale-110 hover:translate-x-3 hover:-translate-y-1"
                    NavLink="/Info"
                  >
                    Info Hotel
                  </ListItem>
                  <ListItem
                   navItemStyles="text-[1.33rem] text-amber-500 hover:text-slate-200 hover:border-b-2 hover:border-slate-200 hover:scale-110 hover:translate-x-3 hover:-translate-y-1"
                    NavLink="/#"
                  >
                    Impressum
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2  text-2xl font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};

