import { useState } from 'react'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Circle } from 'dd360-ds'
import { composeClasses } from 'dd360-ds/lib'

export default function Switch() {
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <label htmlFor="checkbox" onClick={() => setChecked(!checked)} className="cursor-pointer select-none">
            <input type="checkbox" className="hidden" />
            <div className="flex bg-gray-300 rounded-3xl" style={{ width: '72px' }}>
                <Circle style={{ transform: `translateX(${checked ? 0 : 36}px)` }} className="p-2 bg-white w-9 h-9 transition-all duration-200">
                    <DynamicHeroIcon
                        className={composeClasses('w-2 h-2', checked && 'text-blue-600', !checked && 'text-yellow-600')}
                        style={{ transform: 'scale(2.5)' }}
                        icon={checked ? 'MoonIcon' : 'SunIcon'}
                    />
                </Circle>
            </div>
        </label>
    )
}
