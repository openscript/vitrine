import { css } from '@emotion/react';
import { Button, Center, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Brand from '../components/Brand';
import EmptyLayout from '../components/EmptyLayout';
import { NextPageWithLayout } from './_app';

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
  margin-top: 1rem;
`;

const Register: NextPageWithLayout = () => {
  const intl = useIntl();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const handleSubmit = () => {
    alert(form.values);
  };

  return (
    <Center css={RegisterStyles}>
      <Paper withBorder p="xs" shadow="sm" css={RegisterPaperStyles}>
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
        <Text variant="link">
          <Link href="/login">{intl.formatMessage({ id: 'page.login.title' })}</Link>
        </Text>
      </Paper>
    </Center>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
};

export default Register;
