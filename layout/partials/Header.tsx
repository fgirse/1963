"use client";

import Logo from "../../app/components/Logo1963";
import ThemeSwitcher from "../../app/components/ThemeSwitcher";
import config from "../../app/config/config.json";
import menu from "../../app/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Navigation from"../partials/Header";
const Header = () => {

  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container flex flex-row justify-between items-center">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
    
       
        <div className="order-1 ml-auto flex flex-row-reverse items-center md:order-2 lg:ml-0">
          <ThemeSwitcher className="mr-5" />
        </div>
        <Navigation/>
      </nav>
    </header>
  );
};

export default Header;