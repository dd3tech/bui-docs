import { GetStaticProps } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Card, Divider, Flex, Text } from 'dd360-ds'
import { Badge, OpenGraph } from '@/components'
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
// TODO: implement by sections
const sections = [
  {
    section: 'Components',
    cards: []
  },
  {
    section: 'Buttons',
    cards: []
  },
  {
    section: 'Layout',
    cards: []
  },
  {
    section: 'Forms',
    cards: []
  },
  {
    section: 'Navigation',
    cards: []
  },
  {
    section: 'Modals',
    cards: []
  },
  {
    section: 'Typography',
    cards: []
  },
  {
    section: 'Controls',
    cards: []
  },
  {
    section: 'Images',
    cards: []
  }
]

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
            extendedPalette.inputBorderHex
          )}
        />

        <Flex className="mb-10">
          <Text
            variant="p"
            className={extendedPalette.secundaryText}
            fontBold="medium"
            size="lg"
          >
            Components
          </Text>
          <Badge
            className="p-2 text-xs ml-2"
            label={cards.length.toString()}
            rounded="lg"
            style={{ fontSize: 12, width: 23, minHeight: 26 }}
          />
        </Flex>

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
                    className="m-auto"
                  />
                  <div
                    className="absolute w-full h-full top-0"
                    style={{
                      background: extendedPalette.cardFilter,
                      height: '101%'
                    }}
                  />
                </div>
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
              </Card>
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
