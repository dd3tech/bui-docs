import { Tab, TabGroup } from 'dd360-ds'
import { useState } from 'react'

const TabsCustom = ({ option }: { option: string }) => {
    const [variant, setVariant] = useState<'primary' | 'secondary'>('primary')
    const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('horizontal')
    const [fontSize, setFontSize] = useState<'xs' | 'sm' | 'base' | 'lg' | 'xl'>('xs')

    return (
        <div>
            <div>
                <TabGroup variant={variant} orientation={orientation} fontSize={fontSize}>
                    <Tab label="Element First" />
                    <Tab label="Element Second" />
                    <Tab label="Element Third" />
                    <Tab label="Element Disabled" disabled />
                </TabGroup>
            </div>
            <div className="mt-6 flex gap-x-4 text-sm items-center">
                {option === 'isVariant' && (
                    <>
                        <input className="cursor-pointer" name="variant" onClick={() => setVariant('primary')} type="radio" />
                        <label>Primary</label>
                        <input className="cursor-pointer" name="variant" onClick={() => setVariant('secondary')} type="radio" />
                        <label>Secondary</label>
                    </>
                )}

                {option === 'isOrientation' && (
                    <>
                        <input className="cursor-pointer" name="orientation" onClick={() => setOrientation('horizontal')} type="radio" />
                        <label>Horizontal</label>
                        <input className="cursor-pointer" name="orientation" onClick={() => setOrientation('vertical')} type="radio" />
                        <label>Vertical</label>
                    </>
                )}

                {option === 'isFontSize' && (
                    <>
                        <input className="cursor-pointer" name="size" onClick={() => setFontSize('xs')} type="radio" />
                        <label>xs</label>
                        <input className="cursor-pointer" name="size" onClick={() => setFontSize('sm')} type="radio" />
                        <label>sm</label>
                        <input className="cursor-pointer" name="size" onClick={() => setFontSize('base')} type="radio" />
                        <label>base</label>
                        <input className="cursor-pointer" name="size" onClick={() => setFontSize('lg')} type="radio" />
                        <label>lg</label>
                        <input className="cursor-pointer" name="size" onClick={() => setFontSize('xl')} type="radio" />
                        <label>xl</label>
                    </>
                )}
            </div>
        </div>
    )
}
export default TabsCustom
