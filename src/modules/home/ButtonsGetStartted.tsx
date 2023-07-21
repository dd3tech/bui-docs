import { Button, Flex, Tooltip } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import Link from 'next/link'
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  ClipboardIcon
} from '@heroicons/react/solid'
import { useTheme } from '@/store/theme-store'
import useCopy from '@/hooks/useCopy'

const ButtonsGetStartted = () => {
  const { handleCopy, isCopied } = useCopy()

  const {
    themeObject: { extendedPalette }
  } = useTheme()

  return (
    <Flex className="gap-3 flex-col sm:flex-row mt-9 w-full sm:w-auto">
      <Link href="/docs/get-started/getting-started">
        <Button
          className="flex justify-center items-center w-full sm:min-w-[149px] sm:max-w-[150px] h-10 gap-2"
          paddingY="2"
          rounded="lg"
        >
          Get started
          <ArrowRightIcon width={16} />
        </Button>
      </Link>
      <Tooltip
        position={'top-end' as any}
        content={isCopied ? 'Copied' : 'Copy'}
      >
        <Button
          paddingY="2"
          variant="secondary"
          className={composeClasses(
            'w-full sm:min-w-[202px] h-10 px-2 flex justify-between items-center',
            extendedPalette.secundaryText
          )}
          style={{
            borderColor: isCopied ? '#3b82f6' : extendedPalette.inputBorderHex,
            background: extendedPalette.inputBackground
          }}
          fontWeight="normal"
          rounded="lg"
          onClick={() => handleCopy('npm i dd360-ds@latest')}
        >
          <div className="w-full m-auto">npm i dd360-ds@latest </div>

          {isCopied ? (
            <ClipboardCheckIcon width={20} className="text-blue-100" />
          ) : (
            <ClipboardIcon width={20} />
          )}
        </Button>
      </Tooltip>
    </Flex>
  )
}

export default ButtonsGetStartted
