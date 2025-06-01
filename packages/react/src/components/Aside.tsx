import React, { ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type AsideProps = {
  sticky?: boolean
  className?: string
  children?: ReactNode
  bottom?: ReactNode
}

export const Aside: React.FC<AsideProps> = ({
  sticky = true,
  className,
  children,
  bottom,
}) => {
  const asideClasses = useMemo(() => {
    return twMerge(
      'overflow-y-auto',
      sticky && 'sticky top-[var(--header-height)]',
      className
    )
  }, [sticky, className])

  return (
    <aside className={asideClasses}>
      <div className="relative">
        {children}
        {bottom}
      </div>
    </aside>
  )
}
