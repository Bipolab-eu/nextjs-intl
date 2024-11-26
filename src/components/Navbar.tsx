import React from 'react'
import { Button } from './Button'
import LocaleSwitcher from './LocaleSwitcher'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const navbarStyles = {
  backgroundColor: 'md:bg-neutral-100',
}

export const Navbar: React.FC = () => {
  const { backgroundColor } = navbarStyles
  const t = useTranslations('HomePage')

  return (
    <header className={`hidden md:block p-4 fixed w-full z-10 ${backgroundColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>Logotipo</Link>
        <nav className='flex gap-x-2'>
          <Button href='/about' shape='squared' variant='ghost' size='normal'>{t('about')}</Button>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  )
}