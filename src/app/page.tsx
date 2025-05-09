import Choice from "@/components/sections/Choice";
import Hero from "@/components/sections/Hero";
import Video from "@/components/sections/Video";
import SmoothScroll from "@/components/SmoothScroll";

export default function Page() {
  return (
    <>
      <SmoothScroll>
        <Hero />
        <Video />
        <Choice />
      </SmoothScroll>
    </>
  );
}
