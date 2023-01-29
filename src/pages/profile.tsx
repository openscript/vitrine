import { css } from '@emotion/react';
import { Button, FileButton, LoadingOverlay, Paper, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { shallow } from 'zustand/shallow';
import AuthGuard from '../components/guards/AuthGuard';
import Headline from '../components/Headline';
import { CONFIGURATION } from '../configuration';
import { useStore } from '../state/store';

const FormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Profile: NextPage = () => {
  const [updateAvatar, isLoading, profile, updateProfile] = useStore(
    (state) => [state.updateAvatar, state.isLoading, state.profile, state.updateProfile],
    shallow
  );
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
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
    if (newAvatar) {
      updateAvatar(newAvatar);
    }
  }, [newAvatar, updateAvatar]);

  useEffect(() => {
    if (profile) {
      setFormValues(profile);
    }
  }, [profile, setFormValues]);

  const handleSubmit = async () => {
    updateProfile({ ...form.values });
  };

  const actions = [
    <FileButton key="upload-new-avatar" onChange={setNewAvatar} accept="image/*">
      {(props) => (
        <Button {...props} variant="light">
          <FormattedMessage id="form.actions.upload-new-avatar" />
        </Button>
      )}
    </FileButton>,
  ];

  return (
    <AuthGuard redirectPath={CONFIGURATION.PATHS.LOGIN}>
      <Paper withBorder p="xs">
        <LoadingOverlay visible={isLoading} />
        <Headline title={intl.formatMessage({ id: 'page.profile.title' })} actions={actions} />
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
