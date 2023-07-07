import { Text, Flex, Button, Avatar } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'

import { openWindow, GITHUB_URL, NPM_URL } from '@/utils'
import { useTheme } from '@/pages/store/theme-store'
import { GitHubIcon } from '@/components'

function TestimonialsBanner() {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

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
      <div className="relative w-full max-w-8xl pt-[52px] p-4 sm:px-8 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
          <div
            key={key}
            className={composeClasses(
              'rounded-lg w-full h-full p-6',
              extendedPalette.cardBackground
            )}
            style={{ backgroundColor: extendedPalette.componentBgPrimaryHex }}
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
                    'block text-base',
                    extendedPalette.primaryText
                  )}
                >
                  Name person
                </Text>
                <Text size="sm" className={extendedPalette.linkPrimary}>
                  @acemarke
                </Text>
              </div>
            </Flex>
            <Text className={extendedPalette.componentText}>
              “Our library is designed with accessibility in mind, which means
              that our components are easily usable by people with visual,
              hearing or motor disabilities.”
            </Text>
          </div>
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
          <DynamicHeroIcon icon="ArrowRightIcon" width={16} />
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
          <DynamicHeroIcon
            icon="DownloadIcon"
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
