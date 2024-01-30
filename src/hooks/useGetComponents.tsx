import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import * as Components from 'dd360-ds'
import { Text } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import {
  WindowEditor,
  CustomTableDocs,
  Playground,
  BackAndForwardController,
  TagDocs
} from '@/components'
import {
  ConfirmDialogCustom,
  CustomCallout,
  FilterRangeCustom,
  FilterRangeSliderCustom,
  PortalCustom,
  ProgressCustom,
  FilterSelectCustom,
  FilterDateCustom,
  DropdownCustom,
  ModalCustom,
  FileViewerCustom,
  AsideModalCustom,
  PaginationCustom,
  TabsCustom,
  SwitchCustom,
  AlertReactKnowledge,
  HeaderDocCustom,
  TagCustom,
  PhaseCustom
} from '@/modules/docs'
import { TransitionCustom } from '@/components/Layout'
import { useTheme } from '@/store/theme-store'

const SideBar = dynamic(() => import('dd360-ds/SideBar'), {
  ssr: false
})

type Props = { children: ReactNode; className?: string }

export function useGetComponents() {
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  return {
    h1: ({ children }: Props) => (
      <Text
        variant="h1"
        className={composeClasses('mb-4 mt-2', extendedPalette.primaryText)}
        bold
      >
        {children}
      </Text>
    ),
    h2: ({ children }: Props) => (
      <Text
        variant="h2"
        className={composeClasses('-mb-2 mt-2', extendedPalette.primaryText)}
        bold
      >
        {children}
      </Text>
    ),
    h3: ({ children }: Props) => (
      <Text
        variant="h3"
        className={composeClasses('mb-4 mt-2', extendedPalette.primaryText)}
        bold
      >
        {children}
      </Text>
    ),
    h4: ({ children }: Props) => (
      <Text
        variant="h4"
        className={composeClasses('mb-4 mt-2', extendedPalette.primaryText)}
        bold
      >
        {children}
      </Text>
    ),
    h5: ({ children }: Props) => (
      <Text
        variant="h5"
        className={composeClasses('-mt-2', extendedPalette.primaryText)}
        bold
      >
        {children}
      </Text>
    ),
    h6: ({ children }: Props) => (
      <Text variant="h6" className={extendedPalette.secundaryText} bold>
        {children}
      </Text>
    ),
    p: ({ children }: Props) => (
      <Text
        variant="p"
        size="base"
        className={composeClasses(
          'mb-4 mt-2 font-normal',
          extendedPalette.secundaryText
        )}
      >
        {children}
      </Text>
    ),
    span: ({ children }: Props) => <span className="test">{children}</span>,
    Label: ({ children }: Props) => (
      <Text
        variant="h5"
        className={composeClasses(
          'mb-4 mt-2 font-medium',
          extendedPalette.titleColor
        )}
      >
        {children}
      </Text>
    ),
    ul: ({ children }: Props) => (
      <ul className={extendedPalette.secundaryText}>{children}</ul>
    ),
    CustomTheme: ({ children }: Props) => (
      <div className={isLightTheme ? 'light' : 'dark'}>{children}</div>
    ),
    extendedPalette,
    TagDocs,
    WindowEditor,
    CustomTableDocs,
    DynamicHeroIcon,
    Playground,
    PaginationCustom,
    TabsCustom,
    SwitchCustom,
    ModalCustom,
    FileViewerCustom,
    AsideModalCustom,
    CustomCallout,
    FilterRangeCustom,
    FilterRangeSliderCustom,
    PortalCustom,
    TransitionCustom,
    ProgressCustom,
    ConfirmDialogCustom,
    FilterSelectCustom,
    FilterDateCustom,
    DropdownCustom,
    BackAndForwardController,
    AlertReactKnowledge,
    HeaderDocCustom,
    TagCustom,
    PhaseCustom,
    ...Components,
    SideBar
    // Add other custom components here as needed ---| Here |---
  }
}
