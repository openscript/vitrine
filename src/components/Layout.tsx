import { AppShell, Header, Navbar } from "@mantine/core";
import { PropsWithChildren } from "react";
import Brand from "./Brand";

type LayoutProps = PropsWithChildren<{}>;

export default function Layout({children}: LayoutProps) {
  const header = <Header height={60}><Brand /></Header>
  const navbar = <Navbar width={{base: 300}}>Navbar</Navbar>
  return <AppShell header={header} navbar={navbar}>{children}</AppShell>
}