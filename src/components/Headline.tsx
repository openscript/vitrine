import { css } from '@emotion/react';
import { Title } from '@mantine/core';

const HeadlineStyles = css`
  display: flex;
  justify-content: space-between;
`;

type HeadlineProps = {
  title: string;
  actions: JSX.Element[];
};

export default function Headline({ title, actions }: HeadlineProps) {
  return (
    <div css={HeadlineStyles}>
      <Title order={2}>{title}</Title>
      <div>{actions}</div>
    </div>
  );
}
