import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import DefaultLayout from '../components/DefaultLayout';
import German from '../i18n/de.json';
import English from '../i18n/en.json';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function VitrineApp({ Component, pageProps }: AppPropsWithLayout) {
  const { locale, defaultLocale } = useRouter();
  let currentLocale = locale || defaultLocale || 'de';

  const messages = useMemo(() => {
    switch (locale) {
      case "de":
        return German;
      case "en":
        return English;
      default:
        return German;
    }
  }, [locale]);

  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <IntlProvider locale={currentLocale} defaultLocale={defaultLocale} messages={messages}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </IntlProvider>
  );
}

export default VitrineApp
