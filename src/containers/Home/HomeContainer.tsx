import { Onboarding } from '@/components/Home/Onboarding'
import styled from '@emotion/styled'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomeContainer: React.FC<HomePageProps> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Onboarding />
    </Container>
  )
}

const Container = styled.div``
