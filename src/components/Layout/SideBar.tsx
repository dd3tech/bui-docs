import { Text } from 'dd360-ds'
import { IconName } from 'dd360-ds/DynamicHeroIcon'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ShowMore from '../ShowMore'

interface ComponentObjectProps {
    [key: string]: {
        icon?: IconName
        items: {
            label: string
            pathname: string
        }[]
    }
}

const components: ComponentObjectProps = {
    buttons: {
        items: [
            {
                label: 'button',
                pathname: 'button'
            },
            {
                label: 'Button Group',
                pathname: 'button-group'
            },
            {
                label: 'Circle Button',
                pathname: 'button-circle'
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

export default function SideBar() {
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <aside className="col-span-3">
            <div className="fixed" style={{ height: 'calc(100vh - 136px)', top: 112 }}>
                <div className="h-full overflow-y-auto pb-2 sidebar-list">
                    <Text variant="h4" className="mb-3">
                        {t('documentation')}
                    </Text>
                    <div className="flex flex-col gap-6">
                        {Object.entries(components).map(([key, value]) => (
                            <ShowMore icon={value?.icon} title={t(key)} key={key}>
                                {value.items.map((item) => (
                                    <Link key={item.label} href={`/docs/${key}/${item.pathname}`} locale={router?.locale}>
                                        <li>{item.label}</li>
                                    </Link>
                                ))}
                            </ShowMore>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}
