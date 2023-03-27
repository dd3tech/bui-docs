import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

import { Input, Text, Circle, ImageIcon } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import Switch from '../Switch'

import { openWindow, GITHUB_URL } from '@/utils'

const menu = [
    {
        key: 1,
        label: 'components',
        link: '/components'
    },
    {
        key: 2,
        label: 'docs',
        link: '/docs/buttons/button'
    },
    {
        key: 3,
        label: 'examples',
        link: '/docs'
    }
]

function Navbar({ isSticky, hideLogo }: { isSticky?: boolean; hideLogo?: boolean }) {
    const { t } = useTranslation('common')
    const router = useRouter()

    return (
        <nav className={composeClasses('bg-white w-full', isSticky && 'sticky top-0 z-10')}>
            <div className="flex justify-between items-center h-20 py-6 mx-auto px-4 lg:px-16 2xl:px-0 max-w-8xl">
                {!hideLogo && (
                    <Link href="/">
                        <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
                    </Link>
                )}
                <ul className="hidden items-center gap-8 h-12 md:flex">
                    {menu.map(({ key, label, link }) => (
                        <Link
                            key={key}
                            href={link}
                            locale={router?.locale}
                            className={composeClasses(
                                'h-full flex items-center border-b-4 border-transparent hover:border-blue-500 text-gray-500 font-medium',
                                router.pathname.includes(label) && 'border-blue-500'
                            )}
                        >
                            {t(label)}
                        </Link>
                    ))}
                </ul>
                <Input
                    inputBlank
                    rounded="3xl"
                    className="hidden md:flex lg:mt-0 bg-gray-100 text-sm"
                    style={{ height: '40px' }}
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
                <Circle
                    className="hidden md:block cursor-pointer"
                    width="36px"
                    height="36px"
                    backgroundColor="transparent"
                    onClick={() => openWindow(GITHUB_URL)}
                >
                    <ImageIcon src="/github-mark.svg" style={{ width: 36, height: 36 }} />
                </Circle>
                <Circle className="block md:hidden cursor-pointer" width="36px" height="36px" backgroundColor="transparent">
                    <DynamicHeroIcon icon="MenuIcon" className="text-blue-800" />
                </Circle>
            </div>
        </nav>
    )
}

export default Navbar
