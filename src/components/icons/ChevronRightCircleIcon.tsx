export function ChevronRightCircleIcon({
  color = 'currentColor',
  size = 16,
  className = '',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.16667 5L10.1667 7M10.1667 7L8.16667 9M10.1667 7L4.83333 7M13.5 7C13.5 10.3137 10.8137 13 7.5 13C4.18629 13 1.5 10.3137 1.5 7C1.5 3.68629 4.18629 1 7.5 1C10.8137 1 13.5 3.68629 13.5 7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
