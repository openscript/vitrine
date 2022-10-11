import { css } from '@emotion/react';
import { Button, LoadingOverlay, Paper, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import AuthGuard from '../components/guards/AuthGuard';
import { CONFIGURATION } from '../configuration';
import { useStore } from '../state/store';
import { supabase } from '../utils/supabaseClient';

const FormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Profile: NextPage = () => {
  const [loading, isLoading] = useState(true);
  const session = useStore((state) => state.session);
  const intl = useIntl();
  const form = useForm({
    initialValues: {
      forename: '',
      surname: '',
      username: '',
      biography: '',
    },
  });
  const setFormValues = form.setValues;

  useEffect(() => {
    const getCurrentProfile = async () => {
      const { data } = await supabase.from('profiles').select('forename, surname, username, biography').eq('id', session?.user.id).single();
      if (data) {
        setFormValues({
          forename: data.forename || '',
          surname: data.surname || '',
          username: data.username || '',
          biography: data.biography || '',
        });
      }
      isLoading(false);
    };
    getCurrentProfile();
  }, [session, setFormValues]);

  const handleSubmit = async () => {
    isLoading(true);

    const newProfile = { ...form.values, id: session?.user.id, updated_at: new Date().toISOString() };
    await supabase.from('profiles').upsert(newProfile);

    isLoading(false);
  };

  return (
    <AuthGuard redirectPath={CONFIGURATION.PATHS.LOGIN}>
      <Paper withBorder p="xs" shadow="sm">
        <LoadingOverlay visible={loading} />
        <Title order={2}>
          <FormattedMessage id="page.profile.title" />
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)} css={FormStyles}>
          <TextInput
            type="text"
            name="forename"
            label={intl.formatMessage({ id: 'form.forename.label' })}
            {...form.getInputProps('forename')}
          />
          <TextInput
            type="text"
            name="surname"
            label={intl.formatMessage({ id: 'form.surname.label' })}
            {...form.getInputProps('surname')}
          />
          <TextInput
            type="text"
            name="username"
            label={intl.formatMessage({ id: 'form.username.label' })}
            {...form.getInputProps('username')}
          />
          <Textarea
            name="biography"
            label={intl.formatMessage({ id: 'form.biography.label' })}
            autosize
            maxRows={10}
            {...form.getInputProps('biography')}
          />
          <Button type="submit">
            <FormattedMessage id="form.actions.save" />
          </Button>
        </form>
      </Paper>
    </AuthGuard>
  );
};

export default Profile;
