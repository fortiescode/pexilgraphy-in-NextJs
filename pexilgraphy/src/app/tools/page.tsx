import Hero from "@/components/hero";
import PageHeading from "@/components/pageheading";
import photographer from "public/photographer.png";
import Link from "next/link";
import Button from "@/components/button"

export default function Tools() {
  return (
    <div className="flex flex-col w-11/12 min-h-screen gap-6 p-4 ">
      <PageHeading title="Tools" />
      <Button navigation href="/tools/snippets/new" text="New"/> 
      <Hero imgData={photographer} alt="photographer" title="person" />
    </div>
  );
}
