import { Button, Input } from 'dd360-ds'
import { useTranslation } from 'next-i18next'

function Newsletter() {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Input
        placeholder="hello@dd360.mx"
        className="sm:mt-0 inline-block border-gray-500 w-full sm:max-w-[287px] "
      />
      <Button className="leading-none" rounded="lg" paddingX="8" paddingY="4">
        {t('subscribe')}
      </Button>
    </div>
  )
}

export default Newsletter
