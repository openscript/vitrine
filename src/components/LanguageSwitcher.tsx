import { css, Theme } from '@emotion/react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

const LanguageSwitcherStyles = (theme: Theme) => css`
  a.active {
    background-color: ${theme.colors.gray[0]};
  }
`;

export default function LanguageSwitcher() {
  const { locale, locales } = useRouter();
  const intl = useIntl();

  if (!locales || !locale) {
    return null;
  }

  return (
    <Button.Group css={LanguageSwitcherStyles}>
      {locales.map((l) => (
        <Button key={l} component={Link} href="" locale={l} variant="default" className={l === locale ? 'active' : ''}>
          <FormattedMessage id={l} />
        </Button>
      ))}
    </Button.Group>
  );
}
