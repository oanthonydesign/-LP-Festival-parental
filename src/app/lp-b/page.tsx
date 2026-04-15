import Header from '@/components/sections/Header';
import HeroSectionB from '@/components/sections/HeroSectionB';
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
import Section15 from '@/components/sections/Section15';
import Section16 from '@/components/sections/Section16';
import Rodape from '@/components/sections/Rodape';
import Copyright from '@/components/sections/Copyright';
import SectionScheduleSimple from '@/components/sections/SectionScheduleSimple';
import SectionSpecialGuests from '@/components/sections/SectionSpecialGuests';
import StickyBottomBar from '@/components/sections/StickyBottomBar';
import WhatsAppButton from '@/components/sections/WhatsAppButton';
import PreTicketSection from '@/components/sections/PreTicketSection';
import SectionForWho from '@/components/sections/SectionForWho';
import SectionTakeaways from '@/components/sections/SectionTakeaways';

export const metadata = {
    robots: 'noindex, nofollow',
}

const SHOW_STICKY_BAR = false;

export default function LPB() {
    return (
        <>
            <main className="min-h-screen relative overflow-x-clip">
                <Header />
                <HeroSectionB />
                <div className="-mt-24 relative z-30">
                    <Marquee01 />
                    <Marquee02 />
                </div>
                <Section2 />
                <Section8 />
                <Section5 />
                <PreTicketSection />
                <SectionForWho />
                <SectionTakeaways />
                <Section6 />
                <SectionSpecialGuests />
                <Section16 />
                <SpeakersSection />
                <Marquee01 />
                <Marquee02 />
                <SectionScheduleSimple />
                <Section15 />
                <Section7 />
                <Section9 />
                <Section10 />
                <Section11 />
                <Section12 />
                <Section13 />
                {/* <Section14 /> */}
                <Rodape />
                <Copyright />
            </main>
            <WhatsAppButton />
            {SHOW_STICKY_BAR && <StickyBottomBar />}
        </>
    )
}