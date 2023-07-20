import { Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'
import { WindowEditor } from '@/components'

const WindowEditorSection = () => {
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  return (
    <section className="components-window-editor max-w-8xl m-auto px-4 lg:px-10 relative flex flex-col lg:flex-row items-center justify-center pb-[62px]">
      <div className="w-full max-w-md mx-4 lg:mb-32 lg:mt-32 m-auto lg:mr-auto text-center lg:text-left">
        <Text
          className={composeClasses(
            'block text-2xl sm:text-3xl',
            extendedPalette.titleColor
          )}
        >
          Start now
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

      <div
        className="relative w-full max-w-[630px] mt-12 lg:mt-0"
        style={{ maxWidth: 638 }}
      >
        <WindowEditor
          className="ml-0 lg:ml-8 border"
          backgroundColor={isLightTheme ? '#FFFFFF' : '#050B1A'}
          height="405px"
          style={{ overflow: 'hidden' }}
          styleContainer={{
            borderColor: '#93C5FD',
            marginBottom: 0,
            borderRadius: 16
          }}
        />
        <div
          className="absolute w-full h-full z-[1] top-0 overflow-hidden"
          style={{
            background: isLightTheme
              ? 'linear-gradient(0deg, rgb(244 245 246) 0%, rgba(217, 217, 217, 0) 70.98%)'
              : 'linear-gradient(0deg, rgb(17 24 38) 0%, rgba(217, 217, 217, 0) 91.98%)'
          }}
        />
      </div>
    </section>
  )
}

export default WindowEditorSection
