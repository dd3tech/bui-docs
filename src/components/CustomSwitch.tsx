import { useCallback, useState } from 'react'
import Switch from 'dd360-ds/Switch'

// import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
// import { composeClasses } from 'dd360-ds/lib'

function CustomSwitch() {
    const [checked, setChecked] = useState<boolean>(false)

    const handleChecked = useCallback(() => {
        setChecked((prev) => !prev)
    }, [])

    return (
        <Switch
            toggle={checked}
            setToggle={handleChecked}
            // customIcon={
            //     <div className="flex items-center jusitify-center">
            //         <DynamicHeroIcon
            //             className={composeClasses(checked ? 'text-blue-600' : 'text-yellow-600')}
            //             style={{ transform: 'scale(2.5)' }}
            //             icon={checked ? 'MoonIcon' : 'SunIcon'}
            //             width={10}
            //         />
            //     </div>
            // }
        />
    )
}

export default CustomSwitch
