import SpeakersSection from '@/components/sections/SpeakersSection';
import Section2 from '@/components/sections/Section2';
import Section5 from '@/components/sections/Section5';
import Section7 from '@/components/sections/Section7';
import Marquee01 from '@/components/sections/Marquee01';
import Marquee02 from '@/components/sections/Marquee02';
import Section6 from '@/components/sections/Section6';
import Section8 from '@/components/sections/Section8';
import Section9 from '@/components/sections/Section9';
import Section10 from '@/components/sections/Section10';
import Section11 from '@/components/sections/Section11';
import Section12 from '@/components/sections/Section12';
import Section14 from '@/components/sections/Section14';
import Section15 from '@/components/sections/Section15';
import Rodape from '@/components/sections/Rodape';
import Copyright from '@/components/sections/Copyright';

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <SpeakersSection />
            <Section2 />
            <Section5 />
            <Marquee01 />
            <Marquee02 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section14 />
            <Section15 />
            <Rodape />
            <Copyright />
        </main>
    )
}
