"use client";

import Title from "../ui/Title";

export default function Video() {
  return (
    <section className="w-full sm:min-h-screen bg-black mt-10 py-10 px-4 md:px-10">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <Title className="text-[10vw] lg:text-8xl text-white z-100">
          Look for the light
        </Title>
        <video className="w-full mt-4" autoPlay loop muted playsInline>
          <source src="/video/lastOfUs-video.mp4" />
        </video>
        <p className="uppercase max-lg:text-[1.6vw] tracking-widest font-bold text-white mt-6">
          new episodes sundays at 9 pm | winner of 8 emmy* awards
        </p>
      </div>
    </section>
  );
}
