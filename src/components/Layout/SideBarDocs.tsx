import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Text from 'dd360-ds/Text'
import { composeClasses } from 'dd360-ds/lib'
import { IconName } from 'dd360-ds/DynamicHeroIcon'

import { useTheme } from '@/store/theme-store'
import Badge, { BadgeVariant } from '../Badge'
import ShowMore from '../ShowMore'

interface ComponentObjectProps {
  [key: string]: {
    icon?: IconName
    items: {
      label: string
      pathname: string
      badge?: {
        label: string
        variant: BadgeVariant
      }
    }[]
  }
}

interface SideBarDocsProps {
  className?: string
  setIsActiveButtonMobile?: Dispatch<SetStateAction<boolean>>
}

interface BadgeTypes {
  [key: string]: {
    label: string
    variant: BadgeVariant
  }
}

const BADGE_TYPES: BadgeTypes = {
  new: {
    label: 'NEW',
    variant: 'success'
  },
  updated: {
    label: 'UPDATED',
    variant: 'info'
  },
  coming: {
    label: 'COMING',
    variant: 'warning'
  },
  deprecated: {
    label: 'DEPRECATED',
    variant: 'deprecated'
  }
}

export const components: ComponentObjectProps = {
  'get-started': {
    items: [
      {
        label: 'Installation',
        pathname: 'getting-started#getting-started'
      },
      {
        label: 'Theming',
        pathname: 'getting-started#customize-theme-optional-'
      }
    ]
  },
  buttons: {
    items: [
      {
        label: 'ActiveButton',
        pathname: 'active-button'
      },
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
      },
      {
        label: 'Filter Bar Button',
        pathname: 'filter-bar-button',
        badge: BADGE_TYPES.new
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
        label: 'Container',
        pathname: 'container'
      },
      {
        label: 'Divider',
        pathname: 'divider'
      },
      {
        label: 'Download Card',
        pathname: 'card-download'
      },
      {
        label: 'Flex',
        pathname: 'flex'
      },
      {
        label: 'Navbar',
        pathname: 'navbar'
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
        label: 'PageTemplate',
        pathname: 'page-template'
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
        label: 'TopPage',
        pathname: 'top-page'
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
        pathname: 'input-currency',
        badge: BADGE_TYPES.deprecated
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
        label: 'Single Select',
        pathname: 'single-select',
        badge: BADGE_TYPES.new
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
        pathname: 'cell'
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
        pathname: 'aside-modal'
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
        label: 'Badge',
        pathname: 'badge'
      },
      {
        label: 'BarList',
        pathname: 'bar-list'
      },
      {
        label: 'Callout',
        pathname: 'callout'
      },
      {
        label: 'Circle',
        pathname: 'circle'
      },
      {
        label: 'Chip',
        pathname: 'chip'
      },
      {
        label: 'Confirm Dialog',
        pathname: 'confirm-dialog'
      },
      {
        label: 'Date Picker',
        pathname: 'date-picker'
      },
      {
        label: 'Date Time Picker',
        pathname: 'date-time-picker'
      },
      {
        label: 'Dynamic Hero Icon',
        pathname: 'dynamic-hero-icon'
      },
      {
        label: 'Dropdown',
        pathname: 'dropdown'
      },
      {
        label: 'FeedBackBox',
        pathname: 'feed-back-box'
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
        label: 'Filter Date',
        pathname: 'filter-date'
      },
      {
        label: 'Filter Select',
        pathname: 'filter-select'
      },
      {
        label: 'Filter Select Multi',
        pathname: 'filter-select-multi'
      },
      {
        label: 'Language',
        pathname: 'language',
        badge: BADGE_TYPES.coming
      },
      {
        label: 'List',
        pathname: 'list'
      },
      {
        label: 'Portal',
        pathname: 'portal'
      },
      {
        label: 'Progress',
        pathname: 'progress'
      },
      {
        label: 'Select Multi',
        pathname: 'select-multi',
        badge: BADGE_TYPES.coming
      },
      {
        label: 'Skeleton',
        pathname: 'skeleton'
      },
      {
        label: 'Table',
        pathname: 'table'
      },
      {
        label: 'Tag',
        pathname: 'tag'
      },
      {
        label: 'Timeline',
        pathname: 'timeline'
      },
      {
        label: 'Tooltip',
        pathname: 'tooltip'
      },
      {
        label: 'Transition',
        pathname: 'transition'
      }
    ]
  }
}

export default function SideBarDocs({
  className,
  setIsActiveButtonMobile
}: SideBarDocsProps) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  const isLight = useTheme().isLightTheme

  return (
    <aside
      className={composeClasses(
        'absolute md:sticky z-30 px-4 md:p-2 backdrop-blur-sm md:backdrop-blur-none h-screen md:h-auto w-full border-r inset-0 max-h-screen overflow-hidden flex flex-col transform md:transition-transform duration-150 ease-in lg:translate-x-0',
        extendedPalette.sidebarBorder,
        className
      )}
      style={{
        minWidth: 240,
        height: 'calc(100vh - 57px)',
        backgroundColor: extendedPalette.barBackgroundHex
      }}
    >
      <div
        className="hide-scroll flex flex-col gap-1 mt-1 overflow-y-auto overflow-x-hidden flex-grow"
        style={{ height: 'calc(100vh - 57px)' }}
      >
        {Object.entries(components).map(([key, value]) => {
          return (
            <ShowMore
              basePath={key}
              icon={value?.icon}
              title={t(key)}
              key={key}
            >
              {value.items.map((item) => {
                const isTabDisabled = item.badge === BADGE_TYPES.coming
                const childrenTab = (
                  <>
                    <Text
                      size="sm"
                      className={composeClasses(
                        'cursor-pointer',
                        isLight ? 'hover:font-bold' : 'hover:text-white',
                        isTabDisabled && 'cursor-not-allowed'
                      )}
                      onClick={() => setIsActiveButtonMobile?.(false)}
                    >
                      {item.label}
                    </Text>
                    {item.badge && (
                      <Badge
                        variant={item.badge.variant}
                        label={item.badge.label}
                      />
                    )}
                  </>
                )

                const keyPath = `/docs/${key}/${item.pathname}`
                const classNameWrapper = composeClasses(
                  isTabDisabled && 'opacity-50 cursor-not-allowed disabled',
                  'cursor-pointer py-1 pl-4 ml-1 pr-1 flex justify-between items-center rounded-lg transition-all ease-in duration-300',
                  router?.asPath === keyPath
                    ? `${extendedPalette.titleColor} font-semibold`
                    : extendedPalette.sidebarOptionColor
                )

                return isTabDisabled ? (
                  <div key={item.label} className={classNameWrapper}>
                    {childrenTab}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={keyPath}
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
