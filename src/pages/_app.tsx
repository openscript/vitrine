import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import GlobalStyles from '../components/GlobalStyles';
import DefaultLayout from '../components/layouts/DefaultLayout';
import German from '../i18n/de.json';
import English from '../i18n/en.json';
import { useStore } from '../state/store';
import { supabase } from '../utils/supabaseClient';

export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};

function VitrineApp({ Component, pageProps }: CustomAppProps) {
  const [loading, isLoading] = useState(true);
  const setSession = useStore((state) => state.setSession);
  const { locale, defaultLocale } = useRouter();
  let currentLocale = locale || defaultLocale || 'de';

  const messages = useMemo(() => {
    switch (locale) {
      case 'de':
        return German;
      case 'en':
        return English;
      default:
        return German;
    }
  }, [locale]);

  useEffect(() => {
    // get current session and load it into the application state
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      isLoading(false);
    };
    getSession();

    // listen to auth state change events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        useStore.persist.clearStorage();
      }
      setSession(newSession);
      isLoading(false);
    });

    // unsubscribe to auth state changes on destruction
    return () => {
      subscription.unsubscribe();
    };
  }, [setSession]);

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  if (loading) {
    return null;
  }

  return (
    <IntlProvider locale={currentLocale} defaultLocale={defaultLocale} messages={messages}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </NotificationsProvider>
      </MantineProvider>
    </IntlProvider>
  );
}

export default VitrineApp;
