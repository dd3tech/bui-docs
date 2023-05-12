import { Anchor, Card, Circle, Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { StyleObject } from 'dd360-ds/lib'
import Image from 'next/image'

const CardExample = ({
  style,
  className
}: {
  style: StyleObject
  className: string
}) => (
  <Card
    padding={0}
    rounded="md"
    width={253}
    style={style}
    className={className}
  >
    <div className="flex justify-between items-center py-4 px-4 border-b border-gray-300">
      <Text className="font-semibold" size="lg">
        Notifications
      </Text>
      <DynamicHeroIcon icon="XIcon" className="text-blue-600" width={20} />
    </div>
    <div className="flex pt-4 pr-6 pb-3 border-b border-gray-300">
      <div className="min-w-max p-3">
        <Image src="/alert-bell.png" alt="alert-bell" width={22} height={22} />
      </div>
      <span>
        <Text
          variant="p"
          style={{ fontSize: 8, lineHeight: '10px', letterSpacing: '0.02em' }}
        >
          Documentation of the guarantee
          <Text className="text-blue-500">{` {{guarantee_type}} `}</Text>
          was completed for the loan
          <Text className="text-blue-500">{` {{loan_type}} `}</Text>
          of the project
          <Text className="text-blue-500">{` {{proyect_type}}{{project_name}} `}</Text>
        </Text>
        <Anchor className="flex items-center text-blue-700">
          <Text
            size="sm"
            className="pr-1 font-semibold underline"
            style={{ fontSize: 8 }}
          >
            See more
          </Text>
          <DynamicHeroIcon icon="ChevronRightIcon" width={10} />
        </Anchor>
        <div className="flex justify-end text-gray-400 gap-1">
          <DynamicHeroIcon icon="ClockIcon" width={10} />

          <Text style={{ fontSize: 8 }}>Two days ago</Text>
        </div>
      </span>
      <div className="pl-4 mt-5">
        <Circle
          className="border border-gray-400"
          style={{ width: 6.5, height: 6.5 }}
        />
      </div>
    </div>

    <div className="flex pt-4 pr-6 pb-3">
      <div className="min-w-max p-3">
        <Image src="/alert-bell.png" alt="alert-bell" width={22} height={22} />
      </div>
      <span>
        <Text
          variant="p"
          style={{ fontSize: 8, lineHeight: '10px', letterSpacing: '0.02em' }}
        >
          Documentation of the guarantee
          <Text className="text-blue-500">{` {{guarantee_type}} `}</Text>
          was completed for the loan
          <Text className="text-blue-500">{` {{loan_type}} `}</Text>
          of the project
          <Text className="text-blue-500">{` {{proyect_type}}{{project_name}} `}</Text>
        </Text>
        <Anchor className="flex items-center text-blue-700">
          <Text
            size="sm"
            className="pr-1 font-semibold underline"
            style={{ fontSize: 8 }}
          >
            See more
          </Text>
          <DynamicHeroIcon icon="ChevronRightIcon" width={10} />
        </Anchor>
        <div className="flex justify-end text-gray-400 gap-1">
          <DynamicHeroIcon icon="ClockIcon" width={10} />

          <Text style={{ fontSize: 8 }}>Two days ago</Text>
        </div>
      </span>
      <div className="pl-4 mt-5">
        <Circle
          className="border border-gray-400"
          style={{ width: 6.5, height: 6.5 }}
        />
      </div>
    </div>
  </Card>
)

export default CardExample
