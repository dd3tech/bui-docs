import Image from 'next/image'
import { Select, Text } from 'dd360-ds'
import { IconName } from 'dd360-ds/DynamicHeroIcon'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

const components: ComponentObjectProps = {
    buttons: {
        items: [
            {
                label: 'button',
                pathname: 'button',
                badge: {
                    label: 'NEW',
                    color: 'green'
                }
            },
            {
                label: 'Button Group',
                pathname: 'button-group',
                badge: {
                    label: 'BETA',
                    color: 'blue'
                }
            },
            {
                label: 'Circle Button',
                pathname: 'button-circle',
                badge: {
                    label: 'CAUTION',
                    color: 'yellow'
                }
            },
            {
                label: 'Radio',
                pathname: 'button-radio',
                badge: {
                    label: 'DEPRECATED',
                    color: 'red'
                }
            },
            {
                label: 'Radio Group',
                pathname: 'button-radio-group'
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
    layout: {
        items: [
            {
                label: 'Card',
                pathname: 'card'
            },
            {
                label: 'Collapse',
                pathname: 'collapse'
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
                label: 'Multi Range Slider',
                pathname: 'multi-range-slider'
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
                label: 'Date Picker',
                pathname: 'date-picker'
            },
            {
                label: 'Dynamic Hero Icon',
                pathname: 'dynamic-hero-icon'
            },
            {
                label: 'FeedBackBox',
                pathname: 'feed-back-box'
            },
            {
                label: 'Filter Date',
                pathname: 'filter-date'
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
                label: 'Filter Select',
                pathname: 'filter-select'
            },
            {
                label: 'Select Multi',
                pathname: 'select-multi'
            },
            {
                label: 'Language',
                pathname: 'language'
            },
            {
                label: 'Portal',
                pathname: 'portal'
            },
            {
                label: 'Skeleton',
                pathname: 'skeleton'
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
            }
        ]
    },
    typography: {
        items: [
            {
                label: 'Kbd',
                pathname: 'kdb'
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
    }
}

const builds = {
    '1.2.9': { label: 'build 129' },
    '1.3.9': { label: 'build 139' },
    '1.4.9': { label: 'build 149' }
}

export default function SideBar() {
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <aside
            className="bg-blue-50 -translate-x-full transform p-2 transition-transform duration-150 ease-in lg:translate-x-0 border-r border-gray-300"
            style={{ minWidth: 200 }}
        >
            <Link href="/" className="block my-7 mx-auto">
                <Image className="m-auto" src="/dd360-black.png" width={130} height={28.5} alt="logo" />
            </Link>
            <div className="my-4">
                <div className="m-auto w-full" style={{ height: 34 }}>
                    <Select optionsList={builds} rounded="xl" padding="2" fontSize="sm" className="bg-white" style={{ borderColor: '#D1D5DB' }} />
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    {Object.entries(components).map(([key, value]) => (
                        <ShowMore basePath={key} icon={value?.icon} title={t(key)} key={key}>
                            {value.items.map((item) => (
                                <Link
                                    key={item.label}
                                    href={`/docs/${key}/${item.pathname}`}
                                    locale={router?.locale}
                                    className="flex justify-between items-center py-2"
                                >
                                    <Text className="text-gray-600">{item.label}</Text>
                                    {item.badge && <Badge color={item.badge.color} label={item.badge.label} />}
                                </Link>
                            ))}
                        </ShowMore>
                    ))}
                </div>
            </div>
        </aside>
    )
}
