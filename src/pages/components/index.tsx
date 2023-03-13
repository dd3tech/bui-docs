import { OpenGraph } from '@/components'
import Badge from '@/components/Badge'
import { Card, Select, Text } from 'dd360-ds'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

export default function Docs() {
    const cards = [
        {
            title: 'Buttons',
            img: '/buttons.svg',
            badge: {
                label: 'NEW',
                color: 'green'
            }
        },
        {
            title: 'Logos',
            img: '/logos.svg',
            badge: {
                label: 'BETA',
                color: 'blue'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'CAUTION',
                color: 'yellow'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'DEPRECATED',
                color: 'red'
            }
        },
        {
            title: 'Buttons',
            img: '/buttons.svg',
            badge: {
                label: 'NEW',
                color: 'green'
            }
        },
        {
            title: 'Logos',
            img: '/logos.svg',
            badge: {
                label: 'BETA',
                color: 'blue'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'CAUTION',
                color: 'yellow'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'DEPRECATED',
                color: 'red'
            }
        },
        {
            title: 'Buttons',
            img: '/buttons.svg',
            badge: {
                label: 'NEW',
                color: 'green'
            }
        },
        {
            title: 'Logos',
            img: '/logos.svg',
            badge: {
                label: 'BETA',
                color: 'blue'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'CAUTION',
                color: 'yellow'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'DEPRECATED',
                color: 'red'
            }
        },
        {
            title: 'Buttons',
            img: '/buttons.svg',
            badge: {
                label: 'NEW',
                color: 'green'
            }
        },
        {
            title: 'Logos',
            img: '/logos.svg',
            badge: {
                label: 'BETA',
                color: 'blue'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'CAUTION',
                color: 'yellow'
            }
        },
        {
            title: 'Input fields',
            img: '/input-fields.svg',
            badge: {
                label: 'DEPRECATED',
                color: 'red'
            }
        }
    ]

    const builds = {
        '1.2.9': { label: 'build 129' },
        '1.3.9': { label: 'build 139' },
        '1.4.9': { label: 'build 149' }
    }

    return (
        <>
            <Image alt="flare-left" src="/flare-left.svg" className="absolute -top-8" style={{ zIndex: '-10' }} />
            <Image alt="flare-right" src="/flare-right.svg" className="absolute right-0 -top-8" style={{ zIndex: '-10' }} />
            <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />
            <main className="max-w-5xl mx-auto py-16 px-8 lg:px-16 xl:px-0">
                <div className="flex justify-between items-center mb-7">
                    <Text variant="h1" className="text-gray-900" size="5xl" bold>
                        Componets
                    </Text>
                    <div style={{ width: '184px' }}>
                        <Select optionsList={builds} rounded="xl" className="border-gray-300 bg-white" />
                    </div>
                </div>

                <Text variant="p" className="text-gray-500 mb-10" fontBold="medium" style={{ fontSize: '22px' }}>
                    Components for building powerful interfaces.
                </Text>

                <section className="grid gap-x-4 gap-y-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(228px, 1fr))' }}>
                    {cards.map((card, index) => (
                        <article key={index}>
                            <Card
                                height={128}
                                padding={0}
                                style={{
                                    backgroundImage: `url(${card.img})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                                className="rounded border-gray-300"
                            ></Card>
                            <div className="flex justify-between items-center mt-2">
                                <Text variant="h2" size="base" className="font-semibold">
                                    {card.title}
                                </Text>
                                {card.badge && <Badge color={card.badge.color} label={card.badge.label} />}
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
    return {
        props: {
            locale,
            ...(await serverSideTranslations(locale))
        }
    }
}
