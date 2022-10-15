import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';
import CommonFooter from './CommonFooter';

type EmptyLayoutProps = PropsWithChildren<{}>;

export default function EmptyLayout({ children }: EmptyLayoutProps) {
  return (
    <AppShell>
      <CommonFooter>{children}</CommonFooter>
    </AppShell>
  );
}
