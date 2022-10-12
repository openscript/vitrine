import { AppShell } from '@mantine/core';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useStore } from '../../state/store';
import { supabase } from '../../utils/supabaseClient';
import DefaultHeader from './default/DefaultHeader';
import DefaultNavbar from './default/DefaultNavbar';

type DefaultLayoutProps = PropsWithChildren<{}>;

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [avatar, setAvatar] = useState('');
  const session = useStore((state) => state.session);
  const isAuthenticated = session ? true : false;
  const handleSignOut = () => supabase.auth.signOut();

  useEffect(() => {
    const getCurrentProfile = async () => {
      const { data: profile } = await supabase.from('profiles').select('forename, surname, avatar_url').eq('id', session?.user.id).single();
      if (profile?.avatar_url) {
        const { data: avatar } = await supabase.storage.from('avatars').download(profile.avatar_url);
        if (avatar) {
          setAvatar(URL.createObjectURL(avatar));
        }
      }
    };
    getCurrentProfile();
  }, [session]);

  return (
    <AppShell
      header={<DefaultHeader isAuthenticated={isAuthenticated} />}
      navbar={isAuthenticated ? <DefaultNavbar userAvatar={avatar} userEmail={session?.user.email} signOut={handleSignOut} /> : undefined}
    >
      {children}
    </AppShell>
  );
}
