import { PropsWithChildren } from "react";

type EmptyLayoutProps = PropsWithChildren<{}>;

export default function EmptyLayout({ children }: EmptyLayoutProps) {
  return <div>{children}</div>
}