import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-20 px-6 absolute top-0 left-0 z-50">
      <nav className="w-full h-full flex items-center justify-between">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-10"
        />
        <div className="flex flex-col items-center gap-1">
          <Image 
            src="/img/hbo-logo.png"
            alt="HBO logo"
            width={50}
            height={50}
            className="invert"
          />
          <p className="uppercase font-bold text-sm tracking-wider">In streaming the 14th april</p>
        </div>
        <Link href="/" className="bg-black py-1.5 px-4 text-white uppercase">
          see on <span className="font-bold">max</span>
        </Link>
      </nav>
    </header>
  );
}
