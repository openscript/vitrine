import { css, Theme } from '@emotion/react';
import { Avatar, Box, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconChevronRight, IconLogout, IconUser } from '@tabler/icons';
import { FormattedMessage } from 'react-intl';
import { CONFIGURATION } from '../../../configuration';

const DefaultUserMenuStyles = (theme: Theme) => css`
  padding-top: ${theme.spacing.sm}px;
  border-top: 1px solid ${theme.colors.gray[2]};
`;

const ButtonStyles = (theme: Theme) => css`
  width: 100%;
  padding: ${theme.spacing.xs}px;
  border-radius: ${theme.radius.sm}px;

  &:hover {
    background-color: ${theme.colors.gray[0]};
  }
`;

const TextBoxStyles = css`
  flex-grow: 1;
`;

type DefaultUserMenuProps = {
  avatar?: string;
  email?: string;
  signOut: () => void;
};

export default function DefaultUserMenu({ avatar, email, signOut }: DefaultUserMenuProps) {
  return (
    <Menu position="right-end" width={300}>
      <Menu.Target>
        <Box css={DefaultUserMenuStyles}>
          <UnstyledButton css={ButtonStyles}>
            <Group>
              <Avatar src={avatar} />
              <Box css={TextBoxStyles}>
                <Text>{email}</Text>
              </Box>
              <IconChevronRight size={22} />
            </Group>
          </UnstyledButton>
        </Box>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconUser size={16} stroke={1.5} />} component={NextLink} href={CONFIGURATION.PATHS.PROFILE}>
          <FormattedMessage id="page.profile.title" />
        </Menu.Item>
        <Menu.Item icon={<IconLogout size={16} stroke={1.5} />} onClick={signOut}>
          <FormattedMessage id="form.actions.logout" />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
