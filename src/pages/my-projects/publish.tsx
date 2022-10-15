import { Button, Paper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NextPage } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import Headline from '../../components/Headline';

const PublishProject: NextPage = () => {
  const intl = useIntl();
  const form = useForm({ initialValues: { title: '' } });

  const handleSubmit = () => {
    alert('jo');
  };

  return (
    <Paper withBorder p="xs">
      <Headline back title={intl.formatMessage({ id: 'page.my-projects.publish.title' })} />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label={intl.formatMessage({ id: 'form.title.label' })} {...form.getInputProps('title')} />

        <Button type="submit">
          <FormattedMessage id="form.actions.publish" />
        </Button>
      </form>
    </Paper>
  );
};

export default PublishProject;
