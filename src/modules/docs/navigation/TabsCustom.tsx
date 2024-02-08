import { Tab, TabGroup } from 'dd360-ds'
import { useState } from 'react'

const TabsCustom = ({ option }: { option: string }) => {
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'tertiary'>(
    'primary'
  )
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>(
    'horizontal'
  )
  const [fontSize, setFontSize] = useState<'xs' | 'sm' | 'base' | 'lg' | 'xl'>(
    'xs'
  )

  return (
    <div>
      <div>
        <TabGroup
          variant={variant}
          orientation={orientation}
          fontSize={fontSize}
        >
          <Tab label="Element First" />
          <Tab label="Element Second" />
          <Tab label="Element Third" />
          <Tab label="Element Disabled" disabled />
        </TabGroup>
      </div>
      <div className="mt-6 flex gap-x-4 text-sm items-center">
        {option === 'isVariant' && (
          <>
            <input
              checked={variant === 'primary'}
              className="cursor-pointer"
              name="variant"
              onChange={() => setVariant('primary')}
              type="radio"
            />
            <label>Primary</label>
            <input
              checked={variant === 'secondary'}
              className="cursor-pointer"
              name="variant"
              onChange={() => setVariant('secondary')}
              type="radio"
            />
            <label>Secondary</label>
            <input
              checked={variant === 'tertiary'}
              className="cursor-pointer"
              name="variant"
              onChange={() => setVariant('tertiary')}
              type="radio"
            />
            <label>Tertiary</label>
          </>
        )}

        {option === 'isOrientation' && (
          <>
            <input
              checked={orientation === 'horizontal'}
              className="cursor-pointer"
              name="orientation"
              onChange={() => setOrientation('horizontal')}
              type="radio"
            />
            <label>Horizontal</label>
            <input
              checked={orientation === 'vertical'}
              className="cursor-pointer"
              name="orientation"
              onChange={() => setOrientation('vertical')}
              type="radio"
            />
            <label>Vertical</label>
          </>
        )}

        {option === 'isFontSize' && (
          <>
            <input
              checked={fontSize === 'xs'}
              className="cursor-pointer"
              name="size"
              onChange={() => setFontSize('xs')}
              type="radio"
            />
            <label>xs</label>
            <input
              checked={fontSize === 'sm'}
              className="cursor-pointer"
              name="size"
              onChange={() => setFontSize('sm')}
              type="radio"
            />
            <label>sm</label>
            <input
              checked={fontSize === 'base'}
              className="cursor-pointer"
              name="size"
              onChange={() => setFontSize('base')}
              type="radio"
            />
            <label>base</label>
            <input
              checked={fontSize === 'lg'}
              className="cursor-pointer"
              name="size"
              onChange={() => setFontSize('lg')}
              type="radio"
            />
            <label>lg</label>
            <input
              checked={fontSize === 'xl'}
              className="cursor-pointer"
              name="size"
              onChange={() => setFontSize('xl')}
              type="radio"
            />
            <label>xl</label>
          </>
        )}
      </div>
    </div>
  )
}
export default TabsCustom
