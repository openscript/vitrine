import { css } from "@emotion/react";
import { AppShell, Header, Navbar } from "@mantine/core";
import { PropsWithChildren } from "react";
import Brand from "./Brand";

type DefaultLayoutProps = PropsWithChildren<{}>;

const headerStyles = css`
  display: flex;
  align-items: center;
`

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const header = <Header height={60} css={headerStyles} p="xs"><Brand /></Header>
  const navbar = <Navbar width={{ base: 300 }} p="xs">Navbar</Navbar>
  return <AppShell header={header} navbar={navbar}>{children}</AppShell>
}