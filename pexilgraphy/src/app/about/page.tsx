import Hero from '@/components/hero';
import PageHeading from "@/components/pageheading";
import photographer from 'public/photographer.png';

export default function About() {
    return (
        <div className="flex w-11/12 min-h-screen justify-between p-4 mx-auto">
           <PageHeading title="About"/>
           <Hero imgData={photographer} alt="photographer" title="person"/>
        </div>
    );
}