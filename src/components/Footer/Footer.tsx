import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import DegenMode from './DegenMode'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <Wrapper>
        <FirstRow>
          <span className="logo">Logos Operators</span>
          <span className="ift">
            Built by{' '}
            <a href="https://free.technology/" target="_blank">
              IFT
            </a>
          </span>
        </FirstRow>
        <div className="footer-nav">
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href="https://discord.gg/logosnetwork" target="_blank">
            Discord
          </a>
          <a href="https://logos.co/manifesto" target="_blank">
            Manifesto
          </a>
        </div>
      </Wrapper>
      <DegenMode />
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 200px auto auto;
  width: fit-content;

  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;

    margin-top: 200px;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 912px;
  height: 48px;
  padding: 16px;

  background: rgba(20, 20, 20, 0.81);
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  font-size: 12px;
  line-height: 16px;
  position: relative;

  .footer-nav {
    width: fit-content;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 32px;
  }

  .footer-nav a {
    color: inherit;
    text-decoration: none;
  }

  .ift a {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 1200px) {
    width: 80vw;
  }

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column-reverse;
    max-width: 100%;
    width: 100%;

    height: auto;

    .footer-nav {
      position: relative;
      width: 100%;
      left: unset;
      bottom: unset;
      transform: unset;
      gap: unset;
      display: flex;
      justify-content: space-between;
    }
  }
`

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 31px;
  }
`

export default Footer
