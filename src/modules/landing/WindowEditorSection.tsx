import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Card, Container, Divider, Text, ProgressCircle, Switch } from 'dd360-ds'
import Image from 'next/image'
import { WindowEditor } from '@/components'

const WindowEditorSection = () => (
    <section className="components-window-editor relative flex flex-wrap items-center justify-center" style={{ paddingBottom: 371 }}>
        <div className="relative" style={{ maxWidth: 544, width: '100%' }}>
            <WindowEditor header={{ show: true, title: 'Design System' }} className="w-full rounded-2xl pb-3" style={{ overflow: 'hidden' }} />
            <div style={{ position: 'absolute', top: 262, left: 579, animationDelay: '2s' }} className="switch absolute min-w-min hidden sm:block">
                <Switch setToggle={function noRefCheck() { }} toggle />
            </div>
            <Card rounded="lg" padding={6} className="absolute bg-white card-example" style={{ bottom: -225, right: -77 }}>
                <Container className="flex w-full pb-4">
                    <Text size="base" className="w-full" fontBold="medium">
                        Active Loans
                    </Text>
                    <div className="flex w-full justify-end items-center">
                        <Text size="sm" bold className="text-blue-600">
                            {' '}
                            Este mes{' '}
                        </Text>
                        <DynamicHeroIcon className="w-4 h-4 ml-2" icon="ChevronDownIcon" />
                    </div>
                </Container>

                <Divider className="border-gray-300" />

                <div className="flex items-center p-6">
                    <ProgressCircle classNamePercentage="w-full text-center text-grey-700 text-sm font-bold" value={80} width={56}>
                        {null}
                    </ProgressCircle>
                    <div className="flex ml-10">
                        <div className="flex flex-col pr-4">
                            <Text variant="span" size="xs" className="text-gray-700">
                                Puente
                            </Text>
                            <Text variant="span" size="lg" bold className="text-blue-600">
                                $ 800,400.300.00
                            </Text>
                        </div>
                        <div>
                            <div className="flex justify-center items-center bg-green-100 border border-green-600 w-4 h-4 rounded ml-auto">
                                <DynamicHeroIcon icon="ArrowUpIcon" className="text-green-600" width={12} />
                            </div>
                            <Text variant="span" fontBold="bold" className="text-green-600">
                                0.00%
                            </Text>
                        </div>
                    </div>
                </div>

                <div className="flex items-center p-6 pb-0">
                    <ProgressCircle classNamePercentage="w-full text-center text-grey-700 text-sm font-bold" value={5} width={56}>
                        {null}
                    </ProgressCircle>
                    <div className="flex ml-10">
                        <div className="flex flex-col pr-4">
                            <Text variant="span" size="xs" className="text-gray-700">
                                Pre puente
                            </Text>
                            <Text variant="span" size="lg" bold className="text-blue-600">
                                $ 800,400.300.00
                            </Text>
                        </div>
                        <div>
                            <div className="flex justify-center items-center bg-red-100 border border-red-600 w-4 h-4 rounded ml-auto">
                                <DynamicHeroIcon icon="ArrowUpIcon" className="text-red-600" width={12} />
                            </div>
                            <Text variant="span" fontBold="bold" className="text-red-600">
                                0.00%
                            </Text>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

        <div className="w-96 ml-36 mb-32 mt-80 lg:mt-32 mr-auto lg:mr-0">
            <Text size="xl" className="font-semibold">
                Some examples of our components
            </Text>
            <Text size="base" variant="p" className="mt-9">
                Get more than 20 components with beautiful defaults and simple props. From charts to input and layout elements, we covered all the essential
                components to lift the tedious front-end work from your shoulders. Get ahead with our simple API approach in no time.
            </Text>
        </div>
        <Image
            alt="looper-variant-3"
            src="/looper-variant-3.svg"
            width={590}
            height={616}
            className="absolute right-0"
            style={{ zIndex: -20, bottom: -197, right: 0 }}
        />
    </section>
)

export default WindowEditorSection
