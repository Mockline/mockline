import { useRef, useEffect } from 'react';
import { useComponent } from '#mockline/utils/useComponent';
import type { HeaderProps, HeaderSlots } from '@mockline/themes'

type Properties = {
slots: HeaderSlots,
props: HeaderProps
}

export const Header = ({slots, props}: Properties) => {
  const headerRef = useRef<HTMLElement>(null);
  const { getClasses } = useComponent('header', props);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }, []);

  return (
    <header ref={headerRef} className={getClasses('default', props.class)}>
      {slots.left}
      {slots.default}
      {slots.right}
    </header>
  );
};

export default Header;