import { AppShell, Navbar } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useStore } from '../../state/store';
import DefaultHeader from './default/DefaultHeader';

type DefaultLayoutProps = PropsWithChildren<{}>;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const session = useStore((state) => state.session);

  const navbar = (
    <Navbar width={{ base: 300 }} p="xs">
      Navbar
    </Navbar>
  );
  return (
    <AppShell header={<DefaultHeader isAuthenticated={session ? true : false} />} navbar={navbar}>
      {children}
    </AppShell>
  );
}
