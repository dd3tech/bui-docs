import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Input, Text } from 'dd360-ds'
import { Switch } from '@/components'
import { useRouter } from 'next/router'
import { composeClasses } from 'dd360-ds/lib'

const menu = [
    {
        key: 1,
        label: 'components',
        link: '/docs'
    },
    {
        key: 2,
        label: 'docs',
        link: '/docs'
    },
    {
        key: 3,
        label: 'examples',
        link: '/docs'
    }
]

function Navbar({ isSticky }: { isSticky?: boolean }) {
    const { t } = useTranslation('common')
    const router = useRouter()
    console.log(router.pathname)
    return (
        <nav className={composeClasses('bg-white', isSticky && 'sticky top-0 z-10')}>
            <div className="flex justify-between items-center py-6 mx-auto px-4 lg:px-8 2xl:px-0" style={{ maxWidth: '1400px' }}>
                <Link href="/">
                    <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
                </Link>
                <ul className="flex items-center gap-8 h-12">
                    {menu.map(({ key, label, link }) => (
                        <Link
                            key={key}
                            href={link}
                            locale={router?.locale}
                            className={composeClasses(
                                'h-full flex items-center border-b-4 border-transparent hover:border-blue-500',
                                router.pathname.includes(label) && 'border-blue-500'
                            )}
                        >
                            {t(label)}
                        </Link>
                    ))}
                </ul>
                <Input
                    inputBlank
                    rounded="2xl"
                    className="py-3 w-80 lg:mt-0"
                    startAdornment={<DynamicHeroIcon icon="SearchIcon" className="w-4 h-4 mr-2 text-gray-500" />}
                    endAdornment={
                        <Text size="xs" className="min-w-max border py-1 px-2 rounded-2xl text-gray-500 select-none" variant="p">
                            Ctrl + K
                        </Text>
                    }
                    variant="active"
                    placeholder="Search the docs   (Ctrl + k)"
                />
                <Switch />
            </div>
        </nav>
    )
}

export default Navbar
