import { MetadataRoute } from 'next'

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
        },
        sitemap: 'https://festivalparental.com.br/sitemap.xml',
    }
}
