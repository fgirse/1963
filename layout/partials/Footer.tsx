"use client";

import Logo from "../../app/components/Logo1963";
import Social from "../../app/components/Social";
import config from "../../app/config/config.json";
import menu from "../../app/config/menu.json";
import social from "../../app/config/social.json";
import { markdownify } from "../../lib/utils/textConverter";
import Link from "next/link";
import { Phudu } from "next/font/google";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="text-slate-50">
      <div className="container">
        <div className="row items-center py-10">
          <div className="mb-8 text-slate-100 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mt-5 mb-8 text-slate-2200 text-center lg:col-6 lg:mb-5">
            <ul>
              {menu.footer.map((menu) => (
                <li className="m-3 te inline-block" key={menu.name}>
                  <Link className="" href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-amber-500 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons text-slate-200" />
          </div>
        </div>
      </div>
      <div className="border-t-1 border-border py-1 :border-mode-border">
      
^
        <div className=" copyright text-[1rem] font-medium text-center text-gray-600 :text-gray-400">
          Copyright © {new Date().getFullYear()}. All rights by{" "}
         {/*} <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
              </a>{" "}*/}
           <span className=" font-phudu">MEDICUS DESIGN{" "}</span>
          <a
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener ">
           4058 Basel🇨🇭
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
