"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Title from "../ui/Title";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      <Parallax
        speed={0}
        className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full"
      >
        <Image
          src="/img/lastOfUs-bg2.png"
          alt="Hero Image"
          width={1200}
          height={1000}
          className="w-full h-full object-cover"
        />
      </Parallax>
      <Parallax
        speed={-20}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 sm:-translate-y-1/2 flex justify-center items-center w-full h-full"
      >
        {/* <h1 className="font-TheLastOfUs uppercase text-black text-[23vw]">
          The last of us
        </h1> */}
        <Title className="text-[23vw] text-black" >
          The last of us
        </Title>
      </Parallax>
      <Parallax
        speed={-20}
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full"
      >
        <Image
          src="/img/lastOfUs-bg1.png"
          alt="Hero Image"
          width={1200}
          height={1000}
          className="w-full h-full object-cover"
        />
      </Parallax>
      <div className="w-full h-16 absolute bottom-0 left-0 z-50 bg-gradient-to-b from-transparent to-black"/>
    </section>
  );
}
