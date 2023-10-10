"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollForwardBtn from "../scroll-fwd-btn";
import ScrollBackBtn from "../scroll-back-btn";

interface Info {
  mission: string;
  vision: string;
  imageUrl: string;
}

const infos: Info[] = [
  {
    mission: "our mission is your financial success",
    vision:
      "And In Order To Make A Business, Brand Advertising And MArketing Plays An Importatant Role. Similarly, In Making Cultivation Business A Brand",
    imageUrl: "/images/fimage10.jpg",
  },
  {
    mission: "Invest With Confidence, Havest The Rewards",
    vision:
      "And In Order To Make A Business, Brand Advertising And MArketing Plays An Importatant Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary",
    imageUrl: "/images/fimage11.jpg",
  },
  {
    mission: "Where Your Financial Dreams Become Reality",
    vision:
      "And In Order To Make A Business, Brand Advertising And MArketing Plays An Importatant Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary",
    imageUrl: "/images/fimage13.jpg",
  },
];

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const [info, setInfo] = useState(infos.at(index));

  const scrollForward = () => {
    setIndex((currentIndex) => (currentIndex < 2 ? currentIndex + 1 : 0));
    setInfo(infos.at(index));
  };

  const scrollBackward = () => {
    setIndex((currentIndex) => (currentIndex > 0 ? currentIndex - 1 : 2));
    setInfo(infos.at(index));
  };

  return (
    <section
      className="
    py-16
    px-3
    sm:p-20
    md:pt-40
    grid 
    grid-cols-1
    min-[990px]:grid-cols-2
    2xl:grid-cols-12
    max-[990px]:bg-cover
    max-[990px]:bg-center
    min-[1600px]:bg-repeat-round
    bg-[url('/images/finbest-bg.png')] 
    text-white 
    bg-[#16243E]
    "
    >
      <div className="place-self-center max-2xl:hidden">
        <ScrollBackBtn onClick={scrollBackward} />
      </div>
      <div className="2xl:col-span-6 place-self-center">
        <div className="font-bold text-2xl">Be invest</div>
        <div className="text-[40px] sm:text-[55px] lg:text-[70px] font-bold capitalize leading-none">
          {info?.mission}
        </div>
        <div className="my-16 font-normal text-[22px]">{info?.vision}</div>
        <div className="flex flex-col sm:flex-row">
          <button className="rounded-[45px] max-sm:mb-4 max-sm:w-full max-sm:rounded-xl font-bold text-[14px] mr-7 text-white py-5 px-12 bg-[#004E6D]">
            Login
          </button>
          <button className="rounded-[45px] max-sm:w-full max-sm:rounded-xl font-bold text-[14px] text-white py-5 px-12 bg-[#004E6D]">
            Getting started
          </button>
        </div>
      </div>
      <div className="2xl:col-span-4 place-self-center">
        <div className="relative">
          <div>
            <img
              src={info?.imageUrl}
              alt="visual illustration of section"
              className="rounded-t-full max-[990px]:mt-14"
            />
          </div>
          <div className="max-sm:hidden absolute bottom-[410px] right-[-50px] h-24 w-24 bg-[#00b7bd] rounded-tr-full" />
          <div className="absolute bottom-12 left-[20px] sm:left-[-30px] h-20 w-20 bg-[#00b7bd] rounded-tr-full" />
          <div className="max-sm:hidden absolute bottom-12 right-[-75px] h-40 w-40 border-[3px] border-[#00b7bd] bg-transparent bg-[#00b7bd] rounded-full" />
        </div>{" "}
      </div>
      <div className="max-2xl:hidden place-self-center">
        <ScrollForwardBtn onClick={scrollForward} />
      </div>
    </section>
  );
}
