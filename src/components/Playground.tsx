import { FC, ReactNode } from 'react'
import { composeClasses } from 'dd360-ds/lib'

interface PlaygroundProps {
  children: ReactNode
  className?: string
}

const Playground: FC<PlaygroundProps> = ({ children, className }) => {
  const classContainer = composeClasses(
    'relative space-y-3 py-20 px-10 mx-auto h-full w-full'
  )

  return (
    <>
      <div
        className={composeClasses(
          'relative mt-10 bg-white border rounded-lg shadow-sm'
        )}
      >
        <div className="absolute h-full w-full bg-grid-playground opacity-10 [background-position:calc(100%+5px)_calc(100%+29px)]"></div>
        <div className={classContainer}>
          <div
            className={composeClasses(
              'bg-white shadow-lg border p-4 rounded-lg overflow-auto container-cmpnt-doc',
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Playground
