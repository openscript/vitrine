import { NextPage } from "next";
import { ReactElement } from "react";
import EmptyLayout from "../components/EmptyLayout";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return <div>Login</div>;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
}

export default Login;