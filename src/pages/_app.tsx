import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from '../components/Layout';
import German from '../i18n/de.json';
import English from '../i18n/en.json';

function VitrineApp({ Component, pageProps }: AppProps) {
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

  return (
    <IntlProvider locale={currentLocale} defaultLocale={defaultLocale} messages={messages}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </IntlProvider>
  );
}

export default VitrineApp
