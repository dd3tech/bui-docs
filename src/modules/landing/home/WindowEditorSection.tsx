import Image from 'next/image'
import { Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/pages/store/theme-store'

const WindowEditorSection = () => {
  const {
    isLightTheme,
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <section className="components-window-editor max-w-8xl m-auto px-10 relative flex flex-col lg:flex-row items-center justify-center pb-[62px]">
      <div className="w-full max-w-md mx-4 lg:mb-32 lg:mt-32 m-auto lg:mr-auto text-center lg:text-left">
        <Text
          className={composeClasses(
            'block text-2xl sm:text-3xl',
            extendedPalette.titleColor
          )}
        >
          Star now
        </Text>
        <Text className="font-semibold text-2xl sm:text-4xl">
          Some examples of our components
        </Text>
        <Text size="lg" variant="p" className="mt-9">
          Get more than 20 components with beautiful defaults and simple props.
          From charts to input and layout elements, we covered all the essential
          components to lift the tedious front-end work from your shoulders. Get
          ahead with our simple API approach in no time.
        </Text>
      </div>

      <div className="relative w-full" style={{ maxWidth: 544 }}>
        <Image
          src={`/windows-code-${isLightTheme ? 'light' : 'dark'}.png`}
          alt="demo-sales"
          className="mt-10 -mb-10 img-bottom"
          width={638}
          height={405}
        />
      </div>
    </section>
  )
}

export default WindowEditorSection
