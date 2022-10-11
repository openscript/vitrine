import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useStore } from '../../state/store';
import DefaultHeader from './default/DefaultHeader';
import DefaultNavbar from './default/DefaultNavbar';

type DefaultLayoutProps = PropsWithChildren<{}>;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const session = useStore((state) => state.session);
  const isAuthenticated = session ? true : false;

  return (
    <AppShell
      header={<DefaultHeader isAuthenticated={isAuthenticated} />}
      navbar={isAuthenticated ? <DefaultNavbar userEmail={session?.user.email} /> : undefined}
    >
      {children}
    </AppShell>
  );
}
