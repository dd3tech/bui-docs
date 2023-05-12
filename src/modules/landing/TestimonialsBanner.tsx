import Image from 'next/image'

import { Card, Circle, Text, ProgressBar, Divider, ImageIcon } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

import { openWindow, GITHUB_URL, NPM_URL } from '@/utils'

function TestimonialsBanner() {
  return (
    <section
      className="bg-blue-800 bg-no-repeat"
      style={{
        backgroundImage:
          'url(/testimonial-bottom-adornment.svg), url(/testimonial-top-adornment.svg)',
        backgroundPosition: 'left bottom, right top'
      }}
    >
      <div className="py-20 px-4 lg:px-8 xl:px-0 max-w-8xl mx-auto text-white">
        <Text className="text-center mb-14" variant="h4">
          Loved by product people like you
        </Text>
        <div className="flex gap-28 mx-8 lg:mx-0 justify-center flex-wrap md:flex-nowrap">
          <div>
            <div className="flex gap-2 mb-10">
              <Circle
                className="bg-transparent border border-blue-300 w-9 h-9 cursor-pointer"
                style={{}}
              >
                <DynamicHeroIcon icon="ChevronLeftIcon" className="w-5 h-5" />
              </Circle>
              <Circle
                className="bg-transparent border border-blue-300 w-9 h-9 cursor-pointer"
                style={{}}
              >
                <DynamicHeroIcon icon="ChevronRightIcon" className="w-5 h-5" />
              </Circle>
            </div>
            <div>
              <Card
                rounded="xl"
                className="max-w-[475px] 2xl:max-w-full bg-blue-900 pt-12 px-6 flex flex-col gap-6 border-none mb-14"
                style={{
                  boxShadow: '0px 20px 25px -5px rgba(17, 24, 39, 0.1)'
                }}
              >
                <Text variant="p" className="text-justify">
                  Lorem ipsum dolor sit amet consectetur. Nec euismod nisi
                  pharetra ipsum morbi. Mauris pulvinar mauris malesuada vitae
                  tincidunt dis cras faucibus pharetra. Ullamcorper dignissim
                  nunc maecenas sagittis adipiscing amet mi justo. Maecenas
                  accumsan aliquam nunc gravida lectus urna pretium libero.{' '}
                </Text>
                <Text
                  variant="p"
                  className="ml-auto"
                  style={{ width: 'fit-content' }}
                >
                  Jan 30 ,2023
                </Text>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image
                        className="rounded-full object-cover border-2 border-blue-300 box-border"
                        src="/random-avatar.jpg"
                        fill
                        alt="avatar"
                      />
                    </div>
                    <Text variant="h5" bold>
                      Testimony
                    </Text>
                    <Text variant="p" className="text-blue-500">
                      @acemarke
                    </Text>
                  </div>
                  <ImageIcon
                    src="/github-mark-white.svg"
                    className="cursor-pointer"
                    style={{ width: '18px', height: '18px' }}
                    onClick={() => openWindow(GITHUB_URL)}
                  />
                </div>
              </Card>
              <div className="w-1/2 mx-auto">
                <ProgressBar
                  bgColorContainer="#1D4ED8"
                  backgroundColor="white"
                  value={30}
                  height="4px"
                />
              </div>
            </div>
          </div>
          <Divider
            variant="full"
            vertical
            className="border-blue-500 hidden md:block"
          />
          <div className="flex-row md:flex-col gap-12 justify-center flex">
            <div className="flex items-center gap-4">
              <ImageIcon
                src="/github-mark-white.svg"
                className="cursor-pointer"
                onClick={() => openWindow(GITHUB_URL)}
                style={{ width: '18px', height: '18px' }}
              />
              <div className="flex flex-col justify-center">
                <Text variant="h3" size={'4xl'} className="" bold>
                  +80K
                </Text>
                <Text variant="p" className="min-w-max">
                  Stars on github
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <DynamicHeroIcon
                icon="DownloadIcon"
                className="cursor-pointer w-6 h-6"
                onClick={() => openWindow(NPM_URL)}
              />
              <div className="flex flex-col justify-center">
                <Text variant="h3" size={'4xl'} className="" bold>
                  +1048
                </Text>
                <Text variant="p" className="min-w-max">
                  Weekly Downloads
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsBanner
