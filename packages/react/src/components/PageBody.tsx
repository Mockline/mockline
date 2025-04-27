import React, { ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageBodyProps = {
  className?: string
  children?: ReactNode
}

export const PageBody: React.FC<PageBodyProps> = ({ className, children }) => {
  const mergedClasses = useMemo(() => twMerge('flex flex-col gap-4 w-full', className), [className])

  return <div className={mergedClasses}>{children}</div>
}
