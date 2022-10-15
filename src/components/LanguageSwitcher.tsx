import { Button } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

export default function LanguageSwitcher() {
  const { locale, locales } = useRouter();
  const intl = useIntl();

  if (!locales || !locale) {
    return null;
  }

  return (
    <Button.Group>
      {locales.map((l) => (
        <Button key={l} component={NextLink} href="" locale={l} variant={l === locale ? 'filled' : 'light'}>
          <FormattedMessage id={l} />
        </Button>
      ))}
    </Button.Group>
  );
}
