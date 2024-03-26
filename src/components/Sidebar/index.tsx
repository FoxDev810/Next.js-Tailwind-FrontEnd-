"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { BsHeart, BsChevronRight, BsRecord } from "react-icons/bs";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gradient-to-b from-blue-1 to-green-2 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex flex-col items-center justify-between gap-2">
        <Link href="/">
          <div className="flex items-center justify-center gap-4 py-4">
            <span className="rounded-full border border-white border-4">
              <Image
                width={112}
                height={112}
                src={"/images/user/user-01.png"}
                alt="User"
              />
            </span>
          </div>
        </Link>
        <h1 className="text-center font-sans text-title-sm2 text-white pb-6">Johan Smith</h1>
        <div className="border-t py-4 px-26 border-white"></div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current text-white"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Favorite --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/favorite" || pathname.includes("favorite")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded px-4 py-2 font-medium font-sans text-lg text-white focus:bg-green-3 duration-300 ease-in-out dark:hover:bg-meta-4 ${
                          (pathname === "/favorite" ||
                            pathname.includes("favorite"))                          
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <BsHeart />
                        My favorite
                        <BsChevronRight 
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-90"
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/builds"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/builds"
                              }`}
                            >
                              <BsRecord />
                              Builds
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/routes"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/routes"
                              }`}
                            >
                              <BsRecord />
                              Routes
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Favorite --> */}
              {/* <!-- Menu Item Clubs --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/clubs" || pathname.includes("clubs")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded px-4 py-2 font-medium font-sans text-lg text-white focus:bg-green-3 duration-300 ease-in-out dark:hover:bg-meta-4 ${
                          (pathname === "/clubs" ||
                            pathname.includes("clubs"))                          
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <BsHeart />
                        My Clubs
                        <BsChevronRight 
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-90"
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/youth"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/youth"
                              }`}
                            >
                              <BsRecord />
                              Youth
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/overlanding"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/overlanding"
                              }`}
                            >
                              <BsRecord />
                              Overlanding
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/bronco"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/bronco"
                              }`}
                            >
                              <BsRecord />
                              Bronco
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/f100"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/f100"
                              }`}
                            >
                              <BsRecord />
                              F100
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ranger"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-sans text-lg text-white duration-300 ease-in-out ${
                                pathname === "/ranger"
                              }`}
                            >
                              <BsRecord />
                              Ranger
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Clubs --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
        <Image
          width={276}
          height={187}
          src={"/images/logo/logo.png"}
          alt="Logo"
          priority
        />
      </div>
    </aside>
  );
};

export default Sidebar;
