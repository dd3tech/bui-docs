import { useTheme } from '@/pages/store/theme-store'
import { composeClasses } from 'dd360-ds/lib'

interface TagProps {
  text: string
}

export default function Tag({ text }: TagProps) {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <span
      className={composeClasses(
        'px-1 py-0.5 rounded-md border',
        extendedPalette.tagBackground,
        extendedPalette.tagColor,
        extendedPalette.tagBorder
      )}
    >
      {text}
    </span>
  )
}
