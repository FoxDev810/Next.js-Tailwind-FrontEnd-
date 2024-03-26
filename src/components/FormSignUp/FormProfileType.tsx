"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsCheck, BsChevronRight } from "react-icons/bs";
import { SignUp } from "@/types/signup";

const ProfileTypePage = (props: SignUp) => {
  const [profileBadge1, setProfileBadge1] = useState<boolean>(false);
  const [profileBadge2, setProfileBadge2] = useState<boolean>(false);
  const [profileBadge3, setProfileBadge3] = useState<boolean>(false);

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
        Select Profile Type
      </p>
      <div className="flex justify-center space-x-24 min-[500px]:space-x-8 sm:space-x-8 md:space-x-12">
        <div className="space-y-4">
          <div
            className={`relative cursor-pointer rounded-full bg-white p-2 ${
              profileBadge1 === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => setProfileBadge1(!profileBadge1)}
          >
            <Image
              src={"/images/auth/profile-01.png"}
              width={166}
              height={166}
              alt="This is profile icon."
            />
            <span
              className={`bg-blue-3 absolute right-4 top-4 rounded-full p-1 text-white ${
                profileBadge1 === false ? "hidden" : "inline"
              }`}
            >
              <BsCheck />
            </span>
          </div>
          <p className="text-center text-title-lg font-bold text-white">
            Vendors
          </p>
        </div>
        <div className="space-y-4">
          <div
            className={`relative cursor-pointer rounded-full bg-white px-2 py-10 ${
              profileBadge2 === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => setProfileBadge2(!profileBadge2)}
          >
            <Image
              src={"/images/auth/profile-02.png"}
              width={166}
              height={166}
              alt="This is profile icon."
            />
            <span
              className={`bg-blue-3 absolute right-4 top-4 rounded-full p-1 text-white ${
                profileBadge2 === false ? "hidden" : "inline"
              }`}
            >
              <BsCheck />
            </span>
          </div>
          <p className="text-center text-title-lg font-bold text-white">
            Enthusiast
          </p>
        </div>
        <div className="space-y-4">
          <div
            className={`relative cursor-pointer rounded-full bg-white px-2 py-4 ${
              profileBadge3 === false ? "" : "border-blue-3 border border-4"
            }`}
            onClick={() => setProfileBadge3(!profileBadge3)}
          >
            <Image
              src={"/images/auth/profile-03.png"}
              width={166}
              height={166}
              alt="This is profile icon."
            />
            <span
              className={`bg-blue-3 absolute right-4 top-4 rounded-full p-1 text-white ${
                profileBadge3 === false ? "hidden" : "inline"
              }`}
            >
              <BsCheck />
            </span>
          </div>
          <p className="text-center text-title-lg font-bold text-white">
            Builder
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-24 pt-8">
        <button
          className={`flex items-center font-semi-bold rounded-md bg-gray-5 px-18 py-2 text-title-lg text-white ${
            profileBadge1 === true ||
            profileBadge2 === true ||
            profileBadge3 === true
              ? "bg-gradient-to-b from-blue-1 to-green-2"
              : "disable"
          }`}
          onClick={() => {
            props.setActiveStep(2);
          }}
        >
          Next
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProfileTypePage;
