import Hero from '@/components/hero';
import photographer from 'public/photographer.png';

export default function About() {
    return (
        <div className="flex min-h-screen items-center justify-between p-4">
           <h1 className="font-bold text-orange-600 text-4xl mb-auto">About Page</h1>
           <Hero imgData={photographer} alt="photographer" title="person"/>
        </div>
    );
}