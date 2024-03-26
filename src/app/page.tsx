import { Metadata } from "next";
import Header from "@/components/landing/head";
import Content from "@/components/landing/content";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Myproject Home",
};

export default function Home() {
  return (
    <div className="bg-landing h-dvh bg-cover bg-fixed bg-bottom bg-no-repeat">
      <Header />
      {/*main content section*/}
      <main className="flex min-w-full flex-col">
        <Content />
      </main>
      {/*footer section*/}
      <Footer />
    </div>
  );
}
