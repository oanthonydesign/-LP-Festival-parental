import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import Marquee01 from '@/components/sections/Marquee01';
import Marquee02 from '@/components/sections/Marquee02';
import Section2 from '@/components/sections/Section2';
import Section8 from '@/components/sections/Section8';
import SpeakersSection from '@/components/sections/SpeakersSection';
import Section6 from '@/components/sections/Section6';
import Section7 from '@/components/sections/Section7';
import Section5 from '@/components/sections/Section5';
import Section9 from '@/components/sections/Section9';
import Section10 from '@/components/sections/Section10';
import Section11 from '@/components/sections/Section11';
import Section12 from '@/components/sections/Section12';
import Section13 from '@/components/sections/Section13';
import Section14 from '@/components/sections/Section14';
import Section15 from '@/components/sections/Section15';
import Rodape from '@/components/sections/Rodape';
import Copyright from '@/components/sections/Copyright';
import SectionScheduleSimple from '@/components/sections/SectionScheduleSimple';
import SectionSpecialGuests from '@/components/sections/SectionSpecialGuests';

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden relative">
            <Header />
            <HeroSection />
            <div className="-mt-24 relative z-30">
                <Marquee01 />
                <Marquee02 />
            </div>
            <SectionSpecialGuests />
            <Section2 />
            <Section8 />
            <Section6 />
            <SectionScheduleSimple />
            <Marquee01 />
            <Marquee02 />
            <SpeakersSection />
            <Section5 />
            <Section7 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            {/* <Section14 /> */}
            {/* <Section15 /> */}
            <Rodape />
            <Copyright />
        </main>
    )
}
