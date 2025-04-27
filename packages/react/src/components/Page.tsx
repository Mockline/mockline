import { FC, ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageProps = {
  wrapper?: string
  className?: string
  left?: string
  right?: string
  children?: ReactNode
}

export const Page: FC<PageProps> = ({
  wrapper,
  className,
  left,
  right,
  children,
}) => {
  const pageClasses = useMemo(() => twMerge('flex flex-col gap-4 w-full', className), [className])

  const wrapperClasses = useMemo(() => twMerge('flex sm:flex-row flex-col', wrapper), [wrapper])

  const leftClasses = useMemo(() => twMerge('flex flex-col', left), [left])

  const rightClasses = useMemo(() => twMerge('flex flex-col', right), [right])

  return (
    <div className={wrapperClasses}>
      {left && <div className={leftClasses}>{left}</div>}

      <div className={pageClasses}>{children}</div>

      {right && <div className={rightClasses}>{right}</div>}
    </div>
  )
}
