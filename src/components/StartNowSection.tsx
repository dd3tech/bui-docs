import { Button, Circle, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import Image from 'next/image'

const StartNowSection = () => (
    <section className="relative flex flex-wrap justify-center items-center py-20 bg-gray-100 gap-14" style={{ zIndex: -20 }}>
        <article className="flex flex-col" style={{ width: 376 }}>
            <Text size="xl" className="font-semibold">
                Star now
            </Text>
            <Text size="4xl" className="font-bold">
                Ship your next <br /> project faster
            </Text>
            <Text className="font-semibold mt-8 mb-14">
                Find out why DD360 tools are trusted by thousand of open source developers and teams around the world
            </Text>
            <div className="flex gap-6">
                <Button paddingX="11" paddingY="2" className="text-xs">
                    Get started
                </Button>
                <Button paddingX="3" paddingY="2" variant="secondary" className="border-blue-400 text-xs bg-white" fontWeight="normal">
                    npm i dd360-ds@latest
                </Button>
            </div>
        </article>

        <article
            style={{
                width: 295,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #EFF6FF',
                boxShadow: '0px 10px 15px -3px rgba(17, 24, 39, 0.03)',
                borderRadius: 16,
                padding: 16
            }}
        >
            <div className="flex items-center mb-6">
                <Circle width="32px" height="32px" backgroundColor="#DBEAFE">
                    <DynamicHeroIcon className="text-blue-700" icon="ClipboardCopyIcon" width={18} />
                </Circle>
                <Text className="font-semibold ml-2" size={14}>
                    Accessibility
                </Text>
            </div>
            <Text variant="p">
                Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra ipsum morbi. Mauris pulvinar mauris malesuada vitae tincidunt dis cras
                faucibus pharetra. Ullamcorper dignissim nunc maecenas sagittis adipiscing amet mi justo. Maecenas accumsan aliquam nunc gravida lectus urna
                pretium libero.
            </Text>
        </article>

        <article
            style={{
                width: 295,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #EFF6FF',
                boxShadow: '0px 10px 15px -3px rgba(17, 24, 39, 0.03)',
                borderRadius: 16,
                padding: 16
            }}
        >
            <div className="flex items-center mb-6">
                <Circle width="32px" height="32px" backgroundColor="#DBEAFE">
                    <DynamicHeroIcon className="text-blue-700" icon="ClipboardCopyIcon" width={18} />
                </Circle>
                <Text className="font-semibold ml-2" size={14}>
                    Accessibility
                </Text>
            </div>
            <Text variant="p">
                Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra ipsum morbi. Mauris pulvinar mauris malesuada vitae tincidunt dis cras
                faucibus pharetra. Ullamcorper dignissim nunc maecenas sagittis adipiscing amet mi justo. Maecenas accumsan aliquam nunc gravida lectus urna
                pretium libero.
            </Text>
        </article>
        <Image alt="looper-variant-4" src="/looper-variant-4.svg" width={897} height={442} className="absolute right-0 bottom-0" style={{ zIndex: '-10' }} />
    </section>
)

export default StartNowSection
