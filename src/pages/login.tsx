import { css } from '@emotion/react';
import { Button, Center, LoadingOverlay, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Brand from '../components/Brand';
import AuthGuard from '../components/guards/AuthGuard';
import EmptyLayout from '../components/layouts/EmptyLayout';
import { CONFIGURATION } from '../configuration';
import { supabase } from '../utils/supabaseClient';
import { CustomNextPage } from './_app';

const LoginStyles = css`
  height: 100%;
`;

const LoginPaperStyles = css`
  min-width: 24rem;
`;

const LoginFormStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const Login: CustomNextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const intl = useIntl();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: form.values.email, password: form.values.password });
    setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      router.push(CONFIGURATION.PATHS.HOME);
    }
  };

  return (
    <AuthGuard isUnauthenticatedGuard redirectPath={CONFIGURATION.PATHS.HOME}>
      <Center css={LoginStyles}>
        <Paper withBorder p="xs" shadow="sm" css={LoginPaperStyles}>
          <LoadingOverlay visible={loading} />
          <Brand />
          <form onSubmit={form.onSubmit(handleSubmit)} css={LoginFormStyles}>
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
              icon={<IconLock size={20} stroke={1.5} />}
            />
            <Button type="submit">
              <FormattedMessage id="form.actions.login" />
            </Button>
          </form>
          <Center>
            <Text variant="link" size="sm">
              <Link href="/register">{intl.formatMessage({ id: 'page.register.title' })}</Link>
            </Text>
          </Center>
        </Paper>
      </Center>
    </AuthGuard>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
};

export default Login;
