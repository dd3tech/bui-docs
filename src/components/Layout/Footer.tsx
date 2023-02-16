import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Divider, Input, Text } from 'dd360-ds'
import { useTranslation } from 'react-i18next'

const footerMenu = [
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
    },
    {
        key: 3,
        label: 'Figma',
        blank: true,
        link: 'www.figma.com'
    }
]

function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="bg-white">
            <div className="max-w-7xl py-12 mx-auto">
                <Link href="/">
                    <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
                </Link>
                <div className="flex justify-between mt-16">
                    <div>
                        <Text variant="p" className="mb-2" size="base" bold>
                            Keep up to date
                        </Text>
                        <Text variant="p" className="font-semibold text-gray-500">
                            Join our newsletter for regular updates. No spam ever.
                        </Text>

                        <div className="grid gap-2 mt-8">
                            <label className="cursor-pointer text-sm font-medium" htmlFor="newsletter">
                                Subscribe to our newsletter
                            </label>
                            <div className="flex gap-3">
                                <Input id="newsletter" className="lg:mt-0 w-64" placeholder="hello@dd360.mx" style={{ background: 'inherit' }} />
                                <Button className="leading-none" rounded="lg" paddingX="8" paddingY="4">
                                    Suscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-28">
                        <ul className="flex flex-col gap-6 text-gray-500 font-normal">
                            {footerMenu.map(({ key, label, link, blank }) => (
                                <Link key={key} href={link} target={blank ? '_blank' : '_self'}>
                                    {t(label)}
                                </Link>
                            ))}
                        </ul>
                        <ol className="text-gray-700">
                            <Link className="font-bold" href="/" target="_blank">
                                Company
                            </Link>
                        </ol>
                    </div>
                </div>

                <Divider variant="full" className="border-gray-100 my-8" />

                <div className="flex justify-between items-center text-gray-500">
                    <Text variant="p">© 2023 DD360. All rights reserved.</Text>
                    <Text>Privacy</Text>
                </div>
            </div>
        </footer>
    )
}

export default Footer
