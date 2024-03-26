"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SignUp } from "@/types/signup";
import {
  BsChevronRight,
  BsChevronLeft,
  BsFacebook,
  BsTwitterX,
  BsInstagram,
} from "react-icons/bs";

const SocialLinkPage = (props: SignUp) => {
  const [facebook, setFacebook] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<boolean>(false);
  const [twitter, setTwitter] = useState<boolean>(false);

  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-8 bg-signup bg-cover bg-fixed bg-bottom bg-no-repeat pb-8 pt-16">
      <Image
        src={"/images/image31.png"}
        width={200}
        height={130}
        alt="This is logo."
        className="min-[500px]:w-[100px] sm:h-[80px] sm:w-[120px] md:h-[90px] md:w-[150px]"
      />
      <div className="w-[40vh] space-y-8">
        <div className="flex justify-between space-x-2">
          <BsFacebook
            className={`cursor-pointer rounded bg-white p-2 text-8xl text-black ${
              facebook === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => {
              setFacebook(!facebook);
            }}
          />
          <BsInstagram
            className={`cursor-pointer rounded bg-white p-2 text-8xl text-black ${
              instagram === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => {
              setInstagram(!instagram);
            }}
          />
          <BsTwitterX
            className={`cursor-pointer rounded bg-white p-2 text-8xl text-black ${
              twitter === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => {
              setTwitter(!twitter);
            }}
          />
        </div>
        <div className="flex justify-between">
          <button
            className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white`}
            onClick={() => {
              props.setActiveStep(4);
            }}
          >
            <BsChevronLeft />
            Prev
          </button>
          <button
            className={`font-semi-bold flex items-center rounded-md bg-gray-5 px-8 py-2 text-title-lg text-white ${
              facebook === true || instagram === true || twitter === true
                ? "bg-gradient-to-b from-blue-1 to-green-2"
                : 'disable'
            }`}
            onClick={() => {
              props.setActiveStep(6);
            }}
          >
            Next
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinkPage;
