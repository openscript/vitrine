import { ActionIcon, Button, LoadingOverlay, Paper, Table } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconTrash } from '@tabler/icons';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Headline from '../../components/Headline';
import { CONFIGURATION } from '../../configuration';
import { useStore } from '../../state/store';

const ProjectsIndex: NextPage = () => {
  const intl = useIntl();
  const [isLoading, fetchMyProjects, deleteMyProject, myProjects] = useStore((state) => [
    state.isLoading,
    state.fetchMyProjects,
    state.deleteMyProject,
    state.myProjects,
  ]);

  useEffect(() => {
    fetchMyProjects();
  }, [fetchMyProjects]);

  const actions = [
    <Button key="publish-project" variant="light" component={NextLink} href={CONFIGURATION.PATHS.MY_PROJECTS.PUBLISH}>
      Publish project
    </Button>,
  ];

  return (
    <Paper withBorder p="xs">
      <LoadingOverlay visible={isLoading} />
      <Headline title={intl.formatMessage({ id: 'page.my-projects.title' })} actions={actions} />
      <Table>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="model.attribute.title" />
            </th>
            <th>
              <FormattedMessage id="model.attribute.short-description" />
            </th>
            <th>
              <FormattedMessage id="model.attribute.description" />
            </th>
            <th>
              <FormattedMessage id="table.headings.actions" />
            </th>
          </tr>
        </thead>
        <tbody>
          {myProjects?.map((p) => (
            <tr key={p.title}>
              <td>{p.title}</td>
              <td>{p.shortDescription}</td>
              <td>{p.description}</td>
              <td>
                <ActionIcon onClick={() => deleteMyProject(p.id)}>
                  <IconTrash />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  );
};

export default ProjectsIndex;
