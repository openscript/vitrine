import { css } from '@emotion/react';
import { Title } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

const brandStyles = css`
  margin: 0;
  line-height: 1;
  font-size: 2rem;
  height: 0.7em;
`;

export default function Brand() {
  return (
    <Title order={1} css={brandStyles}>
      <FormattedMessage id="brand" />
    </Title>
  );
}
