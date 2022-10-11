import { css, Theme } from '@emotion/react';
import { Avatar, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

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
  email?: string;
};

export default function DefaultUserMenu({ email }: DefaultUserMenuProps) {
  return (
    <Box css={DefaultUserMenuStyles}>
      <UnstyledButton css={ButtonStyles}>
        <Group>
          <Avatar />
          <Box css={TextBoxStyles}>
            <Text>{email}</Text>
          </Box>
          <IconChevronRight size={22} />
        </Group>
      </UnstyledButton>
    </Box>
  );
}
