import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Divider, Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'

import Badge from '../Badge'
import ShowMore from '../ShowMore'

interface ComponentObjectProps {
  [key: string]: {
    icon?: IconName
    items: {
      label: string
      pathname: string
      badge?: {
        label: string
        color: string
      }
    }[]
  }
}
interface SideBarProps {
  setIsActiveButtonMobile?: (e: boolean) => void
}

const BADGE_TYPES = {
  new: {
    label: 'NEW',
    color: 'green'
  },
  updated: {
    label: 'UPDATED',
    color: 'blue'
  },
  cooming: {
    label: 'COOMING',
    color: 'yellow'
  },
  deprecated: {
    label: 'DEPRECATED',
    color: 'red'
  }
}

const components: ComponentObjectProps = {
  buttons: {
    items: [
      {
        label: 'Button',
        pathname: 'button'
      },
      {
        label: 'Button Group',
        pathname: 'button-group'
      },
      {
        label: 'Shape Button',
        pathname: 'button-shape'
      },
      {
        label: 'Radio',
        pathname: 'button-radio'
      },
      {
        label: 'Radio Group',
        pathname: 'button-radio-group'
      }
    ]
  },
  layout: {
    items: [
      {
        label: 'Card',
        pathname: 'card'
      },
      {
        label: 'Download Card',
        pathname: 'card-download'
      },
      {
        label: 'Container',
        pathname: 'container'
      },
      {
        label: 'Divider',
        pathname: 'divider'
      },
      {
        label: 'Flex',
        pathname: 'flex'
      },
      {
        label: 'Navbar',
        pathname: 'navbar',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Order',
        pathname: 'order'
      },
      {
        label: 'Overflow',
        pathname: 'overflow'
      },
      {
        label: 'Row',
        pathname: 'row'
      },
      {
        label: 'SideBar',
        pathname: 'sidebar'
      },
      {
        label: 'Wrapper',
        pathname: 'wrapper'
      }
    ]
  },
  form: {
    items: [
      {
        label: 'Auto Complete',
        pathname: 'autocomplete'
      },
      {
        label: 'Checkbox',
        pathname: 'checkbox'
      },
      {
        label: 'FormControl',
        pathname: 'form-control'
      },
      {
        label: 'Input',
        pathname: 'input'
      },
      {
        label: 'InputCurrency',
        pathname: 'input-currency'
      },
      {
        label: 'InputFile',
        pathname: 'input-file'
      },
      {
        label: 'Range Slider',
        pathname: 'range-slider',
        badge: BADGE_TYPES.updated
      },
      {
        label: 'Select',
        pathname: 'select'
      },
      {
        label: 'Text Area',
        pathname: 'textarea'
      }
    ]
  },
  navigation: {
    items: [
      {
        label: 'Anchor',
        pathname: 'anchor'
      },
      {
        label: 'Breadcrumbs',
        pathname: 'breadcrumbs'
      },
      {
        label: 'Cell',
        pathname: 'cell',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Pagination',
        pathname: 'pagination'
      },
      {
        label: 'Tabs',
        pathname: 'tabs'
      }
    ]
  },
  modals: {
    items: [
      {
        label: 'FileViewer',
        pathname: 'file-viewer'
      },
      {
        label: 'Modal',
        pathname: 'modal'
      },
      {
        label: 'AsideModal',
        pathname: 'aside-modal',
        badge: BADGE_TYPES.new
      }
    ]
  },
  typography: {
    items: [
      {
        label: 'Kbd',
        pathname: 'kbd'
      },
      {
        label: 'Text',
        pathname: 'text'
      }
    ]
  },
  controls: {
    items: [
      {
        label: 'Progressbar',
        pathname: 'progressbar'
      },
      {
        label: 'ProgressCircle',
        pathname: 'progress-circle'
      },
      {
        label: 'Spinner',
        pathname: 'spinner'
      },
      {
        label: 'Stepper',
        pathname: 'stepper'
      },
      {
        label: 'Switch',
        pathname: 'switch'
      }
    ]
  },
  images: {
    items: [
      {
        label: 'Avatar',
        pathname: 'avatar'
      },
      {
        label: 'Image',
        pathname: 'image'
      },
      {
        label: 'ImageIcon',
        pathname: 'image-icon'
      }
    ]
  },
  components: {
    items: [
      {
        label: 'Callout',
        pathname: 'callout',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Date Picker',
        pathname: 'date-picker'
      },
      {
        label: 'Dynamic Hero Icon',
        pathname: 'dynamic-hero-icon'
      },
      {
        label: 'Transition',
        pathname: 'transition',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Filter Range',
        pathname: 'filter-range'
      },
      {
        label: 'Filter Range Slider',
        pathname: 'filter-range-slider'
      },
      {
        label: 'List',
        pathname: 'list',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Skeleton',
        pathname: 'skeleton'
      },
      {
        label: 'Table',
        pathname: 'table',
        badge: BADGE_TYPES.new
      },
      {
        label: 'Portal',
        pathname: 'portal'
      },
      {
        label: 'Progress',
        pathname: 'progress',
        badge: BADGE_TYPES.new
      },
      {
        label: 'FeedBackBox',
        pathname: 'feed-back-box',
        badge: BADGE_TYPES.cooming
      },
      {
        label: 'Filter Date',
        pathname: 'filter-date',
        badge: BADGE_TYPES.cooming
      },
      {
        label: 'Filter Select',
        pathname: 'filter-select',
        badge: BADGE_TYPES.cooming
      },
      {
        label: 'Select Multi',
        pathname: 'select-multi',
        badge: BADGE_TYPES.cooming
      },
      {
        label: 'Language',
        pathname: 'language',
        badge: BADGE_TYPES.cooming
      }
    ]
  }
}

