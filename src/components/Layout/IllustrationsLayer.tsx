import { useTheme } from '@/pages/store/theme-store'

const IllustrationsLayer = () => {
  const { isLightTheme } = useTheme()

  return (
    <>
      <svg
        className="absolute hidden md:block top-[1668px] lg:top-[1580px] right-[50%]"
        width="816"
        height="603"
        viewBox="0 0 1390 1177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: -10, transform: 'translateX(50%)' }}
      >
        <g opacity="0.2" filter="url(#filter0_f_710_26120)">
          <ellipse
            cx="695"
            cy="588.5"
            rx="408"
            ry="301.5"
            fill={isLightTheme ? '#93C5FD' : '#1D4ED8'}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_710_26120"
            x="0"
            y="0"
            width="1390"
            height="1177"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="143.5"
              result="effect1_foregroundBlur_710_26120"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}
export default IllustrationsLayer
