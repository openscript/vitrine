import { AppShell } from '@mantine/core';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import shallow from 'zustand/shallow';
import { CONFIGURATION } from '../../configuration';
import { useStore } from '../../state/store';
import { supabase } from '../../utils/supabaseClient';
import DefaultHeader from './default/DefaultHeader';
import DefaultNavbar from './default/DefaultNavbar';

type DefaultLayoutProps = PropsWithChildren<{}>;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [fetchProfile, avatar, session] = useStore((state) => [state.fetchProfile, state.avatar, state.session], shallow);
  const router = useRouter();
  const isAuthenticated = session ? true : false;
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push(CONFIGURATION.PATHS.HOME);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated, fetchProfile]);

  return (
    <AppShell
      header={<DefaultHeader isAuthenticated={isAuthenticated} />}
      navbar={isAuthenticated ? <DefaultNavbar userAvatar={avatar} userEmail={session?.user.email} signOut={handleSignOut} /> : undefined}
    >
      {children}
    </AppShell>
  );
}