export default function SideBar({ setIsActiveButtonMobile }: SideBarProps) {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <aside
      className="h-screen md:h-auto w-full border-r border-gray-300 sticky inset-0 max-h-screen overflow-hidden flex flex-col bg-blue-50 transform p-2 md:transition-transform duration-150 ease-in lg:translate-x-0"
      style={{ minWidth: 200 }}
    >
      <Link href="/" className="block my-7 mx-auto">
        <Image
          className="m-auto"
          src="/dd360-black.png"
          width={130}
          height={28.5}
          alt="logo"
        />
      </Link>
      <div className="hide-scroll flex flex-col gap-6 mt-6 overflow-y-auto overflow-x-hidden flex-grow">
        <Link
          href="/docs/get-started/getting-started"
          locale={router?.locale}
          className={composeClasses(
            'getting-started' === router?.query?.slug
              ? 'bg-blue-100 border-blue-500'
              : 'border-gray-300',
            'py-2 pl-4 ml-1 mt-4 pr-1 border flex gap-3 items-center rounded-lg transition-all ease-in duration-300'
          )}
        >
          <DynamicHeroIcon
            icon="BookOpenIcon"
            className="w-4 h-4 text-blue-700"
          />
          <Text className="text-gray-600">Getting Started</Text>
        </Link>
        <Divider light />
        {Object.entries(components).map(([key, value], index) => {
          return (
            <ShowMore
              basePath={key}
              icon={value?.icon}
              title={t(key)}
              key={key}
            >
              {value.items.map((item) => {
                const isTabDisabled = item.badge === BADGE_TYPES.cooming
                const childrenTab = (
                  <>
                    <Text
                      className={composeClasses(
                        'text-gray-600 cursor-pointer',
                        isTabDisabled && 'cursor-not-allowed'
                      )}
                      onClick={() => setIsActiveButtonMobile?.(false)}
                    >
                      {item.label}
                    </Text>
                    {item.badge && (
                      <Badge
                        color={item.badge.color}
                        label={item.badge.label}
                      />
                    )}
                  </>
                )

                const classNameWrapper = composeClasses(
                  item.pathname === router?.query?.slug && 'bg-blue-100',
                  isTabDisabled && 'opacity-50 cursor-not-allowed disabled',
                  'cursor-pointer py-2 pl-4 ml-1 pr-1 flex justify-between items-center rounded-lg transition-all ease-in duration-300'
                )

                return isTabDisabled ? (
                  <div key={item.label} className={classNameWrapper}>
                    {childrenTab}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={`/docs/${key}/${item.pathname}`}
                    locale={router?.locale}
                    className={classNameWrapper}
                  >
                    {childrenTab}
                  </Link>
                )
              })}
            </ShowMore>
          )
        })}
      </div>
    </aside>
  )
}
