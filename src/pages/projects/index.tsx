import { Button, Paper } from '@mantine/core';
import { NextPage } from 'next';
import { useIntl } from 'react-intl';
import Headline from '../../components/Headline';

const ProjectsIndex: NextPage = () => {
  const intl = useIntl();

  const actions = [<Button key="publish-project">Publish project</Button>];

  return (
    <Paper withBorder p="xs">
      <Headline title={intl.formatMessage({ id: 'page.my-projects.title' })} actions={actions} />
    </Paper>
  );
};

export default ProjectsIndex;
