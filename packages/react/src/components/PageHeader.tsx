import React from 'react'

export type PageHeaderProps = {
  className?: string
  headline?: string
  icon?: string
  title?: string
  links?: {
    label: string
    href: string
    target?: string
    color?: string
    click?: () => void
  }[]
  description?: string
  children?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  className = 'relative border-b border-neutral-200 dark:border-neutral-800 py-8',
  headline,
  icon,
  title,
  links,
  description,
  children,
}) => {
  return (
    <div className={className}>
      {(headline || children) && (
        <div>
          {children || headline}
        </div>
      )}

      <div className="flex flex-col items-start gap-6 lg:flex-row">
        {(icon || children) && (
          <div>
            {children || <span className="text-primary size-10 flex-shrink-0">{icon}</span>}
          </div>
        )}

        <div className="flex-1">
          <div>
            {/* TODO add ProseH1 */}
            {/* <ProseH1>{children || title}</ProseH1> */}
          </div>

          {description && <p>{description}</p>}
          
          {children}
        </div>
      </div>
    </div>
  )
}
