import { Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'
import { AccessibilityIcon } from '@/components/icons/AccessibilityIcon'
import { useTheme } from '@/pages/store/theme-store'

const cardsInformation = [
  {
    title: 'Accessibility',
    icon: <AccessibilityIcon />,
    description:
      'Our library is designed with accessibility in mind, which means that our components are easily usable by people with visual, hearing or motor disabilities. This is achieved by implementing accessibility best practices and complying with WCAG accessibility standards.'
  },
  {
    title: 'Ready for production',
    icon: 'CogIcon',
    description:
      'We have conducted extensive testing to ensure that our components are reliable, stable and scalable. In addition, our library has been used in a wide variety of projects and has proven to be an effective and efficient solution for web application development.'
  },
  {
    title: 'Developer experience',
    icon: 'CodeIcon',
    description:
      'The developer experience is a priority for us. We have designed our components to be intuitive and easy to use, which speeds up the development process. In addition, we provide detailed documentation and code samples to help developers integrate our components into their projects.'
  },
  {
    title: 'High quality components',
    icon: 'SparklesIcon',
    description:
      'Our component library is distinguished by the high quality of its components. All our components have been designed and developed following industry best practices and standards. We ensure that each component is well documented, easy to use and integrates seamlessly with other components. In addition, we perform rigorous testing to ensure the functionality, performance and stability of each component.'
  },
  {
    title: 'Customization',
    icon: 'AdjustmentsIcon',
    description:
      'Customization is one of the strengths of our component library. We offer a wide variety of customization options so you can tailor our components to your specific design and functionality needs. You can easily modify the look and functionality of each component using configuration options and custom properties.'
  },
  {
    title: 'Solid API and Documentation',
    icon: 'DatabaseIcon',
    description:
      'We have a solid API and comprehensive documentation. We have carefully designed each component and provided a clear and consistent API so you can easily use them in your projects. In addition, our detailed documentation and code samples allow you to quickly understand how to use each component and customize them according to your needs. '
  }
]

const FeaturesSection = () => {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <section className="w-full max-w-[1040px] pt-24 p-8 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
      {cardsInformation.map((item) => (
        <article
          key={item.title}
          className="w-full lg:w-[302px] 2xl:w-full rounded-2xl"
          style={{
            background:
              'linear-gradient(180deg, rgba(209,250,229,0.5) 0%, rgba(147,197,253,0.5) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 10px 15px -3px rgba(17, 24, 39, 0.03)',
            padding: 2,
            maxHeight: '250px'
          }}
        >
          <div
            className={composeClasses(
              'rounded-2xl w-full h-full p-4',
              extendedPalette.cardBackground
            )}
          >
            {typeof item.icon === 'string' ? (
              <DynamicHeroIcon
                className={composeClasses(extendedPalette.cardIconColor)}
                icon={item.icon as any}
                width={24}
              />
            ) : (
              item.icon
            )}
            <Text
              className={composeClasses(
                'block font-bold py-2',
                extendedPalette.cardPrimaryText
              )}
            >
              {item.title}
            </Text>
            <Text variant="p" size="xs">
              {item.description}
            </Text>
          </div>
        </article>
      ))}
    </section>
  )
}

export default FeaturesSection
