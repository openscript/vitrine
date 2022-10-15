import { Button, Paper } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { NextPage } from 'next';
import { useIntl } from 'react-intl';
import Headline from '../../components/Headline';
import { CONFIGURATION } from '../../configuration';

const ProjectsIndex: NextPage = () => {
  const intl = useIntl();

  const actions = [
    <Button key="publish-project" component={NextLink} href={CONFIGURATION.PATHS.MY_PROJECTS.PUBLISH}>
      Publish project
    </Button>,
  ];

  return (
    <Paper withBorder p="xs">
      <Headline title={intl.formatMessage({ id: 'page.my-projects.title' })} actions={actions} />
    </Paper>
  );
};

export default ProjectsIndex;
