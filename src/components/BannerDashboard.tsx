import { Button, Card, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import React from 'react'

function BannerDashboard() {
    return (
        <Card
            style={{
                backgroundImage: 'url(/dashboard-poly.svg)',
                backgroundBlendMode: 'normal',
                backgroundPositionX: 86
            }}
            className="bg-blue-800 rounded-2xl my-20 flex py-16 px-24 relative"
        >
            <div className="max-w-md my-1.5">
                <Text variant="h3" size="xl" className="text-blue-300 font-semibold mb-1">
                    Star now
                </Text>
                <Text variant="h2" size="4xl" className="text-white mb-6" bold>
                    See our demo Dashboard
                </Text>
                <Text variant="p" className="text-white leading-6 mb-12">
                    Get a live preview of a demo dashboard built with DD360 components or lear how to rebuild it
                </Text>

                <div className="flex gap-12">
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
            </div>

            <div
                className="absolute right-0 transform scale-150 bg-cover top-20"
                style={{ backgroundImage: 'url(/demo-dashboard.png)', width: 505.6, height: 310.97 }}
            />
        </Card>
    )
}

export default BannerDashboard
