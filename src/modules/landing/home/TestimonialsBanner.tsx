import { useEffect, useState } from 'react'
import { Text, Flex, Button, Avatar, useResize } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { ArrowRightIcon, DownloadIcon } from '@heroicons/react/solid'

import { openWindow, GITHUB_URL, NPM_URL } from '@/utils'
import { useTheme } from '@/pages/store/theme-store'
import { GitHubIcon } from '@/components'
import { splitArray } from '@/utils/utils'

interface Testimonial {
  id: number
  name: string
  username: string
  message: string
}

const testimonials: Testimonial[][] = [
  [
    {
      id: 1,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind.”`
    },
    {
      id: 2,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily usable by people with visual, hearing or motor disabilities.”`
    },
    {
      id: 3,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily.”`
    },
    {
      id: 4,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily.”`
    },
    {
      id: 5,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily usable by people with visual, hearing or motor disabilities.”`
    },
    {
      id: 6,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind.”`
    },
    {
      id: 7,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily.”`
    },
    {
      id: 8,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily.”`
    },
    {
      id: 9,
      name: 'Name person',
      username: '@acemarke',
      message: `“Our library is designed with accessibility in mind, which means that our components are easily.”`
    }
  ]
]

function TestimonialsBanner() {
  const {
    themeObject: { extendedPalette }
  } = useTheme()
  const { size } = useResize()
  const [cards, setCards] = useState<Testimonial[][]>(testimonials)

  useEffect(() => {
    const currentArray = [...testimonials[0]]
    if (!size?.width) return

    if (size.width >= 768) {
      setCards(splitArray(currentArray, 3))
    } else {
      currentArray.splice(2, 5)
      setCards(splitArray(currentArray, 2))
    }
    // else {
    //   currentArray.splice(2, 4)
    //   setCards(splitArray(currentArray, 1))
    // }
  }, [size])

  return (
    <section className="px-4 lg:px-8 xl:px-0 max-w-8xl mx-auto text-white mb-[188px]">
      <Text
        size="3xl"
        className={composeClasses('text-center', extendedPalette.titleColor)}
        variant="h4"
      >
        Loved by
      </Text>
      <Text
        size="4xl"
        className={composeClasses('text-center', extendedPalette.primaryText)}
        variant="h4"
      >
        product people like you
      </Text>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative mt-12 sm:mt-[52px] md:px-10">
        {cards.map((group, index) => (
          <Flex gap="4" key={index} className="flex-col sm:gap-6">
            {group.map((testimonial) => (
              <div
                key={testimonial.id}
                className={composeClasses(
                  'rounded-lg h-fit lg:min-h-[184px] max-w-full p-4 sm:p-6',
                  extendedPalette.cardBackground
                )}
                style={{
                  backgroundColor: extendedPalette.componentBgPrimaryHex
                }}
              >
                <Flex alignItems="center" gap="2" className="mb-4">
                  <Avatar
                    className={composeClasses(
                      'w-8 h-8',
                      extendedPalette.componentBgSecondary
                    )}
                  >
                    A
                  </Avatar>
                  <div>
                    <Text
                      bold
                      className={composeClasses(
                        'block text-xs sm:text-base',
                        extendedPalette.primaryText
                      )}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      size="sm"
                      className={composeClasses(
                        'text-xs sm:text-base',
                        extendedPalette.linkPrimary
                      )}
                    >
                      {testimonial.username}
                    </Text>
                  </div>
                </Flex>
                <Text
                  className={composeClasses(
                    'text-xs sm:text-base',
                    extendedPalette.componentText
                  )}
                >
                  {testimonial.message}
                </Text>
              </div>
            ))}
          </Flex>
        ))}
        <div
          className="absolute w-full h-full z-[1]"
          style={{ background: extendedPalette.cardFilterSecondary }}
        />
      </div>
      <Flex justifyContent="center" alignItems="center" className="mb-24">
        <Button
          className="flex justify-center items-center w-full sm:min-w-[149px] sm:max-w-[150px] h-10 gap-2"
          paddingY="2"
          rounded="lg"
        >
          Get started
          <ArrowRightIcon width={16} />
        </Button>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="12"
        className="flex-col sm:flex-row"
      >
        <Flex alignItems="center" gap="4">
          <GitHubIcon
            className={composeClasses(
              'cursor-pointer w-10 h-10',
              extendedPalette.iconColor
            )}
            onClick={() => openWindow(GITHUB_URL)}
          />
          <Flex
            justifyContent="center"
            className={composeClasses('flex-col', extendedPalette.primaryText)}
          >
            <Text variant="h3" className="text-4xl sm:text-5xl" bold>
              +80K
            </Text>
            <Text variant="p" className="min-w-max text-sm sm:text-base">
              Stars on github
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          gap="4"
          className={extendedPalette.primaryText}
        >
          <DownloadIcon
            className={composeClasses(
              'cursor-pointer w-10 h-10',
              extendedPalette.iconColor
            )}
            onClick={() => openWindow(NPM_URL)}
          />
          <Flex justifyContent="center" className={composeClasses('flex-col')}>
            <Text variant="h3" className="text-4xl sm:text-5xl" bold>
              +1048
            </Text>
            <Text variant="p" className="min-w-max text-sm sm:text-base">
              Weekly Downloads
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}

export default TestimonialsBanner
