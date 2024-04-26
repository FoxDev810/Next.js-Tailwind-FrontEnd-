"use client";
import React from "react";
import Image from "next/image";
import { arch, mont, poppin } from "@/fonts/fonts";
import Link from "next/link";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full justify-center bg-neutral-1">
      <div className="relative flex items-center justify-center 2xsm:w-full 1sm:w-4/5">
        <div className="shadow-2 flex w-full flex-grow items-center p-4 2xsm:justify-between 2xsm:space-x-2 1sm:space-x-16 1lg:justify-center">
          <ul
            className={`items-center space-x-8 text-base font-semibold text-white ${mont.className} 2xsm:hidden 1lg:flex`}
          >
            <li>Builds</li>
            <li>Events</li>
          </ul>
          <div className="flex gap-1">
            <Image
              src={"./images/logo.png"}
              alt="landing page logo"
              width={145}
              height={94}
              className="2xsm:h-[55px] 2xsm:w-[105px]  1xl:h-full 1xl:w-full"
            />
          </div>
          <ul
            className={`items-center space-x-8 text-base font-semibold text-white ${mont.className} 2xsm:hidden 1lg:flex`}
          >
            <li>Communities</li>
            <li>Support</li>
          </ul>
          <Link
            href={"#"}
            className={`${poppin.className} absolute right-0 cursor-pointer rounded-full border border-white px-4 py-2 text-base text-white 2xsm:hidden 1lg:flex`}
          >
            Start Exploring
          </Link>
          <div className="items-center gap-2 2xsm:flex sm:gap-4 1lg:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="border-stroke dark:border-strokedark dark:bg-boxdark z-99999 block rounded-sm border bg-white p-1.5 shadow-sm 1lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!w-full delay-300"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!h-0 !delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !props.sidebarOpen && "!h-0 !delay-200"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
