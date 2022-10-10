import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

type AuthGuardProps = PropsWithChildren<{
  isUnauthenticatedGuard?: boolean;
  redirectPath: string;
}>;

export default function AuthGuard({ children, isUnauthenticatedGuard, redirectPath }: AuthGuardProps) {
  const [loading, isLoading] = useState(true);
  const [authenticated, isAuthanticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuthentication() {
      const { data } = await supabase.auth.getSession();
      isLoading(false);
      isAuthanticated(data.session ? true : false);
    }
    checkAuthentication();
  }, []);

  if (loading) {
    return null;
  }

  if ((authenticated && isUnauthenticatedGuard) || (!authenticated && !isUnauthenticatedGuard)) {
    router.push(redirectPath);
    return null;
  }

  return <Fragment>{children}</Fragment>;
}
