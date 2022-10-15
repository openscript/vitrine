import { Paper, Title } from '@mantine/core';
import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';

const Home: NextPage = () => {
  return (
    <Paper withBorder p="xs">
      <Title order={2}>
        <FormattedMessage id="page.home.title" />
      </Title>
    </Paper>
  );
};

export default Home;
