'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Locale, usePathname, useRouter, routing } from '@/i18n/routing';

export default function LocaleSwitcherSelect() {
  const t = useTranslations('LocaleSwitcher')
  const defaultLocale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select
      className="inline-flex list-none bg-transparent py-3 pl-2 pr-6"
      defaultValue={defaultLocale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </select>
  );
}