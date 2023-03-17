import { Circle, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'

const cardsInformation = [
    {
        title: 'Accessibility',
        icon: <DynamicHeroIcon className="text-blue-700" icon="ClipboardCopyIcon" width={18} />,
        description: undefined
    },
    {
        title: 'Ready for production',
        icon: <DynamicHeroIcon className="text-blue-700" icon="CogIcon" width={18} />,
        description: undefined
    },
    {
        title: 'Developer experience',
        icon: <DynamicHeroIcon className="text-blue-700" icon="CodeIcon" width={18} />,
        description: undefined
    },
    {
        title: 'High quality components',
        icon: <DynamicHeroIcon className="text-blue-700" icon="SparklesIcon" width={18} />,
        description: undefined
    },
    {
        title: 'Customization',
        icon: <DynamicHeroIcon className="text-blue-700" icon="AdjustmentsIcon" width={18} />,
        description: undefined
    },
    {
        title: 'Solid API and Documentation',
        icon: <DynamicHeroIcon className="text-blue-700" icon="CheckCircleIcon" width={18} />,
        description: undefined
    }
]

const FeaturesSection = () => (
    <section
        className="grid gap-x-14 gap-y-12 pt-40 p-4 sm:px-8 m-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))', maxWidth: 1061 }}
    >
        {cardsInformation.map((item) => (
            <article
                key={item.title}
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
                    <Text className="font-semibold ml-2" size={10}>
                        {item.title}
                    </Text>
                </div>
                <Text variant="p">
                    Lorem ipsum dolor sit amet consectetur. Nec euismod nisi pharetra ipsum morbi. Mauris pulvinar mauris malesuada vitae tincidunt dis cras
                    faucibus pharetra. Ullamcorper dignissim nunc maecenas sagittis adipiscing amet mi justo. Maecenas accumsan aliquam nunc gravida lectus urna
                    pretium libero.
                </Text>
            </article>
        ))}
    </section>
)

export default FeaturesSection
