"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { mont } from "@/fonts/fonts";

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
      className={`dark:bg-boxdark absolute left-0 top-0 z-9999 flex h-full w-32 flex-col justify-between overflow-y-hidden bg-gradient-to-b from-grey-1 to-grey-2 px-2 py-6 duration-300 ease-linear 1lg:static 1lg:hidden 1lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div
        className={`space-y-4 text-base font-semibold text-white ${mont.className}`}
      >
        <Link href={"#"}>
          <p className="text-center">Blog</p>
        </Link>
        <Link href={"#"} className="flex flex-col items-center">
          <p className="text-center">Trail Map</p>
        </Link>
        <Link href={"#"} className="flex flex-col items-center">
          <p className="text-center">Feedbacks</p>
        </Link>
        <Link href={"#"} className="flex flex-col items-center">
          <p className="text-center">Places</p>
        </Link>
      </div>
      <div
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
      ></div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="space-y-4 border-t border-white/[.2] py-6 font-mont text-title-xsm2 text-white">
        <Link
          href={"/settings"}
          className="flex flex-col items-center space-y-1"
        >
          <p>Login</p>
        </Link>
        <Link href={"/"} className="flex flex-col items-center space-y-1 pt-2">
          <p>Sign Up</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
