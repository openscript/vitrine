import { css } from '@emotion/react';
import { AppShell, Button, Header, Navbar } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { FormattedMessage } from 'react-intl';
import { useStore } from '../state/store';
import { supabase } from '../utils/supabaseClient';
import Brand from './Brand';

type DefaultLayoutProps = PropsWithChildren<{}>;

const headerStyles = css`
  display: flex;
  align-items: center;
`;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const session = useStore((state) => state.session);

  const handleLogout = () => supabase.auth.signOut();

  const header = (
    <Header height={60} css={headerStyles} p="xs">
      <Brand />
      {session && (
        <Button onClick={handleLogout}>
          <FormattedMessage id="form.actions.logout" />
        </Button>
      )}
    </Header>
  );
  const navbar = (
    <Navbar width={{ base: 300 }} p="xs">
      Navbar
    </Navbar>
  );
  return (
    <AppShell header={header} navbar={navbar}>
      {children}
    </AppShell>
  );
}
