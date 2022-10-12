import { css, Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        header {
          a {
            text-decoration: none;
            color: ${theme.colors.dark[9]};
          }
        }

        main {
          background-color: ${theme.colors.gray[0]};
        }
      `}
    />
  );
}
