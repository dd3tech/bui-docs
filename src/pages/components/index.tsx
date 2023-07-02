import { GetStaticProps } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Card, Divider, Flex, Select, Text } from 'dd360-ds'
import { OpenGraph, Badge } from '@/components'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '../store/theme-store'
import Link from 'next/link'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'

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

export default function Docs() {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <>
      <OpenGraph title="DD360 UI: cree rápidamente sitios web modernos sin tener que abandonar su HTML" />
      <main className="max-w-5xl mx-auto py-16 px-8 lg:px-16 xl:px-0">
        <Text
          variant="h1"
          className={composeClasses(
            'w-full sm:w-auto',
            extendedPalette.textPrimary
          )}
          size="4xl"
          bold
        >
          Components
        </Text>

        <Text
          variant="p"
          className={composeClasses('mt-1 mb-2', extendedPalette.secundaryText)}
          fontBold="medium"
          size="xl"
        >
          Components for building powerful interfaces.
        </Text>
        <Divider
          variant="full"
          className={composeClasses(
            'mb-10 dark:opacity-50',
            extendedPalette.inputBorder
          )}
        />

        <Text
          variant="p"
          className={composeClasses('mb-10', extendedPalette.secundaryText)}
          fontBold="medium"
          size="lg"
        >
          Components
        </Text>

        <section
          className="grid gap-x-4 gap-y-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))'
          }}
        >
          {cards.map((card) => (
            <article key={card.title}>
              <Card
                height={278}
                padding={0}
                // style={{
                //   backgroundImage: `url(${card.img})`,
                //   backgroundPosition: 'center',
                //   backgroundRepeat: 'no-repeat',
                //   backgroundSize: 'cover'
                // }}
                className={composeClasses(
                  'px-4 pt-6 pb-4 rounded-2xl shadow-lg',
                  extendedPalette.cardBackground,
                  extendedPalette.cardBorderColor
                )}
              >
                <div className="relative">
                  <Image
                    alt="calendar-component"
                    src="/calendar-component.png"
                    width={234}
                    height={201}
                    // className="absolute right-0 -top-8"
                    className="m-auto"
                    // style={{ zIndex: '-10' }}
                  />
                  <div
                    className="absolute w-full h-full top-0"
                    style={{
                      background: extendedPalette.cardBorderFilter
                    }}
                  />
                </div>
                {/* <Text variant="h2" size="base" className="font-semibold">
                  {card.title}
                </Text> */}

                {/* <div className="text-center"> */}
                <Link
                  className={composeClasses(
                    'font-bold text-blue-400 ml-auto flex justify-center gap-2 pt-5',
                    extendedPalette.linkPrimary
                  )}
                  href="/"
                  target="_blank"
                >
                  <Text size="xs" className="underline">
                    {card.title}
                  </Text>
                  <ArrowCircleRightIcon width={16} />
                </Link>
                {/* </div> */}
              </Card>
              {/* <div className="flex justify-between items-center mt-2">
                <Text variant="h2" size="base" className="font-semibold">
                  {card.title}
                </Text>
                {card.badge && (
                  <Badge color={card.badge.color} label={card.badge.label} />
                )}
              </div> */}
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
