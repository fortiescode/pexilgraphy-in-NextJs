import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-11/12 flex justify-between items-center mt-12 mx-auto">
      <div>logo</div>
      <div className="flex ml-auto gap-4 mb-auto text-md text-slate-500">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/community">Community</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
