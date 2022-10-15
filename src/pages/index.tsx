import { Paper } from '@mantine/core';
import type { NextPage } from 'next';
import { useIntl } from 'react-intl';
import Headline from '../components/Headline';

const Home: NextPage = () => {
  const intl = useIntl();
  return (
    <Paper withBorder p="xs">
      <Headline title={intl.formatMessage({ id: 'page.home.title' })} />
    </Paper>
  );
};

export default Home;
