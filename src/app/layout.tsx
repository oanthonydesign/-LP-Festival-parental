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
    title: 'Festival Parental',
    description: 'Muito mais do que um Festival. É um movimento!',
    icons: {
        icon: '/favicon.svg',
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
            </head>
            <body className={`${dmSans.variable} ${archivo.variable} antialiased bg-[#fff6ef] font-[family-name:var(--font-dm-sans)]`}>
                {children}
                <Script
                    id="utmify-utms"
                    src="https://cdn.utmify.com.br/scripts/utms/latest.js"
                    data-utmify-prevent-xcod-sck
                    data-utmify-prevent-subids
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
