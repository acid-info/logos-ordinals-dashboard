import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkBreaks from 'remark-breaks'

interface Props {
  content: string
}

const RootPage = ({ content }: Props) => {
  return (
    <Container>
      <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkBreaks]}>
        {content}
      </Markdown>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 1rem;
  margin: 80px auto 160px auto;
  max-width: ${breakpoints.lg}px;
  white-space: pre-wrap;
  max-width: 800px;

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    color: white;
  }

  ul {
    margin-block: 0;
    padding-inline-start: 16px;
  }

  ol {
    margin-block: 0;
    padding-inline-start: 16px;
  }

  li {
    white-space: normal;
    line-height: 1.5;
    list-style-type: decimal !important;
  }
`

export { RootPage }
