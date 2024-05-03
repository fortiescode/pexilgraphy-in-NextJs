import Hero from "@/components/hero";
import photographer from "public/photographer.png";
import PageHeading from "@/components/pageheading";
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
    <div className="flex w-11/12 min-h-screen flex-col p-4 mx-auto">
      <PageHeading title="Gallery" />
      <section className="grid md:w-8/12 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mt-4 mb-auto gap-4 mr-auto">
        <div className="rounded-md  shadow-md border-2 border-white">
          <div className="overflow-hidden rounded-md">
            <Image
              src={wallhaven1}
              alt="car"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-center mx-auto text-sm p-2 font-light">
            <div>
              <p>john smith</p>
              <span>feb/2024</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven2}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven3}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven4}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven5}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven6}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven7}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="rounded-md overflow-hidden shadow-md border-2 border-white">
          <Image
            src={wallhaven9}
            alt="car"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </section>
      <Hero imgData={photographer} alt="photographer" title="person" />
    </div>
  );
}
