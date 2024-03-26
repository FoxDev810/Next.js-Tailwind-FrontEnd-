"use client";
import React, { useEffect, useState, Fragment } from "react";
import {
  BsQrCodeScan,
  BsChatLeft,
  BsForward,
  BsChevronDown,
} from "react-icons/bs";
import { jsonData } from "@/items.json";
import { CardItem } from "@/types/cards";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Dialog, Transition } from "@headlessui/react";

type Params = { uid: number };

const PostDetail = ({ params }: { params: Params }) => {
  const { cards } = jsonData;
  const [posts, setPosts] = useState<CardItem>({
    id: 0,
    name: "",
    time: "",
    num1: 0,
    num2: 0,
    avatarUrl: "",
    num3: 0,
    imgUrl: "",
    dapWhite: "",
    dapBlack: "",
    comment: "",
    tackle: [],
  });
  const [modalOpen, setModalOpen] = useState<boolean | undefined>(false);

  const getPostDetail = (data: Params) => {
    const cardData = cards.filter((item) => item.id === +data.uid)[0];
    setPosts(cardData);
  };

  useEffect(() => {
    if (params) {
      getPostDetail(params);
    }
  }, [params]);

  return (
    <DefaultLayout>
      <div className="flex flex-col space-y-4 py-4">
        <div className="relative rounded-md bg-white">
          <div className="flex justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <Image
                width={30}
                height={30}
                src={posts.avatarUrl}
                alt="User Avatar"
              />
              <p className="font-openSan text-title-xsm text-black">
                {posts.name}
              </p>
              <p className="font-openSan text-title-xsm3 text-black">
                {posts.time}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BsQrCodeScan width={25} height={25} />
            </div>
          </div>
          <Image
            src={posts.imgUrl}
            width={700}
            height={500}
            alt="This is img."
            className="relative h-full w-full rounded-none"
            onClick={() => setModalOpen(true)}
          />
          <div className="flex justify-between p-4">
            <div className="flex items-center space-x-1">
              <BsChatLeft />
              <p className="font-openSan text-title-xsm text-black">
                {posts.num2}
              </p>
            </div>
            <div className="z-20 content-center px-4">
              <p className="pt-2 text-center font-openSan text-title-sm2 text-black">
                {posts.comment}
              </p>
            </div>
            <div className="flex items-center space-x-1 pr-6">
              <BsForward className="rotate-90" />
              <p className="font-openSan text-title-xsm text-black">
                {posts.num3}
              </p>
              <Image
                src={posts.dapBlack}
                width={31}
                height={25}
                alt="This is a black fist img."
              />
              <BsForward className="-rotate-90" />
            </div>
          </div>
          <div className="border-t border-grey-3 py-2"></div>
          <div className="px-4">
            <div className="flex space-x-2">
              <p className="text-black">Sort by:</p>
              <p className="text-black">Cards</p>
              <BsChevronDown className="translate-y-1 fill-current" />
            </div>
            <form action="#" method="POST" className="py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add a Comment"
                  className="w-full rounded border border-grey-4 bg-transparent p-3 font-medium focus:outline-none"
                />
              </div>
            </form>
            <div className="flex flex-col">
              {posts.tackle?.map((item) => (
                <div className="pt-2" key={item.id}>
                  <div className="flex items-center space-x-2 py-4">
                    <Image
                      width={30}
                      height={30}
                      src={item.avatarUrl}
                      alt="User Avatar"
                    />
                    <p className="pl-2 font-openSan text-title-sm2 text-black">
                      {item.name}
                    </p>
                    <p className="font-openSan text-title-xsm2 text-black">
                      {item.time}
                    </p>
                  </div>
                  <div className="pb-4 pl-10">
                    <p className="font-openSan text-title-sm2 text-grey-5">
                      {item.tackleComment}
                    </p>
                    <div className="flex space-x-3 py-4">
                      <div className="flex items-center space-x-1">
                        <BsChatLeft />
                        <p className="font-openSan text-title-xsm text-black">
                          {item.num1}
                        </p>
                      </div>
                      <div className="flex items-center pr-6">
                        <BsForward className="rotate-90" />
                        <p className="font-openSan text-title-xsm text-black">
                          {item.num2}
                        </p>
                        <Image
                          src={item.dapBlack}
                          width={31}
                          height={25}
                          alt="This is a black fist img."
                        />
                        <BsForward className="-rotate-90" />
                      </div>
                      <Image
                        src="/images/icon/icon-arrow-right.png"
                        width={18}
                        height={18}
                        alt="This is arrow img."
                      />
                    </div>
                    <div className="py-4 pl-8">
                      {item.tackleAnswer?.map((item) => (
                        <div key={item.id}>
                          <div className="flex items-center space-x-2 py-4">
                            <Image
                              width={30}
                              height={30}
                              src={item.avatarUrl}
                              alt="User Avatar"
                            />
                            <p className="pl-2 font-openSan text-title-sm2 text-black">
                              {item.name}
                            </p>
                            <p className="font-openSan text-title-xsm2 text-black">
                              {item.time}
                            </p>
                          </div>
                          <div className="ml-4 border-l border-black py-2 pl-10">
                            <p className="font-openSan text-title-sm2 text-grey-5">
                              {item.tackleComment}
                            </p>
                            <div className="flex space-x-3 py-4">
                              <div className="flex items-center space-x-1">
                                <BsChatLeft />
                                <p className="font-openSan text-title-xsm text-black">
                                  {item.num1}
                                </p>
                              </div>
                              <div className="flex items-center pr-6">
                                <BsForward className="rotate-90" />
                                <p className="font-openSan text-title-xsm text-black">
                                  {item.num2}
                                </p>
                                <Image
                                  src={item.dapBlack}
                                  width={31}
                                  height={25}
                                  alt="This is a black fist img."
                                />
                                <BsForward className="-rotate-90" />
                              </div>
                              <Image
                                src="/images/icon/icon-arrow-right.png"
                                width={18}
                                height={18}
                                alt="This is arrow img."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-1 border-t border-grey-3 px-4"></div>
                </div>
              ))}
            </div>
          </div>
          <Transition show={modalOpen} as={Fragment}>
            <Dialog onClose={() => setModalOpen(false)}>
              {/* Modal backdrop */}
              <Transition.Child
                className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                aria-hidden="true"
              />
              {/* End: Modal backdrop */}

              {/* Modal dialog */}
              <Transition.Child
                className="fixed inset-0 z-[99999] flex px-4 py-6 md:px-6"
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <div className="mx-auto flex h-full max-w-5xl items-center">
                  <Dialog.Panel className="max-h-full w-full overflow-hidden rounded bg-black shadow-2xl">
                    <div className="relative rounded-md bg-white">
                      <div className="flex justify-between px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <Image
                            key={posts.id}
                            width={30}
                            height={30}
                            src={posts.avatarUrl}
                            alt="User Avatar"
                          />
                          <p className="font-openSan text-title-xsm text-black">
                            {posts.name}
                          </p>
                          <p className="font-openSan text-title-xsm3 text-black">
                            {posts.time}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BsQrCodeScan width={25} height={25} />
                        </div>
                      </div>
                      <Image
                        src={posts.imgUrl}
                        width={700}
                        height={500}
                        alt="This is img."
                        className="relative h-full w-full rounded-none"
                      />
                      <div className="flex justify-between p-4">
                        <div className="flex items-center space-x-1">
                          <BsChatLeft />
                          <p className="font-openSan text-title-xsm text-black">
                            {posts.num2}
                          </p>
                        </div>
                        <div className="z-20 content-center px-4">
                          <p className="pt-2 text-center font-openSan text-title-sm2 text-black">
                            {posts.comment}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 pr-6">
                          <BsForward className="rotate-90" />
                          <p className="font-openSan text-title-xsm text-black">
                            {posts.num3}
                          </p>
                          <Image
                            key={posts.id}
                            src={posts.dapBlack}
                            width={31}
                            height={25}
                            alt="This is a black fist img."
                          />
                          <BsForward className="-rotate-90" />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
              {/* End: Modal dialog */}
            </Dialog>
          </Transition>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PostDetail;
