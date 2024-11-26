import { Link } from '@/i18n/routing'
import React, { ReactNode } from 'react'

const { base, shapes, variants, sizes } = {
  base: 'text-center leading-none flex justify-center items-center w-fit h-fit',

  shapes: {
    squared: 'rounded',
    rounded: 'rounded-full',
  },

  variants: {
    primary:   'bg-neutral-800 text-neutral-50  md:hover:brightness-150',
    secondary: 'bg-neutral-400 text-neutral-800 md:hover:brightness-125',
    ghost:     'text-neutral-800 px-0 min-w-0 md:hover:brightness-150'
  },

  sizes: {
    large:  'p-5 min-w-24 text-xl',
    normal: 'p-4 min-w-20 text-base',
    small:  'p-3 min-w-16 text-xs',
  }
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  shape: keyof typeof shapes,
  variant: keyof typeof variants,
  size: keyof typeof sizes,
  href?: any
  openInNewTab?: boolean
}

export const Button: React.FC<Readonly<Props>> = ({
  children,
  shape,
  variant,
  size,
  href,
  openInNewTab,
  onClick
}) => {

  const classname = `${base} ${shapes[shape]} ${variants[variant]} ${sizes[size]}`

  return href
    ? (
      <Link
        href={href}
        className={classname}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >{children}
      </Link>
    )
    :
    <button
      className={classname}
      onClick={onClick}
    >
      {children}
    </button>
}