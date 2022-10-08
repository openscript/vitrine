import { css } from '@emotion/react';
import { Button, Center, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons';
import { ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import EmptyLayout from '../components/EmptyLayout';
import { NextPageWithLayout } from './_app';

const LoginStyles = css`
  height: 100%;
`;

const LoginPaperStyles = css`
  min-width: 24rem;
`;

const Login: NextPageWithLayout = () => {
  const intl = useIntl();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = () => { };

  return (
    <Center css={LoginStyles}>
      <Paper withBorder p="xs" shadow="sm" css={LoginPaperStyles}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
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
      </Paper>
    </Center>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>;
};

export default Login;
