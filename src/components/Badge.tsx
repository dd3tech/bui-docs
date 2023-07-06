import { useTheme } from '@/pages/store/theme-store'
import { Rounded } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { HTMLAttributes } from 'react'

export type BadgeVariant =
  | 'success'
  | 'info'
  | 'warning'
  | 'default'
  | 'deprecated'
interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  variant?: BadgeVariant
  rounded?: Rounded
}

const getColorVariant = (variant: string, palette: any) => {
  const varianCapitalized = variant.charAt(0).toUpperCase() + variant.slice(1)

  return composeClasses(
    palette[`badge${varianCapitalized}Background`],
    palette[`badge${varianCapitalized}Color`],
    variant === 'default' &&
      `border ${palette[`badge${varianCapitalized}Border`]}`
  )
}

const Badge = ({
  variant = 'default',
  label,
  rounded = '2xl',
  className,
  style,
  ...props
}: BadgeProps) => {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <small
      className={composeClasses(
        'flex justify-center items-center font-semibold px-1 max-h-4',
        `rounded-${rounded}`,
        getColorVariant(variant, extendedPalette),
        className
      )}
      style={{ fontSize: 8, ...style }}
      {...props}
    >
      {label}
    </small>
  )
}

export default Badge
