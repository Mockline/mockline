import React, { ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type MainProps = {
  className?: string
  children?: ReactNode
}

export const Main: React.FC<MainProps> = ({ className, children }) => {
  const mainClasses = useMemo(() => {
    return twMerge('h-full', className)
  }, [className])

  return <main className={mainClasses}>{children}</main>
}