import Image from 'next/image'
import { Card, Circle, Text, ProgressBar, Divider } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

function TestimonialsBanner() {
    return (
        <section
            className="bg-blue-800 bg-no-repeat"
            style={{
                backgroundImage: 'url(/testimonial-bottom-adornment.svg), url(/testimonial-top-adornment.svg)',
                backgroundPosition: 'left bottom, right top'
            }}
        >
            <div className="py-20 px-4 lg:px-8 xl:px-0 max-w-7xl mx-auto text-white">
                <Text className="text-center mb-14" variant="h4">
                    Loved by product people like you
                </Text>
                <div className="flex gap-28">
                    <div>
                        <div className="flex gap-2 mb-10">
                            <Circle className="bg-transparent border w-9 h-9 cursor-pointer" style={{}}>
                                <DynamicHeroIcon icon="ChevronLeftIcon" className="w-5 h-5" />
                            </Circle>
                            <Circle className="bg-transparent border w-9 h-9 cursor-pointer" style={{}}>
                                <DynamicHeroIcon icon="ChevronRightIcon" className="w-5 h-5" />
                            </Circle>
                        </div>
                        <div>
                            <Card
                                rounded="xl"
                                className="bg-blue-900 pt-12 px-6 flex flex-col gap-6 border-none mb-14"
                                style={{ boxShadow: '0px 20px 25px -5px rgba(17, 24, 39, 0.1)' }}
                            >
                                <Text variant="p" className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra ipsum morbi. Mauris pulvinar mauris malesuada vitae
                                    tincidunt dis cras faucibus pharetra. Ullamcorper dignissim nunc maecenas sagittis adipiscing amet mi justo. Maecenas
                                    accumsan aliquam nunc gravida lectus urna pretium libero.{' '}
                                </Text>
                                <Text variant="p" className="ml-auto" style={{ width: 'fit-content' }}>
                                    Jan 30 ,2023
                                </Text>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            className="rounded-full object-cover border-2 border-blue-300 box-border"
                                            src="/random-avatar.jpg"
                                            width={32}
                                            height={32}
                                            alt="avatar"
                                        />
                                        <Text variant="h5" bold>
                                            Testimony
                                        </Text>
                                        <Text variant="p" className="text-blue-500">
                                            @acemarke
                                        </Text>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                        <path
                                            d="M14.6313 7.46852L12.925 1.06227C12.8698 0.858383 12.7514 0.677223 12.5869 0.544765C12.4223 0.412307 12.2201 0.335356 12.0091 0.324946C11.7981 0.314536 11.5892 0.371202 11.4125 0.486817C11.2357 0.602433 11.1 0.771061 11.025 0.96852L9.79375 4.24977H5.20625L3.975 0.96852C3.89997 0.771061 3.76434 0.602433 3.58755 0.486817C3.41077 0.371202 3.20191 0.314536 2.99094 0.324946C2.77996 0.335356 2.5777 0.412307 2.41315 0.544765C2.24861 0.677223 2.13023 0.858383 2.075 1.06227L0.368754 7.46852C0.302132 7.717 0.3138 7.97999 0.402165 8.22159C0.49053 8.4632 0.651288 8.67165 0.862504 8.81852L6.7875 12.9185C6.9506 13.0291 7.1364 13.1017 7.33125 13.131H7.66875C7.8636 13.1017 8.04941 13.0291 8.2125 12.9185L14.1375 8.81852C14.3487 8.67165 14.5095 8.4632 14.5978 8.22159C14.6862 7.97999 14.6979 7.717 14.6313 7.46852ZM9.23125 5.74977L7.5 10.3623L5.76875 5.74977H9.23125ZM3.11875 2.95602L3.9875 5.26227L5.95625 10.5185L1.8625 7.68102L3.11875 2.95602ZM9.04375 10.5185L11.0125 5.26227L11.8813 2.95602L13.1375 7.68102L9.04375 10.5185Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </Card>
                            <div className="w-1/2 mx-auto">
                                <ProgressBar bgColorContainer="#1D4ED8" backgroundColor="white" value={30} height="4px" />
                            </div>
                        </div>
                    </div>
                    <Divider variant="full" vertical className=" border-blue-500" />
                    <div className="flex-col gap-12 justify-center hidden sm:flex">
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.52" height="19.21" viewBox="0 0 15 14" fill="none">
                                <path
                                    d="M14.6313 7.46852L12.925 1.06227C12.8698 0.858383 12.7514 0.677223 12.5869 0.544765C12.4223 0.412307 12.2201 0.335356 12.0091 0.324946C11.7981 0.314536 11.5892 0.371202 11.4125 0.486817C11.2357 0.602433 11.1 0.771061 11.025 0.96852L9.79375 4.24977H5.20625L3.975 0.96852C3.89997 0.771061 3.76434 0.602433 3.58755 0.486817C3.41077 0.371202 3.20191 0.314536 2.99094 0.324946C2.77996 0.335356 2.5777 0.412307 2.41315 0.544765C2.24861 0.677223 2.13023 0.858383 2.075 1.06227L0.368754 7.46852C0.302132 7.717 0.3138 7.97999 0.402165 8.22159C0.49053 8.4632 0.651288 8.67165 0.862504 8.81852L6.7875 12.9185C6.9506 13.0291 7.1364 13.1017 7.33125 13.131H7.66875C7.8636 13.1017 8.04941 13.0291 8.2125 12.9185L14.1375 8.81852C14.3487 8.67165 14.5095 8.4632 14.5978 8.22159C14.6862 7.97999 14.6979 7.717 14.6313 7.46852ZM9.23125 5.74977L7.5 10.3623L5.76875 5.74977H9.23125ZM3.11875 2.95602L3.9875 5.26227L5.95625 10.5185L1.8625 7.68102L3.11875 2.95602ZM9.04375 10.5185L11.0125 5.26227L11.8813 2.95602L13.1375 7.68102L9.04375 10.5185Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <div className="flex flex-col justify-center">
                                <Text variant="h3" size={'4xl'} className="" bold>
                                    +80K
                                </Text>
                                <Text variant="p" className="min-w-max">
                                    Stars on gitlab
                                </Text>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.52" height="19.21" viewBox="0 0 15 14" fill="none">
                                <path
                                    d="M14.6313 7.46852L12.925 1.06227C12.8698 0.858383 12.7514 0.677223 12.5869 0.544765C12.4223 0.412307 12.2201 0.335356 12.0091 0.324946C11.7981 0.314536 11.5892 0.371202 11.4125 0.486817C11.2357 0.602433 11.1 0.771061 11.025 0.96852L9.79375 4.24977H5.20625L3.975 0.96852C3.89997 0.771061 3.76434 0.602433 3.58755 0.486817C3.41077 0.371202 3.20191 0.314536 2.99094 0.324946C2.77996 0.335356 2.5777 0.412307 2.41315 0.544765C2.24861 0.677223 2.13023 0.858383 2.075 1.06227L0.368754 7.46852C0.302132 7.717 0.3138 7.97999 0.402165 8.22159C0.49053 8.4632 0.651288 8.67165 0.862504 8.81852L6.7875 12.9185C6.9506 13.0291 7.1364 13.1017 7.33125 13.131H7.66875C7.8636 13.1017 8.04941 13.0291 8.2125 12.9185L14.1375 8.81852C14.3487 8.67165 14.5095 8.4632 14.5978 8.22159C14.6862 7.97999 14.6979 7.717 14.6313 7.46852ZM9.23125 5.74977L7.5 10.3623L5.76875 5.74977H9.23125ZM3.11875 2.95602L3.9875 5.26227L5.95625 10.5185L1.8625 7.68102L3.11875 2.95602ZM9.04375 10.5185L11.0125 5.26227L11.8813 2.95602L13.1375 7.68102L9.04375 10.5185Z"
                                    fill="currentColor"
                                />
                            </svg>
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
