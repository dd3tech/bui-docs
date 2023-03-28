import { Button, Card, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import Image from 'next/image'

function BannerDashboard() {
    return (
        <div className="w-full flex justify-center overflow-hidden">
            <Card
                style={{
                    backgroundImage: 'url(/dashboard-poly.svg)',
                    backgroundBlendMode: 'normal',
                    backgroundPositionX: 86,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: 'fit-content',
                    backgroundSize: 'cover',
                    marginTop: 140
                }}
                className="banner-dashboard-component bg-blue-800 rounded-2xl mb-40 flex py-16 px-12 sm:px-24 relative mx-10 md:mx-32 lg:mx-10 2xl:mx-0 w-full max-w-[1200px] 2xl:max-w-8xl"
            >
                <div className="w-full shrink-0 max-w-md my-1.5 description">
                    <Text variant="h3" size="xl" className="text-blue-300 font-semibold mb-1">
                        Star now
                    </Text>
                    <Text variant="h2" size="4xl" className="text-white mb-6 tracking-wide" bold>
                        See our demo Dashboard
                    </Text>
                    <Text variant="p" className="text-white leading-6 mb-12">
                        Get a live preview of a demo dashboard built with DD360 components or lear how to rebuild it
                    </Text>

                    <div className="flex flex-col sm:flex-row gap-12 group-btns">
                        <Button paddingX="4" paddingY="2.5" className="flex gap-2.5 items-center bg-white text-blue-700" variant="tertiary">
                            <Text className="whitespace-nowrap">Live preview</Text>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </Button>
                        <Button paddingX="0" className="flex items-center gap-2.5 text-white " variant="link">
                            <Text className="underline whitespace-nowrap">Rebuild dashboard</Text>
                            <DynamicHeroIcon icon="ChevronRightIcon" className="w-4 h-4" strokeWidth={3.5} />
                        </Button>
                    </div>
                    <Image src="/demo-dashboard.png" alt="demo-dashboard" className="mt-10 -mb-10 img-bottom hidden" width={681} height={424} />
                </div>
                <div className="hidden lg:block relative w-full h-full">
                    <div className="absolute w-[450px] h-[300px] xl:w-[650px] xl:h-[400px] top-0 -right-28 xl:-top-11 xl:-right-48">
                        <Image src="/demo-dashboard.png" alt="demo-dashboard" className="absolute" fill />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BannerDashboard
