import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Circle,
  DatePicker,
  FilterRangeSlider,
  Input,
  Pagination,
  ProgressCircle,
  Text,
  usePagination
} from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'

import CustomSwitch from '@/components/CustomSwitch'
import { useTheme } from '@/pages/store/theme-store'
import DropdownExample from './DropdownExample'
import ButtonsGetStartted from './ButtonsGetStartted'

const ComponentsSection = () => {
  const paginationProps = usePagination()
  const [sectionPos, setSectionPos] = useState({ top: 0, left: 0 })
  const [IsScreenXl, setIsScreenXl] = useState(22)
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  useEffect(() => {
    function handleResize() {
      const sectionNode = document.querySelector(
        '.section-goup-components'
      ) as HTMLElement
      if (sectionNode) {
        if (window.innerWidth <= 768) {
          setIsScreenXl(68)
        } else if (window.innerWidth <= 1280) {
          setIsScreenXl(255)
        } else {
          setIsScreenXl(22)
        }

        setSectionPos({
          top: sectionNode.offsetTop,
          left: sectionNode.offsetLeft
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="m-auto max-w-8xl section-components flex max-xl:flex-col items-center pt-[55px] xl:py-36">
      <div className="xl:max-w-lg xl:ml-10 text-center xl:text-left 2xl:ml-auto flex flex-col items-center xl:items-start">
        <Text
          className={composeClasses(
            'mb-2 text-2xl sm:text-4xl',
            extendedPalette.secundaryText
          )}
          variant="h2"
        >
          The React library to build
        </Text>

        <Text
          className={composeClasses(
            'font-bold text-2xl sm:text-5xl',
            extendedPalette.primaryText
          )}
          variant="h1"
        >
          Back office platforms like DD360
        </Text>

        <ButtonsGetStartted />
      </div>

      <section
        className="hidden sm:block relative w-full mb-6 section-goup-components max-w-2xl m-auto mt-[159px] sm:mt-[90px] md:mt-[70px] xl:mt-0 xl:ml-auto"
        style={{ maxWidth: 677, height: 369 }}
      >
        <FilterRangeSlider
          className={composeClasses(
            'demo-cmpnt floating hidden sm:block',
            isLightTheme ? 'light' : 'dark'
          )}
          onApply={() => {}}
          position={{
            show: true,
            left: sectionPos.left + IsScreenXl,
            top: sectionPos.top + 288
          }}
          min={0}
          max={50}
          initMinValue={10}
          initMaxValue={40}
          width={268}
        />

        <div
          style={{
            animationDelay: '1s'
          }}
          className="floating absolute top-[-68px] right-[26px] sm:top-[-52px] sm:left-[280px] md:top-[-34px] md:left-[40px] xl:top-[-44px] xl:left-[185px]"
        >
          <Pagination
            {...paginationProps}
            currentPage={paginationProps.currentPage + 1}
            totalPages={3}
          />
        </div>

        <div
          style={{
            animationDelay: '1s',
            zIndex: 1
          }}
          className="floating absolute left-[15%] sm:top-0 sm:left-[179px]"
        >
          <DatePicker
            format="short"
            language="en"
            minDate={new Date('2023-02-11T06:00:00.000Z')}
            onChange={function noRefCheck() {}}
            onDaySelected={function noRefCheck() {}}
            value={new Date('2023-02-27T06:00:00.000Z')}
            className="demo-cmpnt date-picker"
          />
        </div>

        <div
          style={{
            animationDelay: '1s',
            zIndex: 2
          }}
          className="floating absolute top-[59px] right-[15px] md:top-[-33px] md:left-[434px] xl:top-[163px] xl:left-[345px]"
        >
          <Input
            className="demo-cmpnt w-[265px] shadow-2xl"
            label="Search"
            onChange={function noRefCheck() {}}
            placeholder="Search"
            endAdornment={<DynamicHeroIcon icon="SearchIcon" width={20} />}
            value=""
            variant="default"
            style={{
              background: extendedPalette.inputBackground,
              color: extendedPalette.inputText,
              borderColor: extendedPalette.inputBorderHex
            }}
          />
        </div>

        <DropdownExample
          style={{
            animationDelay: '0.3s',
            zIndex: 2
          }}
          className="demo-cmpnt absolute shadow-2xl floating top-[-122px] left-[22px] sm:top-[-49px] ms:left-[96px] md:top-[109px] md:left-[42px] xl:top-[-72px] xl:left-[82px]"
        />

        <div
          style={{ animationDelay: '0.8s' }}
          className="absolute z-[2] sm:z-0 floating w-[128px] xl:w-[136px] top-[232px] right-[48px] sm:top-[290px] sm:right-[92px] md:top-[185px] md:left-[512px] xl:top-[291px] xl:left-[406px] "
        >
          <ProgressCircle
            classNamePercentage={composeClasses(
              'w-full text-center text-2xl font-bold'
            )}
            value={30}
            width={'auto' as any}
            strokeWidth={14}
            colorBackground={extendedPalette.componentBgTertiaryHex}
            colorProgress="#3B87F2"
          >
            <Text size="xs">of efficiency</Text>
          </ProgressCircle>
        </div>

        <div className="absolute floating top-[-98px] left-[218px] sm:top-[240px] sm:left-[115px] md:top-[117px] md:left-[503px]">
          <Circle
            width="36px"
            height="36px"
            backgroundColor={extendedPalette.componentBgPrimaryHex}
            className={composeClasses(
              'border',
              extendedPalette.cardBorderColor
            )}
          >
            <DynamicHeroIcon
              icon="BellIcon"
              className={extendedPalette.badgeDefaultColor}
              width={20}
            />
          </Circle>
        </div>

        <div
          style={{
            animationDelay: '2s'
          }}
          className="absolute floating top-[183px] right-[116px] md:top-[299px] md:left-[144px] xl:top-[235px] xl:left-[87px] "
        >
          <CustomSwitch className="demo-cmpnt switch" />
        </div>
      </section>

      <section
        className="block sm:hidden relative w-full section-goup-components max-w-2xl mb-auto mt-12"
        style={{ maxWidth: 677, height: 369 }}
      >
        <Image
          src={`/components-mobile-${isLightTheme ? 'light' : 'dark'}.png`}
          alt="demo-dashboard"
          className="pl-5 object-scale-down"
          fill
        />
      </section>
    </section>
  )
}

export default ComponentsSection
