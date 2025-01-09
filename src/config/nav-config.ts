import { Icons } from '@/components/icons/icons'

export type TNavConfig = {
    label: string
    slug: string
    icon: keyof typeof Icons
}[]

export const navConfig: TNavConfig = [
    {
        label: 'Strona główna',
        slug: '/',
        icon: 'home',
    },
    {
        label: 'Filmy i seriale',
        slug: '/szukaj',
        icon: 'camera',
    },
    {
        label: 'Blog',
        slug: '/blog',
        icon: 'bookOpen',
    },
]
