import Hero from "@/components/hero";
import photographer from "public/photographer.png";
import PageHeading from "@/components/pageheading";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex w-11/12 min-h-screen justify-between p-4 mx-auto">
      <PageHeading title="Home" />
      <Hero imgData={photographer} alt="photographer" title="person" />
    </main>
  );
}
