import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
}

export function SectionLabel({ children, align = 'center' }: SectionLabelProps) {
  const alignClass = {
    left: 'section-label--left',
    center: 'section-label--center',
    right: 'section-label--right',
  }[align]

  return (
    <p className={`section-label ${alignClass}`}>
      <span className="section-label__line" />
      {children}
      <span className="section-label__line" />
    </p>
  )
}
