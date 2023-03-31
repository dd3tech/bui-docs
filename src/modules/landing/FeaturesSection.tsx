import { Circle, ImageIcon, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const cardsInformation = [
    {
        title: 'Accessibility',
        icon: <ImageIcon src="/person-circle.svg" style={{ width: 18 }} />,
        description:
            'Our library is designed with accessibility in mind, which means that our components are easily usable by people with visual, hearing or motor disabilities. This is achieved by implementing accessibility best practices and complying with WCAG accessibility standards.'
    },
    {
        title: 'Ready for production',
        icon: <DynamicHeroIcon className="text-blue-700" icon="CogIcon" width={18} />,
        description:
            'We have conducted extensive testing to ensure that our components are reliable, stable and scalable. In addition, our library has been used in a wide variety of projects and has proven to be an effective and efficient solution for web application development.'
    },
    {
        title: 'Developer experience',
        icon: <DynamicHeroIcon className="text-blue-700" icon="CodeIcon" width={18} />,
        description:
            'The developer experience is a priority for us. We have designed our components to be intuitive and easy to use, which speeds up the development process. In addition, we provide detailed documentation and code samples to help developers integrate our components into their projects.'
    },
    {
        title: 'High quality components',
        icon: <DynamicHeroIcon className="text-blue-700" icon="SparklesIcon" width={18} />,
        description:
            'Our component library is distinguished by the high quality of its components. All our components have been designed and developed following industry best practices and standards. We ensure that each component is well documented, easy to use and integrates seamlessly with other components. In addition, we perform rigorous testing to ensure the functionality, performance and stability of each component.'
    },
    {
        title: 'Customization',
        icon: <DynamicHeroIcon className="text-blue-700" icon="AdjustmentsIcon" width={18} />,
        description:
            'Customization is one of the strengths of our component library. We offer a wide variety of customization options so you can tailor our components to your specific design and functionality needs. You can easily modify the look and functionality of each component using configuration options and custom properties.'
    },
    {
        title: 'Solid API and Documentation',
        icon: <DynamicHeroIcon className="text-blue-700" icon="DatabaseIcon" width={18} />,
        description:
            'We have a solid API and comprehensive documentation. We have carefully designed each component and provided a clear and consistent API so you can easily use them in your projects. In addition, our detailed documentation and code samples allow you to quickly understand how to use each component and customize them according to your needs. '
    }
]

const FeaturesSection = () => (
    <section className="w-full max-w-8xl pt-40 p-4 sm:px-8 xl:px-40 2xl:px-0 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
        {cardsInformation.map((item) => (
            <article
                key={item.title}
                className="w-full lg:w-[295px] 2xl:w-full h-[250px]"
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
                    <Circle width="32px" height="32px" backgroundColor="#DBEAFE">
                        {item.icon}
                    </Circle>
                    <Text className="font-semibold ml-2" size="sm">
                        {item.title}
                    </Text>
                </div>
                <Text variant="p" size="xs">
                    {item.description}
                </Text>
            </article>
        ))}
    </section>
)

export default FeaturesSection
