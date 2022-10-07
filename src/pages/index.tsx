import { css } from '@emotion/react'
import { Button } from '@mantine/core'
import type { NextPage } from 'next'

const HomeStyles = css`
`

const Home: NextPage = () => {
  return (
    <div css={HomeStyles}>
      <Button>Mantine Button</Button>
    </div>
  )
}

export default Home
