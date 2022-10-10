import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';

type EmptyLayoutProps = PropsWithChildren<{}>;

export default function EmptyLayout({ children }: EmptyLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
