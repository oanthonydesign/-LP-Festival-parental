import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://festivalparental.com.br'),
    title: 'Festival Parental 2026 | Evento sobre Parentalidade com Especialistas',
    description: 'Um encontro presencial que reúne especialistas e famílias para discutir o desenvolvimento emocional de crianças e os desafios da parentalidade no mundo atual.',
    icons: {
        icon: '/favicon_festival-parental-lp.png',
    },
    robots: {
        index: process.env.NEXT_PUBLIC_IS_HOMO !== 'true',
        follow: process.env.NEXT_PUBLIC_IS_HOMO !== 'true',
        nocache: process.env.NEXT_PUBLIC_IS_HOMO === 'true',
        googleBot: {
            index: process.env.NEXT_PUBLIC_IS_HOMO !== 'true',
            follow: process.env.NEXT_PUBLIC_IS_HOMO !== 'true',
            noimageindex: process.env.NEXT_PUBLIC_IS_HOMO === 'true',
        },
    },
    openGraph: {
        title: 'Festival Parental 2026 | Evento sobre Parentalidade com Especialistas',
        description: 'Um encontro presencial que reúne especialistas e famílias para discutir o desenvolvimento emocional de crianças e os desafios da parentalidade no mundo atual.',
        siteName: 'Festival Parental 2026',
        locale: 'pt_BR',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                {/* Fonte do <h1> (texto de LCP) - sem isto ela so comeca a baixar depois do CSS */}
                <link
                    rel="preload"
                    href="/fonts/Sugar%20Peachy/Sugar%20Peachy%20Bold.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />

                {/* Preload Critical Hero Assets for Ultra Fast Load / LCP */}
                <link rel="preload" as="image" href="/images/palestrantes_hero_desk.webp" media="(min-width: 1024px)" type="image/webp" />
                <link rel="preload" as="image" href="/images/palestrantes_hero_mob.webp" media="(max-width: 1023px)" type="image/webp" />
                <link rel="preload" as="image" href="/images/grafismo_HERO.svg" type="image/svg+xml" />

                {/* VTurb SmartPlayer Optimizations & Preloads */}
                <Script id="vturb-plt" strategy="beforeInteractive">
                    {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
                </Script>
                <link rel="preload" href="https://scripts.converteai.net/45503b29-1a7d-4696-ac1d-75f7fc87b786/players/6a85a1668df297a6712fb774/v4/player.js" as="script" />
                <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
                <link rel="preload" href="https://cdn.converteai.net/45503b29-1a7d-4696-ac1d-75f7fc87b786/6a6b6f64101ce042e0a4ec70/main.m3u8" as="fetch" />
                <link rel="dns-prefetch" href="https://cdn.converteai.net" />
                <link rel="dns-prefetch" href="https://scripts.converteai.net" />
                <link rel="dns-prefetch" href="https://images.converteai.net" />
                <link rel="dns-prefetch" href="https://license.vturb.com" />

                <Script id="utmify-config" strategy="beforeInteractive">
                    {`window.pixelId = "698a1cc063e361a00f21dd5a";`}
                </Script>
                <Script
                    id="utmify-pixel-script"
                    src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
                    strategy="afterInteractive"
                    async
                    defer
                />
                <Script id="utmify-google-ads-config" strategy="beforeInteractive">
                    {`window.googlePixelId = "69e91b26e1b8b8560d2cbc5e";`}
                </Script>
                <Script
                    id="utmify-google-ads-pixel"
                    src="https://cdn.utmify.com.br/scripts/pixel/pixel-google.js"
                    strategy="afterInteractive"
                    async
                    defer
                />
                {/* Google Tag Manager */}
                <Script id="gtm" strategy="afterInteractive">
                    {`
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-NKNHM3BW');
                    `}
                </Script>
                {/* End Google Tag Manager */}

                {/* Facebook Pixel */}
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)}(window, document,'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                      fbq('init', '339713875849904');
                      fbq('track', 'PageView');
                    `}
                </Script>
                {/* End Facebook Pixel */}

                {/* Microsoft Clarity */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "xc6j6h355h");
                    `}
                </Script>
                {/* End Microsoft Clarity */}

            </head>
            <body className={`${dmSans.variable} antialiased bg-[#fff6ef] font-[family-name:var(--font-dm-sans)]`} >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NKNHM3BW"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                {/* Facebook Pixel (noscript) */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=339713875849904&ev=PageView&noscript=1"
                    />
                </noscript>
                {/* End Facebook Pixel (noscript) */}

                {children}
                <Script
                    id="utmify-utms"
                    src="https://cdn.utmify.com.br/scripts/utms/latest.js"
                    data-utmify-prevent-xcod-sck
                    data-utmify-prevent-subids
                    strategy="afterInteractive"
                    async
                    defer
                />
            </body>
        </html>
    )
}
