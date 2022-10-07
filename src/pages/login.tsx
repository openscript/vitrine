import { css } from "@emotion/react";
import { Center, Paper } from "@mantine/core";
import { ReactElement } from "react";
import EmptyLayout from "../components/EmptyLayout";
import { NextPageWithLayout } from "./_app";

const LoginStyles = css`
  height: 100%;
`;

const Login: NextPageWithLayout = () => {
  return <Center css={LoginStyles}><Paper>Login</Paper></Center>;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
}

export default Login;