import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

function VitrineApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default VitrineApp
