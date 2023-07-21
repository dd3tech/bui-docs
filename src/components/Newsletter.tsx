import { useTranslation } from 'next-i18next'
import { Button, Flex, Input } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'

function Newsletter() {
  const { t } = useTranslation('common')
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <Flex gap="3" className="flex-col sm:flex-row mt-8">
      <Input
        placeholder="hello@dd360.mx"
        className={composeClasses(
          'sm:mt-0 inline-block border-gray-500 w-full sm:max-w-[287px]',
          extendedPalette.primaryText
        )}
        style={{
          background: extendedPalette.inputBackground,
          borderColor: extendedPalette.inputBorderHex
        }}
      />
      <Button
        className="leading-none text-gray-50 min-w-max"
        rounded="lg"
        paddingX="8"
        paddingY="4"
        style={{ maxWidth: 124 }}
      >
        {t('subscribe')}
      </Button>
    </Flex>
  )
}

export default Newsletter
