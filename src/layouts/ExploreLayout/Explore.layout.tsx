import { BackgroundGradient } from '@/components/BackgroundGradient'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { Container, Layout } from '@/components/StyledComponents'
import React, { PropsWithChildren } from 'react'

interface ExploreLayoutProps {}

const ExploreLayout: React.FC<ExploreLayoutProps> = (
  props: PropsWithChildren,
) => {
  return (
    <Layout>
      <Container>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </Container>
      <BackgroundGradient />
    </Layout>
  )
}

export default ExploreLayout
