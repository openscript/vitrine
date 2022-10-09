import { css } from '@emotion/react';
import { Button, Center, LoadingOverlay, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { IconLock, IconMail } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import AuthGuard from '../components/AuthGuard';
import Brand from '../components/Brand';
import EmptyLayout from '../components/EmptyLayout';
import { supabase } from '../utils/supabaseClient';
import { CustomNextPage } from './_app';

const RegisterStyles = css`
  height: 100%;
`;

const RegisterPaperStyles = css`
  min-width: 24rem;
`;

const RegisterFormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const Register: CustomNextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const intl = useIntl();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validate: {
      passwordConfirmation: (value, { password }) =>
        value !== password ? intl.formatMessage({ id: 'errors.passwords-do-not-match' }) : null,
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email: form.values.email, password: form.values.password });
    setLoading(false);
    if (error) {
      showNotification({ message: intl.formatMessage({ id: 'notifications.errors.sign-up-failed' }, { message: error.message }) });
    } else {
      router.push('/');
    }
  };

  return (
    <AuthGuard isUnauthenticatedGuard redirectPath="/">
      <Center css={RegisterStyles}>
        <Paper withBorder p="xs" shadow="sm" css={RegisterPaperStyles}>
          <LoadingOverlay visible={loading} />
          <Brand />
          <form onSubmit={form.onSubmit(handleSubmit)} css={RegisterFormStyles}>
            <TextInput
              type="email"
              required
              placeholder={intl.formatMessage({ id: 'form.email.placeholder' })}
              label={intl.formatMessage({ id: 'form.email.label' })}
              {...form.getInputProps('email')}
              icon={<IconMail size={20} stroke={1.5} />}
            />
            <PasswordInput
              required
              placeholder={intl.formatMessage({ id: 'form.password.placeholder' })}
              label={intl.formatMessage({ id: 'form.password.label' })}
              {...form.getInputProps('password')}
              minLength={8}
              icon={<IconLock size={20} stroke={1.5} />}
            />
            <PasswordInput
              required
              placeholder={intl.formatMessage({ id: 'form.password.placeholder' })}
              label={intl.formatMessage({ id: 'form.password-confirmation.label' })}
              {...form.getInputProps('passwordConfirmation')}
              icon={<IconLock size={20} stroke={1.5} />}
            />
            <Button type="submit">
              <FormattedMessage id="form.actions.register" />
            </Button>
          </form>
          <Center>
            <Text variant="link" size="sm">
              <Link href="/login">{intl.formatMessage({ id: 'page.login.title' })}</Link>
            </Text>
          </Center>
        </Paper>
      </Center>
    </AuthGuard>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
};

export default Register;
