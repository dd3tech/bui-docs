import { useState } from 'react'
import Image from 'next/image'
import { composeClasses } from 'dd360-ds/lib'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  dracula,
  oneLight
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import useCopy from '@/hooks/useCopy'

import JSImg from 'public/javascript-logo.svg'
import TSImg from 'public/typescript.svg'
import { useTheme } from '@/pages/store/theme-store'

type Languages =
  | 'tsx'
  | 'jsx'
  | 'md'
  | 'mdx'
  | 'bash'
  | 'javascript'
  | 'typescript'
  | 'css'

interface EditorProps {
  codeString?: string
  language?: Languages
  className?: string
  styleContainer?: React.CSSProperties
  style?: React.CSSProperties
  backgroundColor?: string
  header?: { show: boolean; title: string }
  height?: string
}

const cardMetricsString = `import React from 'react';
import { Container, Card, Text, Divider } from 'dd360-ds'

const CardMetrics = () => {
	return (
		<Card rounded='lg' padding={5}>
			<Container>
				<Text size={{ xl: '2xl', sm: 'xl' }}>Metrics</Text>
			</Container>
			<Divider />
			<Text variant='p'>The summary of this month's expensive</Text>
			<Text variant='small'>700</Text>
		</Card>
	)
}`

function getBrandingLanguage(lang: Languages): {
  src: string
  width: number
  height: number
} {
  if (lang === 'javascript' || lang === 'jsx')
    return { src: JSImg, width: 20, height: 20 }
  if (lang === 'typescript' || lang === 'tsx')
    return { src: TSImg, width: 17, height: 17 }

  return { src: '', width: 20, height: 20 }
}

function WindowEditor({
  codeString = cardMetricsString,
  language = 'tsx',
  className,
  header,
  style,
  backgroundColor,
  styleContainer,
  height
}: EditorProps) {
  const { handleCopy, isCopied } = useCopy()
  const [showCopyButton, setShowCopyButton] = useState(false)
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  const styleSyntax = isLightTheme ? oneLight : dracula

  return (
    <div
      onMouseOver={() => setShowCopyButton(true)}
      onMouseLeave={() => setShowCopyButton(false)}
      className={composeClasses(
        'h-auto rounded-md mt-2 mb-10 py-4 overflow-hidden',
        className
      )}
      style={{
        backgroundColor:
          backgroundColor ?? extendedPalette.windowEditorBackgroundHex,
        height: height,
        ...styleContainer
      }}
    >
      {showCopyButton && (
        <div className="relative">
          <div
            className="absolute rounded-lg right-4 top-0 bottom-0 border w-[35px] h-[35px] cursor-pointer"
            onClick={() => handleCopy(codeString)}
          >
            <div
              className={composeClasses(
                'flex items-center text-gray-400 justify-center transition-all duration-100',
                isCopied && 'rotate-12'
              )}
            >
              <DynamicHeroIcon
                icon={isCopied ? 'ClipboardCheckIcon' : 'ClipboardIcon'}
                width={25}
              />
            </div>
          </div>
        </div>
      )}
      {header?.show && (
        <nav
          className="flex items-center px-3 pt-2 gap-3"
          style={{
            backgroundColor: extendedPalette.windowEditorPanelBackground
          }}
        >
          <div className="flex items-center gap-2">
            <button className="h-3 w-3 bg-red-400 rounded-full"></button>
            <button className="h-3 w-3 bg-yellow-400 rounded-full"></button>
            <button className="h-3 w-3 bg-green-400 rounded-full"></button>
          </div>
          <div
            style={{
              backgroundColor:
                backgroundColor ?? extendedPalette.windowEditorBackgroundHex
            }}
            className="flex items-center mr-auto rounded-t-xl h-full px-3 py-1 gap-1"
          >
            <Image {...getBrandingLanguage(language)} alt="lang" />
            <h3
              className={composeClasses(
                'font-medium',
                extendedPalette.primaryText
              )}
            >
              {header?.title}
            </h3>
          </div>
        </nav>
      )}
      <SyntaxHighlighter
        wrapLines
        language={language}
        style={{ ...styleSyntax }}
        customStyle={{
          margin: 0,
          ...style,
          maxHeight: height ?? '80%',
          backgroundColor:
            backgroundColor ?? extendedPalette.windowEditorBackgroundHex
        }}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default WindowEditor
