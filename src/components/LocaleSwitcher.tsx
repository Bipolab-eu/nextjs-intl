'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Locale, usePathname, useRouter, routing } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import { Button } from './Button';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')

  const [toggle, setToggle] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onToogle(nextLocale: Locale) {

    setToggle(prev => !prev);

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale }
    )
  }

  return (
    <div className='relative '>
      <Button
        shape='rounded'
        variant='secondary'
        size='small'
        onClick={() => setToggle(prev => !prev)}>
        <Languages size={24} strokeWidth={1.5} />
      </Button>
      {
        toggle && (
          <div className='absolute right-0 bg-neutral-200 p-4 mt-4 rounded'>
            {routing.locales.map((cur) => (
              <Button
                onClick={() => onToogle(cur as Locale)}
                key={cur}
                size='normal'
                shape='squared'
                variant='ghost'
              >
                {t('locale', { locale: cur })}
              </Button>
            ))}
          </div>
        )
      }
    </div>
  );
}