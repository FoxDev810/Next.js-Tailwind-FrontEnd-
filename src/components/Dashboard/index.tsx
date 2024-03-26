"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jsonData } from "@/items.json";
import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDown,
  BsQrCodeScan,
  BsChatLeft,
  BsForward,
} from "react-icons/bs";
import Image from "next/image";
import Glide from "@glidejs/glide";

const Dashboard: React.FC = () => {
  const { images, cards, club1, club2 } = jsonData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 20,
      breakpoints: {
        1440: {
          perView: 5,
        },
        1024: {
          perView: 3,
        },
        870: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="border-b border-gray-4 pb-1">
        <p className="font-openSan text-title-xsm text-black">Top Builds</p>
      </div>
      <div className="relative pt-2">
        <div className="glide-01 relative m-auto flex w-full overflow-hidden">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-hidden">
              {images.map((image) => {
                return (
                  <li key={image.id} className="relative">
                    <Image
                      src={image.imageUrl}
                      width={240}
                      height={189}
                      alt="Slide Image"
                    />
                    <BsQrCodeScan
                      width={25}
                      height={25}
                      className="absolute right-2 top-2 text-white min-[375px]:right-18 min-[500px]:right-32 sm:right-14 sm:top-4 min-[750px]:right-18 md:right-7 md:top-4 min-[1000px]:right-12 lg:right-2 lg:top-2 2xl:right-6"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-glide-el="controls">
            <button
              data-glide-dir="<"
              aria-label="prev slide"
              onClick={handlePrevSlide}
            >
              <BsChevronLeft className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer rounded-full bg-black p-1 text-title-sm2 text-white" />
            </button>
            <button
              data-glide-dir=">"
              aria-label="next slide"
              onClick={handleNextSlide}
            >
              <BsChevronRight className="absolute inset-y-1/2 right-0 m-auto cursor-pointer rounded-full bg-black p-1 text-title-sm2 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="w-2/3">
          <div className="flex space-x-10 border-b border-gray-4 py-2">
            <Link
              href="#"
              className="relative flex space-x-2 font-openSan text-title-xsm text-black"
            >
              <p>Builds</p>
              <BsChevronDown className="translate-y-1 fill-current" />
            </Link>
            <Link
              href="#"
              className="flex space-x-2 font-openSan text-title-xsm text-black"
            >
              <p>All</p>
              <BsChevronDown className="translate-y-1 fill-current" />
            </Link>
            <Link
              href="#"
              className="flex space-x-2 font-openSan text-title-xsm text-black"
            >
              <p>Cards</p>
              <BsChevronDown className="translate-y-1 fill-current" />
            </Link>
          </div>
          <div className="flex flex-col space-y-4 py-4">
            {cards.map((item) => (
              <div className="relative rounded-md bg-white" key={item.id}>
                <div className="flex justify-between px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Image
                      key={item.id}
                      width={30}
                      height={30}
                      src={item.avatarUrl}
                      alt="User Avatar"
                    />
                    <p className="font-openSan text-title-xsm text-black">
                      {item.name}
                    </p>
                    <p className="font-openSan text-title-xsm3 text-black">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BsQrCodeScan width={25} height={25} />
                  </div>
                </div>
                <Link href={`/postDetail/${item.id}`}>
                  <Image
                    key={item.id}
                    src={item.imgUrl}
                    width={700}
                    height={500}
                    alt="This is img."
                    className="relative h-full w-full rounded-none"
                  />
                </Link>
                <div className="flex justify-between p-4">
                  <Link
                    href={`/postDetail/${item.id}`}
                    className="flex items-center space-x-1 pt-2 hover:underline"
                  >
                    <BsChatLeft />
                    <p className="font-openSan text-title-xsm text-black">
                      {item.num2}
                    </p>
                  </Link>
                  <div className="z-20 content-center px-4">
                    <p className="pt-2 text-center font-openSan text-title-sm2 text-black">
                      {item.comment}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 pr-6">
                    <BsForward className="rotate-90" />
                    <p className="font-openSan text-title-xsm text-black">
                      {item.num3}
                    </p>
                    <Image
                      key={item.id}
                      src={item.dapBlack}
                      width={31}
                      height={25}
                      alt="This is a black fist img."
                    />
                    <BsForward className="-rotate-90" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-1/3 flex-col space-y-6 pt-10">
          <div className="relative rounded bg-white">
            <div className="border-b border-grey-3 px-4 py-6">
              <p className="font-openSan text-title-xsm text-black">Clubs</p>
            </div>
            <div className="flex justify-center space-x-4 py-8">
              <div className="flex flex-col space-y-2">
                {club1.map((item, index) => (
                  <div
                    className="flex items-center justify-center rounded-3xl bg-blue-2"
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
              <div className="flex flex-col space-y-2">
                {club2.map((item, index) => (
                  <div
                    className="flex items-center justify-center rounded-3xl bg-blue-2"
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
