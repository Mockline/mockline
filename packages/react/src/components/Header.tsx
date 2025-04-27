import React, { FC, useEffect, useRef, useState } from 'react'

type HeaderProps = {
  className?: string,
  children: any
}

export const Header: FC<HeaderProps> = ({ className, children }) => {
  const headerRef = useRef<HTMLElement | null>(null)

  return (
    <header ref={headerRef} className={""}>
      <div>{children}</div>
    </header>
  )
}