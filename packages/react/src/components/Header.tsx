import { useRef, useEffect, type ReactNode } from 'react';
import { useComponent } from '#mockline/utils/useComponent';

interface HeaderProps {
  className?: string;
  children?: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export const Header = ({
  className,
  children,
  leftSlot,
  rightSlot
}: HeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const { getClasses } = useComponent('header');

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }, []);

  return (
    <header ref={headerRef} className={getClasses('default', className)}>
      {leftSlot}
      {children}
      {rightSlot}
    </header>
  );
};

export default Header;
