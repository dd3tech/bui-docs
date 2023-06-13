import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import * as Components from 'dd360-ds'
import { Text } from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import {
  WindowEditor,
  CustomTableDocs,
  ContainerComponentDoc
} from '@/components'

import { PaginationCustom, TabsCustom } from '@/components/docs/navigation'
import {
  ModalCustom,
  FileViewerCustom,
  AsideModalCustom
} from '@/components/docs/modals'

import SwitchCustom from '@/components/docs/controls/SwitchCustom'
import {
  ConfirmDialogCustom,
  CustomCallout,
  FilterRangeCustom,
  FilterRangeSliderCustom,
  PortalCustom,
  ProgressCustom
} from '@/components/docs/components'

import { TransitionCustom } from '@/components/Layout'

const SideBar = dynamic(() => import('dd360-ds/SideBar'), {
  ssr: false
})

type Props = { children: ReactNode }

export function getComponents() {
  return {
    h1: ({ children }: Props) => (
      <Text variant="h1" className="mb-4 mt-2" bold>
        {children}
      </Text>
    ),
    h2: ({ children }: Props) => (
      <Text variant="h2" className="mb-4 mt-2" bold>
        {children}
      </Text>
    ),
    h3: ({ children }: Props) => (
      <Text variant="h3" className="mb-4 mt-2" bold>
        {children}
      </Text>
    ),
    h4: ({ children }: Props) => (
      <Text variant="h4" className="mb-4 mt-2" bold>
        {children}
      </Text>
    ),
    h5: ({ children }: Props) => (
      <Text variant="h5" className="mb-4 mt-2" bold>
        {children}
      </Text>
    ),
    p: ({ children }: Props) => (
      <Text
        variant="p"
        size="base"
        className="mb-4 mt-2 text-gray-500 font-normal"
      >
        {children}
      </Text>
    ),
    WindowEditor,
    CustomTableDocs,
    DynamicHeroIcon,
    ContainerComponentDoc,
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
    ...Components,
    SideBar
    // Add other custom components here as needed ---| Here |---
  }
}
