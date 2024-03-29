import { css } from '@emotion/react';
import { Button, LoadingOverlay, Paper, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NextPage } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import Headline from '../../components/Headline';
import { useStore } from '../../state/store';

const FormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PublishProject: NextPage = () => {
  const intl = useIntl();
  const form = useForm({ initialValues: { title: '', shortDescription: '', description: '' } });
  const [updateMyProject, isLoading] = useStore((state) => [state.updateMyProject, state.isLoading]);

  const handleSubmit = () => {
    updateMyProject(form.values);
  };

  return (
    <Paper withBorder p="xs">
      <LoadingOverlay visible={isLoading} />
      <Headline back title={intl.formatMessage({ id: 'page.my-projects.publish.title' })} />
      <form onSubmit={form.onSubmit(handleSubmit)} css={FormStyles}>
        <TextInput label={intl.formatMessage({ id: 'form.title.label' })} {...form.getInputProps('title')} required />
        <TextInput
          label={intl.formatMessage({ id: 'form.short-description.label' })}
          {...form.getInputProps('shortDescription')}
          required
        />
        <Textarea label={intl.formatMessage({ id: 'form.description.label' })} {...form.getInputProps('description')} />

        <Button type="submit">
          <FormattedMessage id="form.actions.publish" />
        </Button>
      </form>
    </Paper>
  );
};

export default PublishProject;
