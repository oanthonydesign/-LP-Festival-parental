import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    const isHomo = process.env.NEXT_PUBLIC_IS_HOMO === 'true'

    if (isHomo) {
        return {
            rules: {
                userAgent: '*',
                disallow: '/',
            },
        }
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/lp-b',
        },
        sitemap: 'https://festivalparental.com.br/sitemap.xml',
    }
}
