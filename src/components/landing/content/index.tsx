import React, { useEffect } from "react";
import Image from "next/image";
import { mont, barlow, openSan } from "@/fonts/fonts";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/slider/img1.jpg",
    thumbnail: "/images/slider/img1.jpg",
    originalHeight: 452,
    originalWidth: 680,
  },
  {
    original: "/images/slider/img2.jpg",
    thumbnail: "/images/slider/img2.jpg",
    originalHeight: 452,
    originalWidth: 680,
  },
  {
    original: "/images/slider/img3.jpg",
    thumbnail: "/images/slider/img3.jpg",
    originalHeight: 452,
    originalWidth: 680,
  },
];

const Content = () => {
  return (
    <main className="relative flex flex-col bg-neutral-1">
      <section className="relative flex flex-col items-center bg-opacity-5 bg-landingBg bg-cover bg-center">
        <div className="py-20 text-center text-white">
          <p
            className={`items-center text-center font-bold text-neutral-1 2xsm:text-4xl 1md:text-6xl 1xl:text-8xl ${barlow.className}`}
          >
            Come ShowCase your Build
          </p>
          <p
            className={`${mont.className} pt-5 text-neutral-1 2xsm:pb-18 2xsm:text-lg 1md:pb-24 1xl:text-title-sm`}
          >
            Off Com is changing how the enthusiast market buys and sells
          </p>
          <div className="flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Enter your email"
              className={` w-3/5 text-title-sm font-semibold text-white placeholder-white placeholder:italic ${mont.className} border-b-2 border-white bg-transparent py-2`}
            ></input>
            <button
              className={`${mont.className} rounded-full bg-yellow-1 px-6 py-2 font-bold text-neutral-1 2xsm:text-base 1xl:text-lg`}
            >
              Get Access
            </button>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center bg-cover 2xsm:py-10 1sm:py-12 1lg:py-14">
        <div className="container flex flex-col items-center">
          <div className="flex w-5/6 flex-col space-y-6">
            {/* <p
              className={`text-center text-2xl text-title-md font-light text-white ${barlow.className}`}
            >
              SOME NUMBERS
            </p>
            <div
              className={`flex items-center 2xsm:flex-wrap 2xsm:justify-center 2xsm:gap-4 1xl:flex-nowrap 1xl:justify-between 1xl:gap-8 ${barlow.className}`}
            >
              <div className="text-center">
                <p className="py-2 text-7xl font-bold text-yellow-1">300,000</p>
                <p className="text-2xl font-bold text-white">
                  LOREM IPSUM DOLOR SIT AMET
                </p>
                <p className="text-base font-normal text-white">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </div>
              <div className="text-center">
                <p className="py-2 text-7xl font-bold text-yellow-1">
                  1,200,000
                </p>
                <p className="text-2xl font-bold text-white">
                  IPSUM DOLOR SIT AMET
                </p>
                <p className="text-base text-white">
                  consectetur adipiscing elit, eiusmod tempor incididunt
                </p>
              </div>
              <div className="text-center">
                <p className="py-2 text-7xl font-bold text-yellow-1">800</p>
                <p className="text-2xl font-bold text-white">
                  LOREM IPSUM DOLOR SIT AMET
                </p>
                <p className="text-base font-normal text-white">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </div>
              <div className="text-center">
                <p className="py-2 text-7xl font-bold text-yellow-1">987,000</p>
                <p className="text-2xl font-bold text-white">
                  IPSUM DOLOR SIT AMET
                </p>
                <p className="text-base text-white">
                  consectetur adipiscing elit, eiusmod tempor incididunt
                </p>
              </div>
            </div> */}
            <div className="flex items-center justify-center py-6">
              <video
                autoPlay
                loop
                muted
                className="rounded-3xl drop-shadow-2 1md:max-w-3xl 1lg:max-w-5xl"
              >
                <source src="/images/landing/section.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-center">
              <svg
                width="96"
                height="12"
                viewBox="0 0 96 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="62" cy="6" r="5.5" stroke="#FFBB23" />
                <circle cx="90" cy="6" r="5.5" stroke="#FFBB23" />
                <rect width="40" height="12" rx="6" fill="#FFBB23" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center bg-grey-5 bg-opacity-15 bg-wheel bg-cover bg-center py-16">
        <div className="container flex flex-col items-center">
          <p
            className={`pb-12 text-center font-light text-white 2xsm:text-lg 1xl:text-title-md ${barlow.className}`}
          >
            Profile Types
          </p>
          <div className="flex justify-center 2xsm:gap-12 1md:gap-16">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                src={"/images/landing/logo1.png"}
                width={234}
                height={209}
                alt="build logo"
                className=""
              />
              <p
                className={`${barlow.className} text-2xl font-bold text-white `}
              >
                BUILDERS
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                src={"/images/landing/logo2.png"}
                width={327}
                height={211}
                alt="build logo"
                className=""
              />
              <p
                className={`${barlow.className} text-2xl font-bold text-white `}
              >
                ENTUSIASTIC
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                src={"/images/landing/logo3.png"}
                width={207}
                height={209}
                alt="vendor logo"
                className=""
              />
              <p
                className={`${barlow.className} text-2xl font-bold text-white `}
              >
                VENDORS
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center bg-white py-24">
        <div className="container flex flex-col items-center">
          <p
            className={`pb-12 text-center font-bold text-yellow-1 2xsm:text-3xl 1sm:text-5xl 1lg:text-7xl ${barlow.className}`}
          >
            Everything you need to know 
          </p>
          <div className="relative flex w-5/6 items-center justify-between">
            <div className="flex flex-col gap-18">
              <div className="flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9166 16.1666C10.8455 16.1666 9.16658 14.4876 9.16658 12.4166C9.16658 10.3455 10.8455 8.66658 12.9166 8.66658C14.9876 8.66658 16.6666 10.3455 16.6666 12.4166C16.6666 14.4876 14.9876 16.1666 12.9166 16.1666ZM13.6666 29.9132V24.3333C13.6666 23.5193 13.9069 22.7711 14.3401 22.1039C13.8478 22.0354 13.3446 21.9999 12.8333 21.9999C10.2199 21.9999 7.82274 22.9253 5.95144 24.4661C7.7484 27.1201 10.4765 29.0921 13.6666 29.9132ZM4.42135 21.4333C6.77379 19.6946 9.68347 18.6666 12.8333 18.6666C14.5724 18.6666 16.2384 18.9799 17.7778 19.5534C19.2411 18.9813 20.9873 18.6666 22.8333 18.6666C25.5994 18.6666 28.1414 19.3731 29.8433 20.5938C30.1626 19.4504 30.3333 18.2451 30.3333 16.9999C30.3333 9.63612 24.3638 3.66659 16.9999 3.66659C9.63612 3.66659 3.66659 9.63612 3.66659 16.9999C3.66659 18.5541 3.93252 20.0463 4.42135 21.4333ZM28.4656 23.8097C27.8103 22.9209 25.6179 21.9999 22.8333 21.9999C19.4898 21.9999 16.9999 23.3278 16.9999 24.3333V30.3333C21.8758 30.3333 26.1404 27.7159 28.4656 23.8097ZM16.9999 33.6666C7.79517 33.6666 0.333252 26.2046 0.333252 16.9999C0.333252 7.79517 7.79517 0.333252 16.9999 0.333252C26.2046 0.333252 33.6666 7.79517 33.6666 16.9999C33.6666 26.2046 26.2046 33.6666 16.9999 33.6666ZM22.8333 17.8333C20.9923 17.8333 19.4999 16.3409 19.4999 14.4999C19.4999 12.659 20.9923 11.1666 22.8333 11.1666C24.6743 11.1666 26.1666 12.659 26.1666 14.4999C26.1666 16.3409 24.6743 17.8333 22.8333 17.8333Z"
                    fill="#FFBB23"
                  />
                </svg>
                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Unique Build ID
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    Offroad build plates, help your build
                    <br />
                    create an identity for itself, VIN numbers
                    <br />
                    are for the street, build plates are for the <br />
                    enthusiast. Help tell the story of your build
                    <br />
                    from day one.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66659 9.23818V30.6116L12.1079 26.9939L22.1079 31.9939L30.3333 28.4687V7.09531L32.5049 6.16458C32.9281 5.98328 33.4179 6.17923 33.5993 6.60226C33.6436 6.706 33.6666 6.81768 33.6666 6.93053V30.6667L21.9999 35.6667L11.9999 30.6667L1.49485 35.1689C1.07182 35.3502 0.581935 35.1542 0.400635 34.7312C0.356169 34.6276 0.333252 34.5157 0.333252 34.4029V10.6667L3.66659 9.23818ZM24.0709 17.7377L16.9999 24.8089L9.92885 17.7377C6.0236 13.8326 6.0236 7.50093 9.92885 3.59568C13.8341 -0.309563 20.1658 -0.309563 24.0709 3.59568C27.9762 7.50093 27.9762 13.8326 24.0709 17.7377ZM16.9999 20.0949L21.7139 15.3808C24.3174 12.7773 24.3174 8.5562 21.7139 5.9527C19.1104 3.34921 14.8894 3.34921 12.2859 5.9527C9.68238 8.5562 9.68238 12.7773 12.2859 15.3808L16.9999 20.0949Z"
                    fill="#FFBB23"
                  />
                </svg>

                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Build Intelligence
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    Each build has a unique build identity
                    <br />
                    but with Off Com you{"'"}re able to see
                    <br />
                    what sets it apart when compared to <br />
                    others that look just like it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  width="38"
                  height="30"
                  viewBox="0 0 38 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6748 23.2349V26.6712H29.0082V30.0046H9.00814V26.6712H17.3415V23.2349C10.7643 22.4147 5.6748 16.8041 5.6748 10.0046V0.00463867H32.3415V10.0046C32.3415 16.8041 27.252 22.4147 20.6748 23.2349ZM9.00814 3.33797V10.0046C9.00814 15.5276 13.4853 20.0046 19.0082 20.0046C24.531 20.0046 29.0082 15.5276 29.0082 10.0046V3.33797H9.00814ZM0.674805 3.33797H4.00814V10.0046H0.674805V3.33797ZM34.0082 3.33797H37.3415V10.0046H34.0082V3.33797Z"
                    fill="#FFBB23"
                  />
                </svg>

                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Build Rep - Crowdsourced
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    As your build{"'"}s story start to get an
                    <br />
                    identity for itself, people will begin to
                    <br />
                    take notice. As the reputation for each
                    <br />
                    build grows, so does the value of it{"'"}s <br />
                    Unique Build ID.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-18">
              <div className="flex gap-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.333252 16.9999H3.66659V31.9999H0.333252V16.9999ZM5.33325 20.3333H8.66658V31.9999H5.33325V20.3333ZM23.6666 10.3333H26.9999V31.9999H23.6666V10.3333ZM28.6666 13.6666H31.9999V31.9999H28.6666V13.6666ZM11.9999 0.333252H15.3333V31.9999H11.9999V0.333252ZM16.9999 3.66659H20.3333V31.9999H16.9999V3.66659Z"
                    fill="#FFBB23"
                  />
                </svg>

                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Channel Management System - CMS
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    To streamline communication between
                    <br />
                    Vendors, Builders and Enthusiasts each
                    <br />
                    member will be able to create a unique profile <br />
                    to maximize the effciency for each members <br />
                    use.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5.33325H24.0237L31.1785 12.4881C31.8293 13.139 31.8293 14.1943 31.1785 14.8451L24.0237 21.9999H15V33.6666H11.6667V21.9999H1.66667C0.7462 21.9999 0 21.2538 0 20.3333V6.99992C0 6.07945 0.7462 5.33325 1.66667 5.33325H11.6667V0.333252H15V5.33325ZM22.643 18.6666L27.643 13.6666L22.643 8.66658H3.33333V18.6666H22.643Z"
                    fill="#FFBB23"
                  />
                </svg>

                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Off Com Community
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    Off Com has a community feed tuned
                    <br />
                    for your interests and treding posts of
                    <br />
                    interest. Posts will be categorized by <br />
                    groups associated with the builds that <br />
                    your follow.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  width="36"
                  height="29"
                  viewBox="0 0 36 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.333252 24.0001H11.9999V27.3334H0.333252V24.0001ZM0.333252 12.3334H15.3333V15.6667H0.333252V12.3334ZM0.333252 0.666748H33.6666V4.00008H0.333252V0.666748ZM31.4566 15.7086L33.3834 15.0567L35.0501 17.9434L33.5233 19.2852C33.6172 19.7311 33.6666 20.1931 33.6666 20.6667C33.6666 21.1404 33.6172 21.6024 33.5233 22.0482L35.0501 23.3901L33.3834 26.2767L31.4566 25.6249C30.7724 26.2402 29.9604 26.7159 29.0651 27.0074L28.6666 29.0001H25.3333L24.9348 27.0074C24.0394 26.7159 23.2274 26.2402 22.5433 25.6249L20.6164 26.2767L18.9498 23.3901L20.4766 22.0482C20.3826 21.6024 20.3333 21.1404 20.3333 20.6667C20.3333 20.1931 20.3826 19.7311 20.4766 19.2852L18.9498 17.9434L20.6164 15.0567L22.5433 15.7086C23.2274 15.0932 24.0394 14.6176 24.9348 14.3261L25.3333 12.3334H28.6666L29.0651 14.3261C29.9604 14.6176 30.7724 15.0932 31.4566 15.7086ZM26.9999 22.3334C27.9204 22.3334 28.6666 21.5872 28.6666 20.6667C28.6666 19.7462 27.9204 19.0001 26.9999 19.0001C26.0794 19.0001 25.3333 19.7462 25.3333 20.6667C25.3333 21.5872 26.0794 22.3334 26.9999 22.3334Z"
                    fill="#FFBB23"
                  />
                </svg>
                <div>
                  <p
                    className={`${barlow.className} text-2xl font-bold text-neutral-1`}
                  >
                    Off Com Groups
                  </p>
                  <p className={`${mont.className} text-base text-neutral-1`}>
                    Build Groups, are builds that are associated
                    <br />
                    by style. UTV groups see UTVs, Sand Cars
                    <br />
                    see Sand Cars. Prerunners see Prerunner. <br />
                    When you create your build plate, you will be <br />
                    prompted to assign a build group to your <br />
                    build plate. The build plate will show the <br />
                    build group history as the build story ages.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={"/images/landing/phone.png"}
              width={985}
              height={524}
              alt="mic"
              className="absolute 2xsm:hidden 1xl:right-[24%] 1xl:top-[10%] 1xl:block 1xl:h-[325px] 1xl:w-[585px] 2_xl:right-[20%] 2_xl:top-[10%] 2_xl:h-[425px] 2_xl:w-[785px] 3xl:right-[25%] 3xl:top-[10%]"
            />
          </div>
          <div className="flex items-center py-6">
            <button
              className={`${mont.className} rounded-full bg-yellow-1 px-6 py-2 font-bold text-neutral-1 2xsm:text-base 1xl:text-lg`}
            >
              Start Exploring
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-card bg-cover bg-center">
        <div className="flex items-center justify-around space-y-2 bg-black/60 py-6 2xsm:flex-col 1lg:flex-row">
          <div className="relative w-1/2 flex overflow-hidden rounded-[48px]">
            <ImageGallery items={images} autoPlay showBullets showThumbnails={false} lazyLoad={true} showNav={false}/>
          </div>
          <div className="flex flex-col gap-2 px-4 2xsm:py-6 1lg:py-18">
            <p
              className={`${barlow.className} pb-16 font-mont text-7xl font-bold text-white`}
            >
              Quotes
            </p>
            <div className="flex gap-2">
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.16682 25.6421C1.10632 23.4547 0 20.9999 0 17.0205C0 10.0216 4.91302 3.7472 12.0612 0.64624L13.8466 3.40146C7.17608 7.01066 5.87236 11.6919 5.35128 14.6439C6.42526 14.0885 7.83116 13.8931 9.20942 14.0209C12.8182 14.3555 15.6624 17.3179 15.6624 20.9999C15.6624 24.8659 12.5283 27.9999 8.66232 27.9999C6.5162 27.9999 4.46392 27.0189 3.16682 25.6421ZM23.1668 25.6421C21.1064 23.4547 20 20.9999 20 17.0205C20 10.0216 24.913 3.7472 32.0612 0.64624L33.8466 3.40146C27.176 7.01066 25.8724 11.6919 25.3512 14.6439C26.4252 14.0885 27.8312 13.8931 29.2094 14.0209C32.8182 14.3555 35.6624 17.3179 35.6624 20.9999C35.6624 24.8659 32.5284 27.9999 28.6624 27.9999C26.5162 27.9999 24.464 27.0189 23.1668 25.6421Z"
                  fill="#FFBB23"
                />
              </svg>
              <div className={`flex flex-col gap-2 ${openSan.className}`}>
                <p className="text-xl text-white">
                  {`"`}New Start-up, Off Com, is poised to throw dirt on the
                  <br />
                  competition. {`"`} - LA Times
                </p>
                <p className="text-3xl text-white">
                  The Off-Road Industry stuck in the Stone Age
                </p>
                <div className="flex space-x-4">
                  <p className="text-xl text-yellow-1">
                    Off Com is going to bring it into the AI age with Build
                    Intelligence.
                  </p>
                  <Image
                    src={"/images/cory.png"}
                    width={80}
                    height={80}
                    alt="user"
                    className="rounded-full"
                  />
                </div>
                <p className="flex justify-end text-3xl font-semibold italic text-white">
                  Cory Franek
                </p>
                <p className="flex justify-end text-3xl font-semibold italic text-white">
                  CEO, OffComm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center bg-white py-12">
        <p
          className={`${barlow.className} pb-12 font-bold text-yellow-1 2xsm:text-3xl 1md:text-5xl 1xl:text-7xl`}
        >
          What people say about us
        </p>
        <div className="flex items-center justify-around gap-8 2xsm:flex-wrap 1xl:flex-nowrap">
          <div className="flex flex-col gap-2 py-8">
            <svg
              width="128"
              height="24"
              viewBox="0 0 128 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116 14.6564L118.816 16.3769L118.051 13.1664L120.557 11.0192L117.267 10.7554L116 7.70792V14.6564ZM116 17L110.122 20.5902L111.72 13.8906L106.489 9.40983L113.355 8.85942L116 2.5L118.645 8.85942L125.51 9.40983L120.28 13.8906L121.878 20.5902L116 17Z"
                fill="#FFBB23"
              />
              <path
                d="M89.9998 17L84.122 20.5902L85.7201 13.8906L80.4893 9.40983L87.3548 8.85942L89.9998 2.5L92.6449 8.85942L99.5104 9.40983L94.2796 13.8906L95.8777 20.5902L89.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M63.9998 17L58.122 20.5902L59.7201 13.8906L54.4893 9.40983L61.3548 8.85942L63.9998 2.5L66.6449 8.85942L73.5104 9.40983L68.2796 13.8906L69.8777 20.5902L63.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M37.9998 17L32.122 20.5902L33.7201 13.8906L28.4893 9.40983L35.3548 8.85942L37.9998 2.5L40.6449 8.85942L47.5104 9.40983L42.2796 13.8906L43.8777 20.5902L37.9998 17Z"
                fill="#FFBB23"
              />
            </svg>
            <div className="py-2">
              <p
                className={`text-2xl font-bold text-neutral-1 ${barlow.className}`}
              >
                BEST APP AROUND
              </p>
              <p className={`${mont.className} text-base text-neutral-1`}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna <br />
                aliqua.
              </p>
            </div>
            <p className={`${mont.className} font-base text-neutral-1`}>
              Guy Hawkins <br />
              June 11, 2023
            </p>
          </div>
          <div className="flex flex-col gap-2 py-8">
            <svg
              width="128"
              height="24"
              viewBox="0 0 128 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116 14.6564L118.816 16.3769L118.051 13.1664L120.557 11.0192L117.267 10.7554L116 7.70792V14.6564ZM116 17L110.122 20.5902L111.72 13.8906L106.489 9.40983L113.355 8.85942L116 2.5L118.645 8.85942L125.51 9.40983L120.28 13.8906L121.878 20.5902L116 17Z"
                fill="#FFBB23"
              />
              <path
                d="M89.9998 17L84.122 20.5902L85.7201 13.8906L80.4893 9.40983L87.3548 8.85942L89.9998 2.5L92.6449 8.85942L99.5104 9.40983L94.2796 13.8906L95.8777 20.5902L89.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M63.9998 17L58.122 20.5902L59.7201 13.8906L54.4893 9.40983L61.3548 8.85942L63.9998 2.5L66.6449 8.85942L73.5104 9.40983L68.2796 13.8906L69.8777 20.5902L63.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M37.9998 17L32.122 20.5902L33.7201 13.8906L28.4893 9.40983L35.3548 8.85942L37.9998 2.5L40.6449 8.85942L47.5104 9.40983L42.2796 13.8906L43.8777 20.5902L37.9998 17Z"
                fill="#FFBB23"
              />
            </svg>
            <div className="py-2">
              <p
                className={`text-2xl font-bold text-neutral-1 ${barlow.className}`}
              >
                BEST APP AROUND
              </p>
              <p className={`${mont.className} text-base text-neutral-1`}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna <br />
                aliqua.
              </p>
            </div>
            <p className={`${mont.className} font-base text-neutral-1`}>
              Guy Hawkins <br />
              June 11, 2023
            </p>
          </div>
          <div className="flex flex-col gap-2 py-8">
            <svg
              width="128"
              height="24"
              viewBox="0 0 128 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116 14.6564L118.816 16.3769L118.051 13.1664L120.557 11.0192L117.267 10.7554L116 7.70792V14.6564ZM116 17L110.122 20.5902L111.72 13.8906L106.489 9.40983L113.355 8.85942L116 2.5L118.645 8.85942L125.51 9.40983L120.28 13.8906L121.878 20.5902L116 17Z"
                fill="#FFBB23"
              />
              <path
                d="M89.9998 17L84.122 20.5902L85.7201 13.8906L80.4893 9.40983L87.3548 8.85942L89.9998 2.5L92.6449 8.85942L99.5104 9.40983L94.2796 13.8906L95.8777 20.5902L89.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M63.9998 17L58.122 20.5902L59.7201 13.8906L54.4893 9.40983L61.3548 8.85942L63.9998 2.5L66.6449 8.85942L73.5104 9.40983L68.2796 13.8906L69.8777 20.5902L63.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M37.9998 17L32.122 20.5902L33.7201 13.8906L28.4893 9.40983L35.3548 8.85942L37.9998 2.5L40.6449 8.85942L47.5104 9.40983L42.2796 13.8906L43.8777 20.5902L37.9998 17Z"
                fill="#FFBB23"
              />
            </svg>
            <div className="py-2">
              <p
                className={`text-2xl font-bold text-neutral-1 ${barlow.className}`}
              >
                BEST APP AROUND
              </p>
              <p className={`${mont.className} text-base text-neutral-1`}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna <br />
                aliqua.
              </p>
            </div>
            <p className={`${mont.className} font-base text-neutral-1`}>
              Guy Hawkins <br />
              June 11, 2023
            </p>
          </div>
          <div className="flex flex-col gap-2 py-8">
            <svg
              width="128"
              height="24"
              viewBox="0 0 128 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116 14.6564L118.816 16.3769L118.051 13.1664L120.557 11.0192L117.267 10.7554L116 7.70792V14.6564ZM116 17L110.122 20.5902L111.72 13.8906L106.489 9.40983L113.355 8.85942L116 2.5L118.645 8.85942L125.51 9.40983L120.28 13.8906L121.878 20.5902L116 17Z"
                fill="#FFBB23"
              />
              <path
                d="M89.9998 17L84.122 20.5902L85.7201 13.8906L80.4893 9.40983L87.3548 8.85942L89.9998 2.5L92.6449 8.85942L99.5104 9.40983L94.2796 13.8906L95.8777 20.5902L89.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M63.9998 17L58.122 20.5902L59.7201 13.8906L54.4893 9.40983L61.3548 8.85942L63.9998 2.5L66.6449 8.85942L73.5104 9.40983L68.2796 13.8906L69.8777 20.5902L63.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"
                fill="#FFBB23"
              />
              <path
                d="M37.9998 17L32.122 20.5902L33.7201 13.8906L28.4893 9.40983L35.3548 8.85942L37.9998 2.5L40.6449 8.85942L47.5104 9.40983L42.2796 13.8906L43.8777 20.5902L37.9998 17Z"
                fill="#FFBB23"
              />
            </svg>
            <div className="py-2">
              <p
                className={`text-2xl font-bold text-neutral-1 ${barlow.className}`}
              >
                BEST APP AROUND
              </p>
              <p className={`${mont.className} text-base text-neutral-1`}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna <br />
                aliqua.
              </p>
            </div>
            <p className={`${mont.className} font-base text-neutral-1`}>
              Guy Hawkins <br />
              June 11, 2023
            </p>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <svg
            width="96"
            height="12"
            viewBox="0 0 96 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="62" cy="6" r="5.5" stroke="#FFBB23" />
            <circle cx="90" cy="6" r="5.5" stroke="#FFBB23" />
            <rect width="40" height="12" rx="6" fill="#FFBB23" />
          </svg>
        </div>
      </section>
    </main>
  );
};

export default Content;
