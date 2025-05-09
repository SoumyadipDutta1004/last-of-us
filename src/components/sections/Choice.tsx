import Image from "next/image";
import Title from "../ui/Title";




export default function Choice() {
  return (
    <section className="w-full h-screen sm:h-[150vh] lg:h-[200vh] px-10 mt-20 relative">
      <div className="w-full h-full relative z-10">
        <Title className="text-white text-[16vw] leading-[13.5vw] absolute top-0 left-0">{"Every <br/> choice"}</Title>
        <Title className="text-white text-[16vw] leading-[13.5vw] text-right absolute top-1/2 right-0 -translate-y-1/2">{"Implies <br/> Sacrifice"}</Title>
        <Title className="text-white text-[16vw] leading-[13.5vw] absolute bottom-0 left-0">{"Every path <br/> has a price"}</Title>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image 
          src="/img/Ellie.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="absolute -top-60 sm:-top-80 lg:-top-40 -right-24 sm:-right-36 lg:right-0 lg:mr-40 object-cover scale-50 md:scale-75 lg:scale-100"
        />
        <Image 
          src="/img/zombie.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="absolute top-1/2 -left-30 sm:-left-40 lg:left-0 -translate-y-1/2 lg:ml-30 object-cover scale-50 md:scale-75 lg:scale-100"
        />
        <Image 
          src="/img/symbol.png"
          alt="Hero Image"
          width={700}
          height={700}
          className="absolute bottom-0 sm:-bottom-24 lg:bottom-0 -right-28 sm:-right-48 lg:-right-40 lg:mr-40 object-cover opacity-50 scale-50 md:scale-75 lg:scale-100"
        />
      </div>
    </section>
  );
}
