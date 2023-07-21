import { useTheme } from '@/store/theme-store'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Circle, Flex, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import { ChevronRightCircleIcon } from '@/components/icons/ChevronRightCircleIcon'
import { LocationBlur } from './LocationBlur'

function BannerDashboard() {
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  return (
    <Flex
      justifyContent="center"
      className="w-full overflow-hidden mt-10 mb-14 lg:my-[104px]"
    >
      <Card
        className={composeClasses(
          'border-0 rounded-2xl mx-0 sm:mx-8 lg:mx-10 2xl:mx-0 w-full max-w-[1333px] 2xl:max-w-8xl'
        )}
        style={{
          padding: 1,
          background:
            'linear-gradient(90deg, rgba(147, 197, 253, 0.00) 15.81%, rgba(147, 197, 253, 0.20) 53.00%, rgba(147, 197, 253, 0.00) 100%)'
        }}
      >
        <div
          className={composeClasses(
            'banner-dashboard-component p-0.5 overflow-hidden rounded-2xl flex flex-col-reverse lg:flex-row relative w-full h-full pt-[44px] px-[20px] lg:p-0 lg:px-0',
            extendedPalette.cardBackground
          )}
        >
          <Image
            src="/ellipse-blur.svg"
            alt="ellipse-blur"
            className="absolute"
            width={1082}
            height={799}
            style={{ top: -469, right: -204 }}
          />

          <div className="w-fit text-center lg:text-left lg:w-full pt-9 lg:pt-0 m-auto mt-8 md:mt-0 shrink-0 description my-8 lg:my-28 lg:ml-12 xl:ml-[88px] max-w-[301px] lg:max-w-[452px]">
            <Text
              variant="h3"
              className={composeClasses(
                'mb-1 text-2xl md:text-3xl',
                extendedPalette.titleColor
              )}
            >
              Start now
            </Text>
            <Text
              variant="h2"
              className={composeClasses(
                'mb-6 tracking-wide text-2xl md:text-4xl',
                extendedPalette.primaryText
              )}
              bold
            >
              See our simulator platform
            </Text>
            <Text
              variant="p"
              className={composeClasses(
                'leading-6 mb-12 text-xs md:text-lg',
                extendedPalette.primaryText
              )}
            >
              Get a live preview of a simulator platform build with BUI and
              learn how to use our UI
            </Text>

            <Flex
              gap="6"
              className="flex-col items-center sm:flex-row sm:gap-12 group-btns"
            >
              <Link
                target="_blank"
                className={composeClasses(
                  'flex gap-2.5 px-4 py-2 items-center justify-center w-full sm:w-auto rounded-md',
                  extendedPalette.componentBgSecondary
                )}
                href="https://onboarding.dd360.mx/"
              >
                <Text className="whitespace-nowrap">Live preview</Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
            </Flex>
          </div>

          <div className="relative w-full lg:h-auto">
            <Circle
              width="36px"
              height="36px"
              backgroundColor={extendedPalette.componentBgPrimaryHex}
              className={composeClasses(
                'border absolute top-[-16px] left-[78px] lg:left-auto lg:top-[35px] lg:right-[40px] z-[5]',
                extendedPalette.cardBorderColor
              )}
            >
              <DynamicHeroIcon
                icon="BellIcon"
                className={extendedPalette.badgeDefaultColor}
                width={20}
              />
            </Circle>
            <div className="overflow-hidden min-[1350px]:right-0 left-0 min-[1350px]:left-auto top-0 ml-0 lg:ml-12 relative lg:absolute lg:w-[705px] h-[130px] xs:h-[218px] sm:h-[314px] md:h-[354px] lg:translate-y-[-50%] lg:top-[50%] rounded-l-lg">
              <Image
                src={`/sales-v2-page-${isLightTheme ? 'light' : 'dark'}_.png`}
                alt="demo-dashboard"
                className="absolute hidden lg:block border-l border-t rounded-l-lg"
                fill
                style={{
                  borderColor: 'rgb(219 234 254 / 40%)'
                }}
              />
              <Image
                src={`/sales-v2-full-page-${
                  isLightTheme ? 'light' : 'dark'
                }_.png`}
                alt="demo-dashboard"
                className="absolute lg:hidden border-x border-t rounded-lg"
                fill
                style={{
                  borderColor: 'rgb(219 234 254 / 40%)',
                  zIndex: 1
                }}
              />
              <div
                className="absolute w-full h-full z-[1]"
                style={{ background: extendedPalette.cardFilter }}
              />
              <LocationBlur
                className="absolute lg:hidden xl:right-0 xl:bottom-[927px]"
                style={{
                  position: 'absolute',
                  bottom: -67,
                  left: '76%',
                  color: isLightTheme ? '#93C5FD' : '#1F2937',
                  zIndex: 2
                }}
              />
            </div>
          </div>
          <LocationBlur
            className="absolute hidden lg:block xl:right-0 xl:bottom-[927px] z-10"
            style={{
              position: 'absolute',
              bottom: -67,
              left: '84%',
              color: isLightTheme ? '#93C5FD' : '#1F2937'
            }}
          />
        </div>
      </Card>
    </Flex>
  )
}

export default BannerDashboard
