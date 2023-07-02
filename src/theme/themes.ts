import { ThemeProps, createTheme } from 'dd360-ds/theme'

const typography: ThemeProps['typography'] = {}

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      contrastText: '#fff'
    },
    background:
      'linear-gradient(to bottom right, #374151 0%, #111827 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #374151 0%, #111827 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #374151 0%, #111827 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #374151 0%, #111827 50%) top right / 50% 50% no-repeat',
    textColor: '#fff'
  },
  typography,
  extendedPalette: {
    barBackground: 'bg-gray-800', //#1F2937
    navbarLink: 'text-white', //#FFFFFF
    navbarIcon: '#93C5FD', //blue-300
    logoColor: '#FFFFFF', //white
    footerBackground: 'bg-gray-900', //#111827
    cardBackground: 'bg-gray-900', //#111827
    cardBorderColor: 'border-gray-700', //#374151
    cardBorderFilter:
      'linear-gradient(0deg, #111827 0%, rgba(217, 217, 217, 0.00) 91.98%)',
    titleColor: 'text-blue-300', //#93C5FD
    primaryText: 'text-white', //#FFFFFF
    secundaryText: 'text-gray-300', //#D1D5DB

    tertiaryText: 'text-gray-400', //#9CA3AF
    tertiaryTextActive: 'text-blue-50', //#EFF6FF

    linkPrimary: 'text-blue-400', //#60A5FA
    linkSecondary: 'text-blue-200', //#BFDBFE
    inputBackground: '#374151', //bg-gray-700
    inputBorder: '#4B5563', //border-gray-600
    inputBorderSecondary: 'border-gray-500', //#6B7280
    borderIcon: 'border-gray-600', //#4B5563

    windowEditorBackground: '#374151', //bg-gray-70

    sidebarOptionBackground: 'bg-gray-900', //#111827
    sidebarOptionColor: 'text-gray-500', //#6B7280

    sidebarBorder: 'border-gray-900', //#111827

    tagBackground: 'bg-gray-900', //#111827
    tagColor: 'text-yellow-500', //#111827
    tagBorder: 'border-gray-700' //#374151
  }
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1D4ED8'
    },
    background:
      'linear-gradient(to bottom right, #FFF 0%, #E5E7EB 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFF 0%, #E5E7EB 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFF 0%, #E5E7EB 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFF 0%, #E5E7EB 50%) top right / 50% 50% no-repeat',
    textColor: 'rgb(0,0,0)'
  },
  typography,
  extendedPalette: {
    barBackground: 'bg-gray-50', //#F9FAFB
    navbarLink: 'text-gray-700', //#374151
    navbarIcon: '#1D4ED8', //blue-700
    logoColor: '#111827', //white
    footerBackground: 'bg-gray-100', //#F3F4F6
    cardBackground: 'bg-white', //#FFFFFF
    cardBorderColor: 'border-gray-300', //#D1D5DB
    cardBorderFilter:
      'linear-gradient(0deg, #FFF 0%, rgba(217, 217, 217, 0.00) 70.98%)',
    titleColor: 'text-blue-600', //#2563EB
    primaryText: 'text-gray-900', //#111827
    secundaryText: 'text-gray-700', //#374151

    tertiaryText: 'text-gray-800', //#1F2937
    tertiaryTextActive: 'text-gray-900', //#111827

    linkPrimary: 'text-gray-800', //#1F2937
    linkSecondary: 'text-gray-700', //#BFDBFE
    inputBackground: '#F9FAFB', //bg-gray-50
    inputBorder: '#D1D5DB', //border-gray-300
    inputBorderSecondary: 'border-gray-300', //#D1D5DB
    borderIcon: 'border-gray-300', //#D1D5DB

    windowEditorBackground: '#F9FAFB', //bg-gray-50

    sidebarOptionBackground: 'bg-gray-200', //#E5E7EB

    sidebarOptionColor: 'text-gray-600', //#4B5563

    sidebarBorder: 'border-gray-200', //#F9FAFB

    tagBackground: 'bg-white', //#FFFFFF
    tagColor: 'text-blue-600', //#2563EB
    tagBorder: 'border-gray-300' //#374151
  }
})
