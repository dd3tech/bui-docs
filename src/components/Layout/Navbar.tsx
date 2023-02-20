import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Input, Text } from 'dd360-ds'
import { Switch } from '@/components'

const menu = [
    {
        key: 1,
        label: 'components',
        link: '/components'
    },
    {
        key: 2,
        label: 'docs',
        link: '/docs'
    },
    {
        key: 3,
        label: 'examples',
        link: '/examples'
    }
]

function Navbar() {
    const { t } = useTranslation('common')
    return (
        <nav className="bg-white">
            <div className="flex justify-between items-center py-6 mx-auto max-w-7xl px-4 lg:p-8 xl:px-0">
                <Link href="/">
                    <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
                </Link>
                <ul className="flex items-center gap-8 h-12">
                    {menu.map(({ key, label, link }) => (
                        <Link key={key} href={link} className="h-full flex items-center border-b-4 border-transparent hover:border-blue-500">
                            {t(label)}
                        </Link>
                    ))}
                </ul>
                <Input
                    inputBlank
                    rounded="2xl"
                    classNameAdornment="py-3 w-80 lg:mt-0"
                    startAdornment={<DynamicHeroIcon icon="SearchIcon" className="w-4 h-4 mr-2 text-gray-500" />}
                    endAdornment={
                        <Text size="xs" className="min-w-max border py-1 px-2 rounded-2xl text-gray-500 select-none" variant="p">
                            Ctrl + K
                        </Text>
                    }
                    className="bg-gray-50"
                    variant="active"
                    placeholder="Search the docs   (Ctrl + k)"
                />
                <Switch />
            </div>
        </nav>
    )
}

export default Navbar
