import { Badge, Breadcrumbs, Button, Checkbox, Circle, FilterRangeSlider, Pagination, ProgressCircle, Radio, Switch, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { useEffect, useState } from 'react'
import CardExample from './CardExample'
import DropdownExample from './DropdownExample'

const ComponentsSection = () => {
    const [sectionPos, setSectionPos] = useState({ top: 0, left: 0 })

    useEffect(() => {
        function handleResize() {
            const sectionNode = document.querySelector('.section-goup-components') as HTMLElement
            if (sectionNode) {
                setSectionPos({ top: sectionNode.offsetTop, left: sectionNode.offsetLeft })
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className="m-auto section-components flex flex-col items-center mt-12 ">
            <Text size="xl" className="font-medium text-gray-700 px-4" variant="h2">
                The React library to build
            </Text>

            <Text size="4xl" className="font-bold text-blue-600 mb-7 px-9 text-center" variant="h1">
                Back office platforms like DD360
            </Text>

            <section className="relative section-goup-components hidden sm:block" style={{ width: 677, height: 369 }}>
                <Badge
                    className="px-4 py-1 w-max absolute floating"
                    classNameIcon="w-4 text-green-600"
                    text="Im a Badge"
                    variant="success"
                    style={{ top: 82, left: 447, animationDelay: '0.19s' }}
                />

                <div style={{ position: 'absolute', top: 81, left: 109 }} className="floating">
                    <Checkbox checked />
                </div>

                <FilterRangeSlider
                    className="floating hidden sm:block"
                    onApply={() => {}}
                    position={{
                        show: true,
                        left: sectionPos.left + 22,
                        top: sectionPos.top + 121
                    }}
                />

                <div style={{ position: 'absolute', top: 235, left: 143, animationDelay: '0.5s' }} className="floating">
                    <Radio checked color="primary" value="a" />
                </div>

                <div style={{ position: 'absolute', top: 128, left: 429, animationDelay: '1s' }} className="floating">
                    <Pagination setSize={function noRefCheck() {}} currentPage={1} totalPages={10} />
                </div>

                <Breadcrumbs
                    className="ml-12 absolute floating"
                    options={[
                        {
                            name: 'Home',
                            to: function noRefCheck() {}
                        },
                        {
                            name: 'Category',
                            to: function noRefCheck() {}
                        },
                        {
                            name: 'Subcategory',
                            to: function noRefCheck() {}
                        }
                    ]}
                    separator=">"
                    style={{ position: 'absolute', top: 289, left: -78, animationDelay: '1s' }}
                />

                <CardExample style={{ position: 'absolute', top: 3, left: 176, animationDelay: '0.7s' }} className="bg-white floating" />

                <DropdownExample style={{ position: 'absolute', top: 150, left: 360, animationDelay: '0.3s' }} className="bg-white floating" />

                <div style={{ position: 'absolute', top: 291, left: 304 }} className="absolute floating">
                    <ProgressCircle classNamePercentage="w-full text-center text-blue-600 text-sm" value={30} width={50}>
                        {null}
                    </ProgressCircle>
                </div>

                <div style={{ position: 'absolute', top: 174, left: 559 }} className="absolute floating">
                    <Circle width="36px" height="36px" backgroundColor="#fff" border="1px solid #D1D5DB">
                        <DynamicHeroIcon icon="MailIcon" className="text-blue-600" width={20} />
                    </Circle>
                </div>

                <div style={{ position: 'absolute', top: 235, left: 562, animationDelay: '2s' }} className="absolute floating">
                    <Switch setToggle={function noRefCheck() {}} toggle />
                </div>
            </section>

            <div className="flex gap-6 px-10 flex-col sm:flex-row">
                <Button paddingX="11" paddingY="2" rounded="lg">
                    Get started
                </Button>
                <Button paddingX="11" paddingY="2" variant="secondary" className="border-blue-400 bg-white" fontWeight="normal" rounded="lg">
                    npm i dd360-ds@latest
                </Button>
            </div>
        </section>
    )
}

export default ComponentsSection
