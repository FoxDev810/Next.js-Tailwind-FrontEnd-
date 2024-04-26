"use client";
import { useState } from "react";
import Header from "@/components/landing/head";
import Content from "@/components/landing/content";
import Footer from "@/components/landing/footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-dvh">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/*main content section*/}
      <Content />
      {/*footer section*/}
      <Footer />
    </div>
  );
}
