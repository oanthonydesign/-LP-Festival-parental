import type { Metadata } from 'next'
import { DM_Sans, Archivo } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
})

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
})

export const metadata: Metadata = {
    title: 'Festival Parental 2026 | Evento sobre Parentalidade com Especialistas',
    description: 'Um encontro presencial que reúne especialistas e famílias para discutir o desenvolvimento emocional de crianças e os desafios da parentalidade no mundo atual.',
    icons: {
        icon: '/favicon.svg',
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
        <html lang="pt-BR">
            <head>
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
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-2P6C784S1B"
                    strategy="afterInteractive"
                />
                <Script id="google-tracking" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-2P6C784S1B');
                      gtag('config', 'AW-18011790342');
                    `}
                </Script>
            </head>
            <body className={`${dmSans.variable} ${archivo.variable} antialiased bg-[#fff6ef] font-[family-name:var(--font-dm-sans)]`}>
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
