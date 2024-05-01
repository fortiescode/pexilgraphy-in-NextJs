import Hero from '@/components/hero';
import photographer from 'public/photographer.png';
import Image from "next/image";
import wallhaven1 from "public/wallhaven1.jpg";
import wallhaven2 from "public/wallhaven2.jpg";
import wallhaven3 from "public/wallhaven3.jpg";
import wallhaven4 from "public/wallhaven4.jpg";
import wallhaven5 from "public/wallhaven5.jpg";
import wallhaven6 from "public/wallhaven6.jpg";
import wallhaven7 from "public/wallhaven7.jpg";
import wallhaven9 from "public/wallhaven9.jpg";

export default function Gallery() {
  return (
    <div className="flex w-11/12 min-h-screen flex-col p-4">
      <h1 className="font-bold text-orange-600 text-4xl mb-4">
        Gallery Page
      </h1>
      <section className="grid w-full grid-cols-1 md:grid-cols-4 mt-4 mb-auto gap-4 mx-auto">
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven1} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven2} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven3} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven4} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven5} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven6} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven7} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="rounded-md overflow-hidden shadow-md">
          <Image src={wallhaven9} alt="car" className="w-[100%] h-[100%] object-cover" />
        </div>
      </section>
      <Hero imgData={photographer} alt="photographer" title="person"/>
    </div>
  );
}
