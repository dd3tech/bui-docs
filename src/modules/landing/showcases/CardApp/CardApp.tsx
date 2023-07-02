import { useTheme } from '@/pages/store/theme-store'
import { Card, Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import Link from 'next/link'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import { AppCardInfo } from '@/interfaces/showcases'
import styles from './CardApp.module.css'

interface CardAppsProps {
  data: AppCardInfo
}

const CardApp = ({ data }: CardAppsProps) => {
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  return (
    <Card
      key={data.title}
      className={composeClasses(
        'w-full h-full rounded-2xl shadow-lg flex flex-col lg:flex-col sm:flex-row gap-8 lg:gap-0',
        styles.cardApp,
        extendedPalette.cardBackground,
        extendedPalette.cardBorderColor
      )}
    >
      <div
        className={composeClasses(
          'w-full h-full mb-8 relative overflow-hidden flex-1',
          styles.imageContainer
        )}
        style={{
          backgroundImage: `url(${
            isLightTheme ? data.imgLight : data.imgDark
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: 176
        }}
      >
        <div
          className="absolute w-full h-full top-0"
          style={{
            background: extendedPalette.cardBorderFilter
          }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <Text size="xl" variant="p" className="lg:pt-9">
          {data.title}
        </Text>
        <Text
          size="base"
          variant="p"
          className={composeClasses('mt-4 mb-6', extendedPalette.secundaryText)}
        >
          {data.description}
        </Text>
        <div className="text-right">
          <Link
            className={composeClasses(
              'font-bold text-blue-400 ml-auto flex justify-end gap-2 pb-2',
              extendedPalette.linkPrimary
            )}
            href="/"
            target="_blank"
          >
            <Text className="underline">Go to Site</Text>
            <ArrowCircleRightIcon width={24} />
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default CardApp
