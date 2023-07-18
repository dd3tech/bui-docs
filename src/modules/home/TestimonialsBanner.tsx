import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Text, Flex, Button, Avatar, useResize, Skeleton } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { ArrowRightIcon, DownloadIcon } from '@heroicons/react/solid'

import { openWindow, GITHUB_URL, NPM_URL } from '@/utils'
import { useTheme } from '@/store/theme-store'
import { GitHubIcon } from '@/components'
import { splitArray } from '@/utils/utils'
import { useGetWeeklyDownloads } from '@/hooks/useGetWeeklyDownloads'
import { useGetInfoRepository } from '@/hooks/useGetInfoRepository'

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
      name: 'Gian Carlos Chavez',
      username: '@gcux',
      message: `“BUI is a highly comprehensive library of components for building digital products focused on finance and real estate from scratch. It provides clear, optimal, and customizable code documentation.”`
    },
    {
      id: 2,
      name: 'Andrés Bedolla',
      username: '@abedolla',
      message: `“Thanks to this library, I was able to bootstrap and develop a whole new application in record time, with truly usable and accessible components, without breaking my head designing the UI/UX from scratch. Besides that, the users loved the way they can interact with the interface and the look and feel that the components provide to the application.”`
    },
    {
      id: 3,
      name: 'Jasan Hernandez',
      username: '@jasanhdz',
      message: `“The BUI library has been a revolutionary change for our team. Thanks to it, we have been able to start projects from scratch quickly and efficiently. Its collection of Tailwind CSS-based components has allowed us to develop stunning interfaces without wasting time on technical details. The user-friendly nature and versatility of this library have sped up our development process, enabling us to focus on creating high-quality products. BUI has become an essential tool for our team, delivering solid and professional results in every project.”`
    },
    {
      id: 4,
      name: 'Lautaro Vilas',
      username: '@lavilas',
      message: `“BUI is a design library for React that offers a wide range of highly customizable components. It’s great to be able to adapt the library to the aesthetics of my project, allowing me to adjust colors, sizes, fonts and more. The library has excellent performance and the documentation is clear and concise. I recommend BUI to developers looking for a complete and flexible solution for their application design.”`
    },
    {
      id: 5,
      name: 'Ricardo Cayetano',
      username: '@rcayetanov',
      message: `“Working with BUI has been a turning point for our design team. The simplicity of its pre-fabricated components has allowed us to focus our efforts on more creative aspects of our projects, freeing up time we used to spend on repetitive tasks. But not only is it a great time saver, the quality of BUI components is impressive. Each of them shows a level of attention to detail and versatility that we haven’t seen in other tools. BUI has improved our operations in a tangible way and I am genuinely pleased with the results.”`
    },
    {
      id: 6,
      name: 'Juan Dominguez',
      username: '@jdominguez',
      message: `“Our library is designed with accessibility in mind.”`
    },
    {
      id: 7,
      name: 'Misael Arreola',
      username: '@misaelarreola',
      message: `“As part of the development team, I can confidently say that DS-360 has been a crucial pillar in our technology solution creation process. This library provides us with optimized libraries and modules, helping us save time when implementing common functionalities. Additionally, its continuous evolution and updates allow us to take advantage of new features and improvements, leading to a significant boost in the quality of our software.”`
    },
    {
      id: 8,
      name: 'Ariel Rodriguez',
      username: '@arodriguez',
      message: `“BUI transformed our team. With its components, we create stunning interfaces without compromising quality. It’s versatile, customizable, and tailors every detail to clients’ needs. Clear documentation saves time, providing guidance and examples. I highly recommend BUI to any development team. It speeds up workflow, delivering outstanding results and a hassle-free experience.”`
    },
    {
      id: 9,
      name: 'Esteban Devia',
      username: '@edevia',
      message: `“This library is amazing”`
    }
  ]
]

function TestimonialsBanner() {
  const {
    themeObject: { extendedPalette }
  } = useTheme()
  const { size } = useResize()
  const [cards, setCards] = useState<Testimonial[][]>(testimonials)
  const { weeklyDownloads, isLoading: isLoadingNpm } = useGetWeeklyDownloads()
  const { watchers, isLoading: isLoadingGithub = true } = useGetInfoRepository()

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
                    {testimonial.name[0]}
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
        <Link href="/docs/get-started/getting-started">
          <Button
            className="flex justify-center items-center w-full sm:min-w-[149px] sm:max-w-[150px] h-10 gap-2"
            paddingY="2"
            rounded="lg"
          >
            Get started
            <ArrowRightIcon width={16} />
          </Button>
        </Link>
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
            {isLoadingGithub && (
              <>
                <Skeleton className="w-20 h-8" rounded="md" />
                <Skeleton className="w-32 h-3 mt-2" rounded="md" />
              </>
            )}
            {!isLoadingGithub && (
              <>
                <Text variant="h3" className="text-4xl sm:text-5xl" bold>
                  +{watchers}
                </Text>
                <Text
                  variant="p"
                  className="min-w-max text-center text-sm sm:text-base"
                >
                  Stars on github
                </Text>
              </>
            )}
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
            {isLoadingNpm && (
              <>
                <Skeleton className="w-20 h-8" rounded="md" />
                <Skeleton className="w-32 h-3 mt-2" rounded="md" />
              </>
            )}
            {!isLoadingNpm && (
              <>
                <Text variant="h3" className="text-4xl sm:text-5xl" bold>
                  +{weeklyDownloads}
                </Text>
                <Text
                  variant="p"
                  className="min-w-max text-center text-sm sm:text-base"
                >
                  Weekly Downloads
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}

export default TestimonialsBanner
