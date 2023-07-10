import { Dispatch, SetStateAction } from 'react'

import { Divider } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

import { useTheme } from '@/pages/store/theme-store'
import ButtonsGetStartted from '@/modules/landing/home/ButtonsGetStartted'
import MainLinks from './Navbar/MainLinks'

interface SideBarProps {
  className?: string
  setIsActiveButtonMobile?: Dispatch<SetStateAction<boolean>>
}

export default function SideBar({ className }: SideBarProps) {
  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <aside
      className={composeClasses(
        'absolute first-line:backdrop-blur-sm md:hidden md:backdrop-blur-none h-screen md:h-auto w-full border-r inset-0 max-h-screen overflow-hidden flex flex-col transform md:transition-transform duration-150 ease-in lg:translate-x-0',
        extendedPalette.sidebarBorder,
        className
      )}
      style={{
        minWidth: 240,
        height: 'calc(100vh - 57px)',
        backgroundColor: extendedPalette.componentBgOpacityHex
      }}
    >
      <div
        className={composeClasses(
          'w-full pb-8 px-4',
          `${extendedPalette.barMobileBackground} sm:${extendedPalette.barBackground}`
        )}
      >
        <ul className="flex items-center gap-6 flex-col my-10">
          <MainLinks className="text-lg" />
        </ul>

        <Divider />

        <ButtonsGetStartted />
      </div>
    </aside>
  )
}
