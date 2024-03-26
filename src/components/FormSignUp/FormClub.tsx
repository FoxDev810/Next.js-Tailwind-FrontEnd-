"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { SignUp } from "@/types/signup";
import { jsonData } from "@/items.json";

const ClubPage = (props: SignUp) => {
  const { recommendation1, recommendation2, club1, club2 } = jsonData;
  const [clubs, setClubs] = useState<String>("");

  return (
    <div className="h-dvh bg-signup bg-cover bg-fixed bg-bottom bg-no-repeat">
      <div className="flex items-center justify-center pb-8 pt-16">
        <Image
          src={"/images/image31.png"}
          width={200}
          height={130}
          alt="This is logo."
          className="min-[500px]:w-[100px] sm:h-[80px] sm:w-[120px] md:h-[90px] md:w-[150px]"
        />
      </div>
      <p className="py-8 text-center font-openSan text-title-xxl2 font-bold text-white min-[500px]:text-title-lg sm:text-title-xl2 md:text-title-xl">
        Select Club
      </p>
      <div className="flex justify-center space-x-24 min-[500px]:space-x-8 sm:space-x-10 md:space-x-14">
        <div>
          <p className="text-center font-openSan text-title-lg font-bold text-white sm:text-title-xl2 md:text-title-xl">
            Recommendation
          </p>
          <div className="flex justify-center space-x-4 pt-8">
            <div className="flex w-full flex-col space-y-2">
              {recommendation1.map((item, index) => (
                <div
                  className="flex items-center justify-center rounded-3xl bg-white"
                  key={index}
                >
                  <Link
                    href="#"
                    className="px-4 py-2 text-center font-openSan text-title-xsm4 text-black"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col space-y-2">
              {recommendation2.map((item, index) => (
                <div
                  className="flex items-center justify-center rounded-3xl bg-white"
                  key={index}
                >
                  <Link
                    href="#"
                    className="px-4 py-2 text-center font-openSan text-title-xsm4 text-black"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-r border-white"></div>
        <div className="flex h-[400px] justify-center space-x-4 overflow-y-scroll pr-4">
          <div className="flex w-full flex-col space-y-2">
            {club1.map((item, index) => (
              <div
                className="flex items-center justify-center rounded-3xl bg-white"
                key={index}
              >
                <div
                  className="px-4 py-2 text-center font-openSan text-title-xsm4 text-black"
                  onClick={() => {
                    setClubs("Clubs");
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col space-y-2">
            {club2.map((item, index) => (
              <div
                className="flex items-center justify-center rounded-3xl bg-white"
                key={index}
              >
                <div
                  className="px-4 py-2 text-center font-openSan text-title-xsm4 text-black"
                  onClick={() => {
                    setClubs("Clubs");
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-12 pb-24 pt-8">
        <button
          className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white`}
          onClick={() => {
            props.setActiveStep(5);
          }}
        >
          <BsChevronLeft />
          Prev
        </button>
        <Link
          href={"/dashboard"}
          className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white ${
            clubs === "" ? "disable" : "bg-gradient-to-b from-blue-1 to-green-2"
          }`}
        >
          Submit
          <BsChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default ClubPage;
