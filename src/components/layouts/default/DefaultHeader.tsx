import { css } from '@emotion/react';
import { Button, Group, Header } from '@mantine/core';
import { NextLink } from '@mantine/next';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { CONFIGURATION } from '../../../configuration';
import Brand from '../../Brand';
import LanguageSwitcher from '../../LanguageSwitcher';

const defaultHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type DefaultHeaderProps = {
  isAuthenticated?: boolean;
};

export default function DefaultHeader({ isAuthenticated }: DefaultHeaderProps) {
  return (
    <Header height={60} css={defaultHeaderStyles} p="xs">
      <Link href={CONFIGURATION.PATHS.HOME}>
        <a>
          <Brand />
        </a>
      </Link>
      <Group>
        <LanguageSwitcher />
        {!isAuthenticated && (
          <Button.Group>
            <Button variant="outline" component={NextLink} href={CONFIGURATION.PATHS.LOGIN}>
              <FormattedMessage id="page.login.title" />
            </Button>
            <Button variant="outline" component={NextLink} href={CONFIGURATION.PATHS.REGISTER}>
              <FormattedMessage id="page.register.title" />
            </Button>
          </Button.Group>
        )}
      </Group>
    </Header>
  );
}
