import React, { useRef, useState, ReactNode } from 'react'
import type { SidebarProps, SidebarSlots } from '@mockline/themes'

const Sidebar: React.FC<SidebarProps & SidebarSlots> = ({
  minSize = 20,
  maxSize = 20,
  collapsedSize = 0,
  defaultSize = 20,
  className,
  header,
  footer,
  children
}) => {
  const [collapsed] = useState(false)
  const sidebarRef = useRef<HTMLElement | null>(null)

  return (
    <nav ref={sidebarRef} className={className}>
      <div className="flex flex-col gap-4">
        <div>{header}</div>
        <div>{children}</div>
      </div>
      <div>{footer}</div>
    </nav>
  )
}

export default Sidebar