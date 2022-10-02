import { css } from '@emotion/react'
import type { NextPage } from 'next'

const HomeStyles = css`
  background-color: red;
`

const Home: NextPage = () => {
  return (
    <div css={HomeStyles}>
      Hello
    </div>
  )
}

export default Home
