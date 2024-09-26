import { BackgroundGradient } from '@/components/BackgroundGradient'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { Container, Layout } from '@/components/StyledComponents'
import React, { PropsWithChildren } from 'react'

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
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

export default DefaultLayout
