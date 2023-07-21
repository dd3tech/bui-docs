import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Button,
  Flex,
  Input,
  Callout,
  CalloutProps,
  Transition
} from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'
import { useTheme } from '@/store/theme-store'

function Newsletter() {
  const { t } = useTranslation('common')
  const {
    themeObject: { extendedPalette }
  } = useTheme()
  const [emailVal, setEmailVal] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMessageShown, setIsMessageShown] = useState(false)
  const [messageType, setMessageType] = useState('')

  const isDisabledBtn = emailVal === '' || isMessageShown

  const sendSubmit = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: emailVal
      })

      const data = await res.json()
      if (data.status !== 'success') {
        throw new Error('Failed')
      }
      setMessageType('success')
    } catch (e) {
      setMessageType('error')
    } finally {
      setIsMessageShown(true)
      setIsLoading(false)
    }
  }, [emailVal])

  const calloutProps = useMemo(() => {
    return {
      title:
        messageType === 'success'
          ? 'Thanks for subscribing!'
          : 'Something went wrong!',
      description:
        messageType === 'success'
          ? "We'll send you an email when we have news."
          : "Oops, there was an error and we couldn't subscribe you. Please try again.",
      variant:
        messageType === 'success'
          ? 'success'
          : ('error' as CalloutProps['variant'])
    }
  }, [messageType])

  useEffect(() => {
    if (isMessageShown) {
      const timer = setTimeout(() => {
        setIsMessageShown(false)
        setMessageType('')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isMessageShown])

  return (
    <>
      <Flex gap="3" className="flex-col sm:flex-row mt-8">
        <Input
          placeholder="hello@dd360.mx"
          type="email"
          className={composeClasses(
            'sm:mt-0 inline-block border-gray-500 w-full sm:max-w-[287px]',
            extendedPalette.primaryText
          )}
          onChange={(e) => setEmailVal(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault()
            sendSubmit()
          }}
          value={emailVal}
          style={{
            background: extendedPalette.inputBackground,
            borderColor: extendedPalette.inputBorderHex
          }}
        />
        <Button
          className="leading-none text-gray-50 min-w-max"
          rounded="lg"
          paddingX="8"
          paddingY="4"
          style={{ maxWidth: 124 }}
          disabled={isDisabledBtn || isLoading}
          isLoading={isLoading}
          onClick={(e) => {
            e.preventDefault()
            sendSubmit()
          }}
        >
          {t('subscribe')}
        </Button>
      </Flex>
      {isMessageShown && (
        <Transition show>
          <Callout className="w-96 mt-4" {...calloutProps} />
        </Transition>
      )}
    </>
  )
}

export default Newsletter
