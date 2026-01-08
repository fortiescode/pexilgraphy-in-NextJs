import Hero from '@/components/hero';
import photographer from 'public/photographer.png';
import PageHeading from "@/components/pageheading";

export default function Blogs() {
    return (
        <div className="flex w-11/12 min-h-screen justify-between p-4 mx-auto container">
          <PageHeading title="Blogs"/>
           <Hero imgData={photographer} alt="photographer" title="person"/>
        </div>
    );
}