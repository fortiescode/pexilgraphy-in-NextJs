import Link from "next/link";
import icon from "public/icons/favicon.png";
import Image from "next/image";
import Button from "@/components/button"

export default function Navbar() {
  return (
    <div className="w-11/12 flex justify-between items-center my-12 mx-auto">
      <div className="flex justify-center items-center relative">
        <div className="overflow-hidden absolute -left-6 -top-8">
          <Image src={icon} alt="icon" className="object-cover w-20 opacity-25" />
        </div>
        <h1 className="font-bold text-[#007fff] text-4xl">Pixelgraphy</h1>
        </div>
      <div className="flex items-center ml-auto gap-4 mb-auto text-md text-slate-500">
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
