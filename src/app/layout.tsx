import type { Metadata } from 'next'
import { DM_Sans, Archivo } from 'next/font/google'
import './globals.css'

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
            <body className={`${dmSans.variable} ${archivo.variable} antialiased bg-[#fff6ef] font-[family-name:var(--font-dm-sans)]`}>
                {children}
            </body>
        </html>
    )
}
