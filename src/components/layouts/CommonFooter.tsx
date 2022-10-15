import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { FormattedMessage } from 'react-intl';

const CommonFooterStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  font-size: 0.8rem;
`;

const FooterStyles = css`
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 1rem;
  }
`;

type CommonFooterProps = PropsWithChildren<{}>;

export default function CommonFooter({ children }: CommonFooterProps) {
  return (
    <div css={CommonFooterStyles}>
      {children}
      <footer css={FooterStyles}>
        <ul>
          <li>
            <a href="https://openscript.ch">
              <FormattedMessage id="footer.author" />
            </a>
          </li>
          <li>
            <a href="https://github.com/openscript-ch/vitrine">
              <FormattedMessage id="footer.code" />
            </a>
          </li>
          <li>
            <a href="https://github.com/openscript-ch/vitrine/LICENSE">
              <FormattedMessage id="footer.license" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
