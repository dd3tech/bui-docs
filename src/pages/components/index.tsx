import { GetStaticProps } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'

import { Card, Divider, Flex, Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

import { Badge, OpenGraph } from '@/components'
import { useTheme } from '../store/theme-store'
import { useTranslation } from 'next-i18next'
import { components } from '@/components/Layout/SideBarDocs'

interface Section {
  [key: string]: {
    cards: {
      title: string
      img: string
      pathname: string
      maxWith?: number
    }[]
  }
}

const sections: Section = {
  buttons: {
    cards: [
      {
        title: 'Button group',
        img: 'buttons-component-dark.png',
        pathname: 'button-group'
      },
      {
        title: 'Shape Button',
        img: 'shape-buttons-component-dark.png',
        pathname: 'button-shape'
      },
      {
        title: 'Radio buttons',
        img: 'radio-buttons-component-dark.png',
        pathname: 'button-radio'
      }
    ]
  },
  layout: {
    cards: [
      {
        title: 'Navbar',
        img: 'navbar-component-dark.png',
        pathname: 'navbar'
      },
      {
        title: 'Card',
        img: 'card-component-dark.png',
        pathname: 'card'
      },
      {
        title: 'Sidebar',
        img: 'side-bar-component-dark.png',
        pathname: 'sidebar'
      }
    ]
  },
  form: {
    cards: [
      {
        title: 'Input',
        img: 'input-component-dark.png',
        pathname: 'input'
      },
      {
        title: 'Textarea',
        img: 'text-area-component-dark.png',
        pathname: 'textarea'
      },
      {
        title: 'Slider',
        img: 'slider-card-component-dark.png',
        pathname: 'range-slider'
      }
    ]
  },
  navigation: {
    cards: [
      {
        title: 'Pagination',
        img: 'pagination-component-dark.png',
        pathname: 'pagination'
      },
      {
        title: 'Breadcrumbs',
        img: 'breadcrumbs-component-dark.png',
        pathname: 'breadcrumbs'
      },
      {
        title: 'Tabs',
        img: 'tabs-component-dark.png',
        pathname: 'tabs'
      }
    ]
  },
  modals: {
    cards: [
      {
        title: 'Modal',
        img: 'modal-component-dark.png',
        pathname: 'modal'
      },
      {
        title: 'Aside modal',
        img: 'aside-modal-component-dark.png',
        pathname: 'aside-modal'
      }
    ]
  },
  typography: {
    cards: [
      {
        title: 'Variants',
        img: 'text-component-dark.png',
        pathname: 'text'
      },
      {
        title: 'Align',
        img: 'align-component-dark.png',
        pathname: 'kbd'
      }
    ]
  },
  controls: {
    cards: [
      {
        title: 'CircularProgressBar',
        img: 'progress-cycle-component-dark.png',
        pathname: 'progress-circle'
      },
      {
        title: 'Stepper',
        img: 'steps-component-dark.png',
        pathname: 'stepper'
      },
      {
        title: 'Switch',
        img: 'toggles-component-dark.png',
        pathname: 'switch'
      }
    ]
  },
  images: {
    cards: [
      {
        title: 'Image',
        img: 'image-component-dark.png',
        pathname: 'image'
      },
      {
        title: 'Avatar',
        img: 'avatar-component-dark.png',
        pathname: 'avatar',
        maxWith: 302
      }
    ]
  },
  components: {
    cards: [
      {
        title: 'Filter range  slider',
        img: 'slider-card-component-dark.png',
        pathname: 'filter-range-slider'
      },
      {
        title: 'Dropdown',
        img: 'dropdown-component-dark.png',
        pathname: 'dropdown'
      },
      {
        title: 'Date picker',
        img: 'date-and-picker-component-dark.png',
        pathname: 'date-picker'
      }
    ]
  }
}

export default function Docs() {
  const { t } = useTranslation('common')
  const {
    themeObject: { extendedPalette },
    isLightTheme
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

        {Object.entries(sections).map(([key, section]) => (
          <>
            <Flex className="mb-10 mt-8">
              <Text
                variant="p"
                className={extendedPalette.secundaryText}
                fontBold="medium"
                size="lg"
              >
                {t(key)}
              </Text>
              <Badge
                className="p-2 text-xs ml-2"
                label={components[key].items.length.toString()}
                rounded="lg"
                style={{ fontSize: 12, width: 23, minHeight: 26 }}
              />
            </Flex>

            <section
              className={composeClasses(
                'grid gap-x-4 gap-y-5 grid-cols-1',
                section.cards.length === 3 && 'md:grid-cols-2 lg:grid-cols-3',
                section.cards.length === 2 && 'md:grid-cols-2'
              )}
            >
              {section.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={composeClasses(
                    section.cards.length > 2 &&
                      index === 2 &&
                      'col-span-1 md:col-span-2 lg:col-span-1'
                  )}
                >
                  <Card
                    height={278}
                    padding={0}
                    className={composeClasses(
                      'px-4 pt-6 pb-4 rounded-2xl shadow-lg',
                      extendedPalette.cardBackground,
                      extendedPalette.cardBorderColor
                    )}
                  >
                    <div className="relative w-full h-full max-h-[204px]">
                      <Image
                        alt={card.img}
                        src={`/components/${
                          isLightTheme
                            ? card.img.replace('dark', 'light')
                            : card.img
                        }`}
                        fill
                        className={composeClasses(
                          'm-auto overflow-hidden',
                          section.cards.length === 3
                            ? 'max-w-[296px]'
                            : 'max-w-[491px]'
                        )}
                        style={{ maxWidth: card.maxWith }}
                      />
                    </div>
                    <Link
                      className={composeClasses(
                        'font-bold text-blue-400 ml-auto flex justify-center gap-2 pt-2',
                        extendedPalette.linkPrimary
                      )}
                      href={`/docs/${key}/${card.pathname}`}
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
          </>
        ))}
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
