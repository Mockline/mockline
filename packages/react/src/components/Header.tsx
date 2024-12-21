'use client';

import React, { useEffect, useRef, useState } from "react";

type MHeaderProps = {
  className?: string;
  children?: React.ReactNode;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export const MHeader: React.FC<MHeaderProps> = ({
                                                className = "",
                                                children,
                                                leftSlot,
                                                rightSlot,
                                              }) => {
  const headerRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setHeight(headerHeight);
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <header ref={headerRef} className={`default-header ${className}`}>
      {leftSlot && <div className="header-left">{leftSlot}</div>}
      <div className="header-main">{children}</div>
      {rightSlot && <div className="header-right">{rightSlot}</div>}
    </header>
  );
};
