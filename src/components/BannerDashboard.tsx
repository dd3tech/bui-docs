import { Button, Card, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import Image from 'next/image'

function BannerDashboard() {
    return (
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
            className="banner-dashboard-component bg-blue-800 rounded-2xl mb-40 flex py-16 px-12 sm:px-24 relative mx-10 md:mx-32"
        >
            <div className="max-w-md my-1.5 description">
                <Text variant="h3" size="xl" className="text-blue-300 font-semibold mb-1">
                    Star now
                </Text>
                <Text variant="h2" size="4xl" className="text-white mb-6" bold>
                    See our demo Dashboard
                </Text>
                <Text variant="p" className="text-white leading-6 mb-12">
                    Get a live preview of a demo dashboard built with DD360 components or lear how to rebuild it
                </Text>

                <div className="flex gap-12 group-btns">
                    <Button paddingX="4" paddingY="2.5" className="flex gap-2.5 items-center bg-white text-blue-700" variant="tertiary">
                        <Text>Live preview</Text>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                    </Button>
                    <Button paddingX="0" className="flex items-center gap-2.5 text-white " variant="link">
                        <Text className="underline">Rebuild dashboard</Text>
                        <DynamicHeroIcon icon="ChevronRightIcon" className="w-4 h-4" strokeWidth={3.5} />
                    </Button>
                </div>
                <Image src="/demo-dashboard.png" alt="demo-dashboard" className="mt-10 -mb-10 img-bottom hidden" width={681} height={424} />
            </div>

            <div className="img-right" style={{ width: 535 }}>
                <Image
                    src="/demo-dashboard.png"
                    alt="demo-dashboard"
                    style={{
                        position: 'absolute',
                        maxWidth: 705,
                        bottom: -79,
                        right: -125,
                        width: '64%'
                    }}
                    width={705}
                    height={438.94}
                />
            </div>
        </Card>
    )
}

export default BannerDashboard
