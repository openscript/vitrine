import { css } from '@emotion/react';
import { ActionIcon, Title } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';

const HeadlineStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
`;

const TitleStyles = css`
  display: flex;
`;

type HeadlineProps = {
  back?: boolean;
  title: string;
  actions?: JSX.Element[];
};

export default function Headline({ back, title, actions }: HeadlineProps) {
  const router = useRouter();

  return (
    <div css={HeadlineStyles}>
      <div css={TitleStyles}>
        {back && (
          <ActionIcon onClick={() => router.back()} mr="xs">
            <IconChevronLeft />
          </ActionIcon>
        )}
        <Title order={2}>{title}</Title>
      </div>
      <div>{actions}</div>
    </div>
  );
}
