import { ThemeProps, createTheme } from 'dd360-ds/theme'

const typography: ThemeProps['typography'] = {}

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      contrastText: '#fff'
    },
    info: {
      main: '#F9FAFB'
    },
    background:
      'radial-gradient(236.82% 111.34% at -16.84% -57.78%, #374151 0%, #111827 100%)',
    textColor: '#fff'
  },
  typography,
  extendedPalette: {
    barBackground: 'bg-gray-800', //#1F2937
    barMobileBackground: 'bg-gray-900', //#111827
    barBackgroundHex: '#1F2937', //bg-gray-800

    navbarLink: 'text-white', //#FFFFFF
    navbarIconHex: '#93C5FD', //blue-300

    logoColorHex: '#FFFFFF', //white
    footerBackground: 'bg-gray-900', //#111827

    cardBackground: 'bg-gray-900', //#111827
    cardBorderColor: 'border-gray-700', //#374151
    cardFilter:
      'linear-gradient(0deg, #111827 0%, rgba(217, 217, 217, 0.00) 91.98%)',
    cardFilterSecondary:
      'linear-gradient(0deg, #111827 11%, rgba(217, 217, 217, 0.00) 91.98%)',
    componentBgOpacityHex: '#111827BF', //bg-gray-700 75%

    titleColor: 'text-blue-300', //#93C5FD
    primaryText: 'text-white', //#FFFFFF
    secundaryText: 'text-gray-300', //#D1D5DB
    tertiaryText: 'text-gray-400', //#9CA3AF
    tertiaryTextActive: 'text-blue-50', //#EFF6FF

    linkPrimary: 'text-blue-400', //#60A5FA
    linkSecondary: 'text-blue-200', //#BFDBFE

    inputBackground: '#374151', //bg-gray-700
    inputBorderHex: '#4B5563', //border-gray-600
    inputBorderSecondary: 'border-gray-500', //#6B7280

    borderIcon: 'border-gray-600', //#4B5563

    windowEditorBackgroundHex: '#374151', //bg-gray-70
    windowEditorPanelBackgroundHex: '#1f2937', //bg-gray-800

    sidebarOptionBackground: 'bg-gray-900', //#111827
    sidebarOptionColor: 'text-gray-500', //#6B7280

    sidebarBorder: 'border-gray-900', //#111827

    tagBackground: 'bg-gray-900', //#111827
    tagColor: 'text-amber-400', //#92400E
    tagBorder: 'border-gray-700', //#374151

    badgeSuccessBackground: 'bg-green-100', //#D1FAE5
    badgeSuccessColor: 'text-green-800', //#065F46
    badgeInfoBackground: 'bg-blue-200', //#BFDBFE
    badgeInfoColor: 'text-blue-800', //#1E40AF
    badgeWarningBackground: 'bg-amber-200', //#FDE68A
    badgeWarningColor: 'text-amber-800', //#92400E
    badgeDeprecatedBackground: 'bg-gray-500', //#6B7280
    badgeDeprecatedColor: 'text-gray-900', //#111827

    badgeDefaultBackground: 'bg-gray-800', //#1F2937
    badgeDefaultColor: 'text-blue-300', //#93C5FD
    badgeDefaultBorder: 'border-gray-600', //#4B5563

    searchSelectedOption: 'bg-gray-800', //#1F2937

    cardIconColor: 'text-white', //#FFFFFF
    cardIconColorHex: '#FFFFFF', //text-white
    cardPrimaryText: 'text-blue-300', //#93C5FD

    buildlogoColorHex: '#F3F4F6', //text-gray-100

    componentBgPrimaryHex: '#1F2937', //bg-gray-800
    componentBgSecondary: 'bg-blue-600 text-gray-50', //#2563EB #F9FAFB
    componentText: 'text-gray-50', //#F9FAFB
    componentBgTertiaryHex: '#374151', //bg-gray-700

    iconColor: 'text-blue-200' //#BFDBFE
  }
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1D4ED8'
    },
    info: {
      main: '#111827'
    },
    background:
      'radial-gradient(236.82% 131.34% at -16.84% -21.78%, #FFFFFF 0%, #E5E7EB 100%)',
    textColor: 'rgb(0,0,0)'
  },
  typography,
  extendedPalette: {
    barBackground: 'bg-gray-50', //#F9FAFB
    barMobileBackground: 'bg-gray-50', //#F9FAFB

    barBackgroundHex: '#F9FAFB', //bg-gray-50

    navbarLink: 'text-gray-700', //#374151
    navbarIconHex: '#1D4ED8', //blue-700

    logoColorHex: '#111827', //white
    footerBackground: 'bg-gray-100', //#F3F4F6

    cardBackground: 'bg-white', //#FFFFFF
    cardBorderColor: 'border-gray-300', //#D1D5DB
    cardFilter:
      'linear-gradient(0deg, #FFF 0%, rgba(217, 217, 217, 0.00) 70.98%)',
    cardFilterSecondary:
      'linear-gradient(0deg, rgb(243 244 246) 11%, rgba(231, 233, 236, 0) 100%)',
    componentBgOpacityHex: '#111827BF', //bg-gray-700 75%

    titleColor: 'text-blue-600', //#2563EB
    primaryText: 'text-gray-900', //#111827
    secundaryText: 'text-gray-700', //#374151
    tertiaryText: 'text-gray-800', //#1F2937
    tertiaryTextActive: 'text-gray-900', //#111827

    linkPrimary: 'text-gray-800', //#1F2937
    linkSecondary: 'text-gray-700', //#374151

    inputBackground: '#F9FAFB', //bg-gray-50
    inputBorderHex: '#D1D5DB', //border-gray-300
    inputBorderSecondary: 'border-gray-300', //#D1D5DB

    borderIcon: 'border-gray-300', //#D1D5DB

    windowEditorBackgroundHex: '#F9FAFB', //bg-gray-50
    windowEditorPanelBackgroundHex: '#F3F4F6', //bg-gray-100

    sidebarOptionBackground: 'bg-gray-200', //#E5E7EB
    sidebarOptionColor: 'text-gray-600', //#4B5563
    sidebarBorder: 'border-gray-200', //#E5E7EB

    tagBackground: 'bg-white', //#FFFFFF
    tagColor: 'text-blue-600', //#2563EB
    tagBorder: 'border-gray-300', //#D1D5DB

    badgeSuccessBackground: 'bg-green-200', //#A7F3D0
    badgeSuccessColor: 'text-green-900', //#064E3B
    badgeInfoBackground: 'bg-blue-300', //#93C5FD
    badgeInfoColor: 'text-blue-900', //#1E3A8A
    badgeWarningBackground: 'bg-amber-200', //#FDE68A
    badgeWarningColor: 'text-amber-700', //#B45309
    badgeDeprecatedBackground: 'bg-gray-300', //#D1D5DB
    badgeDeprecatedColor: 'text-gray-600', //#4B5563
    badgeDefaultBackground: 'bg-white', //#FFFFFF
    badgeDefaultColor: 'text-blue-900', //#1E3A8A
    badgeDefaultBorder: 'border-gray-300', //#D1D5DB

    searchSelectedOption: 'bg-gray-200', //#E5E7EB

    cardIconColor: 'text-blue-300', //#93C5FD
    cardIconColorHex: '#93C5FD', //text-blue-300
    cardPrimaryText: 'text-blue-900', //#1E3A8A

    buildlogoColorHex: '#111827', //text-gray-900

    componentBgPrimaryHex: '#FFFFFF', //bg-white
    componentBgSecondary: 'bg-blue-700 text-gray-50', //#1D4ED8 #F9FAFB
    componentText: 'text-gray-700', //#1D4ED8
    componentBgTertiaryHex: '#D1D5DB', //bg-gray-300

    iconColor: 'text-gray-700' //#374151
  }
})
