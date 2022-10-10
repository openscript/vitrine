import { css } from '@emotion/react';
import { FormattedMessage } from 'react-intl';

const brandStyles = css`
  margin: 0;
  line-height: 1;
  font-size: 1.7rem;
  height: 0.65em;
`;

export default function Brand() {
  return (
    <h1 css={brandStyles}>
      <FormattedMessage id="brand" />
    </h1>
  );
}
