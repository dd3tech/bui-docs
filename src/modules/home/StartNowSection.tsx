import Image from 'next/image'
import Link from 'next/link'
import { composeClasses } from 'dd360-ds/lib'
import { Anchor, Button, Card, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import useCopy from '@/hooks/useCopy'

const StartNowSection = () => {
  const { handleCopy, isCopied } = useCopy()

  return (
    <section className="relative">
      <div className="w-full max-w-8xl px-4 xl:px-0 py-20 mx-auto flex flex-col lg:flex-row justify-center 2xl:justify-between items-center gap-14">
        <article className="w-full flex flex-col max-w-[376px]">
          <Text size="xl" className="font-semibold text-gray-500">
            Start now
          </Text>
          <Text size="4xl" className="font-bold text-gray-900">
            Ship your next <br /> project faster
          </Text>
          <Text className="font-semibold mt-8 mb-14" size="sm">
            Find out why DD360 tools are trusted by thousand of open source
            developers and teams around the world
          </Text>
          <div className="flex flex-col lg:flex-row gap-6">
            <Link href="/docs/get-started/getting-started">
              <Button
                paddingX="11"
                paddingY="2"
                className="text-xs min-w-max"
                rounded="lg"
              >
                Get started
              </Button>
            </Link>
            <Button
              paddingX="3"
              paddingY="2"
              variant="secondary"
              className={composeClasses(
                isCopied
                  ? 'border-green-600 text-green-600'
                  : 'border-blue-400',
                'flex gap-2 text-xs bg-white w-32 min-w-max justify-between shrink-0 items-center px-4'
              )}
              fontWeight="normal"
              rounded="lg"
              onClick={() => handleCopy('npm i dd360-ds@latest')}
            >
              npm i dd360-ds@latest{' '}
              <DynamicHeroIcon
                className="text-gray-500"
                icon={isCopied ? 'ClipboardCheckIcon' : 'ClipboardIcon'}
                width={15}
              />
            </Button>
          </div>
        </article>
        <div className="flex flex-col lg:flex-row gap-12">
          <Card
            className="w-full md:max-w-[376px] lg:max-w-[295px]"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #EFF6FF',
              boxShadow: '0px 10px 15px -3px rgba(17, 24, 39, 0.03)',
              borderRadius: 16,
              padding: 16
            }}
          >
            <div className="flex items-center mb-6">
              <Text className="font-semibold ml-2" size={14}>
                Showcase
              </Text>
            </div>
            <Text variant="p" size="xs">
              Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra
              ipsum morbi. Mauris pulvinar mauris malesuada vitae tincidunt dis
              cras faucibus pharetra. Ullamcorper dignissim nunc maecenas
              sagittis adipiscing amet mi justo. Maecenas accumsan aliquam nunc
              gravida lectus urna pretium libero.
            </Text>
            <Anchor className="flex items-center text-blue-700 mt-7">
              <Text size="sm" className="pr-1 font-semibold underline">
                Learn more
              </Text>
              <DynamicHeroIcon icon="ChevronRightIcon" width={18} />
            </Anchor>
          </Card>

          <Card
            className="w-full md:max-w-[376px] lg:max-w-[295px]"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #EFF6FF',
              boxShadow: '0px 10px 15px -3px rgba(17, 24, 39, 0.03)',
              borderRadius: 16,
              padding: 16
            }}
          >
            <div className="flex items-center mb-6">
              <Text className="font-semibold ml-2" size={14}>
                Blog
              </Text>
            </div>
            <Text variant="p" size="xs">
              Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra
              ipsum morbi. Mauris pulvinar mauris malesuada vitae tincidunt dis
              cras faucibus pharetra. Ullamcorper dignissim nunc maecenas
              sagittis adipiscing amet mi justo. Maecenas accumsan aliquam nunc
              gravida lectus urna pretium libero.
            </Text>
            <Anchor className="flex items-center text-blue-700 mt-7">
              <Text size="sm" className="pr-1 font-semibold underline">
                Learn more
              </Text>
              <DynamicHeroIcon icon="ChevronRightIcon" width={18} />
            </Anchor>
          </Card>
        </div>
      </div>
      <div
        className="absolute inset-0 w-full h-full bg-gray-100"
        style={{ zIndex: -20 }}
      />
      <Image
        alt="looper-variant-4"
        src="/looper-variant-4.svg"
        width={897}
        height={442}
        className="absolute right-0 bottom-0"
        style={{ zIndex: -10 }}
      />
    </section>
  )
}

export default StartNowSection
