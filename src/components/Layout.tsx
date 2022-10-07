import { css } from "@emotion/react";
import { AppShell, Header, Navbar } from "@mantine/core";
import { PropsWithChildren } from "react";
import Brand from "./Brand";

type LayoutProps = PropsWithChildren<{}>;

const headerStyles = css`
  display: flex;
  align-items: center;
`

export default function Layout({children}: LayoutProps) {
  const header = <Header height={60} css={headerStyles} p="xs"><Brand /></Header>
  const navbar = <Navbar width={{base: 300}} p="xs">Navbar</Navbar>
  return <AppShell header={header} navbar={navbar}>{children}</AppShell>
}