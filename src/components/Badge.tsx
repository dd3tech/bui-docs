interface BadgeProps {
  color: string
  label: string
}

const Badge = ({ color = 'blue', label }: BadgeProps) => {
  return (
    <small
      className={`flex justify-center items-center text-${color}-800 bg-${color}-100 rounded-2xl font-semibold px-1 max-h-4`}
      style={{ fontSize: 8 }}
    >
      {label}
    </small>
  )
}

export default Badge
