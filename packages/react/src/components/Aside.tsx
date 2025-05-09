import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type AsideProps = {
  sticky?: boolean;
  className?: string;
  children?: ReactNode;
  bottom?: ReactNode;
}

export function Aside({
  sticky = true,
  className,
  children,
  bottom
}: AsideProps) {
  const asideClasses = twMerge(
    'overflow-y-auto',
    sticky && 'sticky top-[var(--header-height)]',
    className
  );

  return (
    <aside className={asideClasses}>
      <div className="relative">
        {children}
        {bottom}
      </div>
    </aside>
  );
}
