import Link from "next/link";
import icon from "public/icons/favicon.png";
import Image from "next/image";
import Button from "@/components/button";

export default function Navbar() {
  return (
    <div className="w-11/12 md:flex md:justify-between md:items-center md:my-12 md:mx-auto container">
      <div className="flex md:justify-center pl-4 md:items-center relative items-start">
        <div className="overflow-hidden absolute md:-left-6 md:-top-8">
          <Image
            src={icon}
            alt="icon"
            className="object-cover w-10 md:w-20 opacity-25"
          />
        </div>
        <h1 className="text-2xl font-bold p-4 text-[#007fff] md:text-4xl">
          Pixelgraphy
        </h1>
      </div>
      <div className="hidden md:flex md:items-center text-xl justify-center md:ml-auto gap-4 text-md text-slate-500">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
        <Button primary href="/community" text="Join Us" />
      </div>
    </div>
  );
}
