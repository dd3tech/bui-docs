import { Text } from 'dd360-ds'
import { ReactLogoName } from '@/components/icons/ReactLogoName'
import { TailwindLogoName } from '@/components/icons/TailwindLogoName'
import { useTheme } from '@/pages/store/theme-store'

const BuildWithSection = () => {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <section
      className="flex flex-col items-center justify-center w-full"
      style={{ marginTop: 122 }}
    >
      <Text size="lg" className="font-medium mb-7">
        Built with:
      </Text>
      <div className="flex gap-20 items-center">
        <TailwindLogoName color={extendedPalette.buildlogoColorHex} />
        <ReactLogoName color={extendedPalette.buildlogoColorHex} />
      </div>
    </section>
  )
}

export default BuildWithSection
