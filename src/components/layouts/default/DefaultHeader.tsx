import { css } from '@emotion/react';
import { Button, Group, Header } from '@mantine/core';
import Link from 'next/link';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { CONFIGURATION } from '../../../configuration';
import Brand from '../../Brand';

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
        {!isAuthenticated && (
          <Fragment>
            <Link href={CONFIGURATION.PATHS.LOGIN}>
              <Button variant="light">
                <FormattedMessage id="page.login.title" />
              </Button>
            </Link>
            <Link href={CONFIGURATION.PATHS.REGISTER}>
              <Button variant="light">
                <FormattedMessage id="page.register.title" />
              </Button>
            </Link>
          </Fragment>
        )}
      </Group>
    </Header>
  );
}
