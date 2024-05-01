import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  alt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="-z-10 absolute inset-0" >
      <Image
        src={props.imgData}
        alt={props.alt}
        title={props.title}
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200" />
    </div>
  );
}
