import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        main {
          background-color: ${theme.colors.gray[0]};
        }
      `}
    />
  );
}
