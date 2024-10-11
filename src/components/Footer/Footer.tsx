import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
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
        <a href="https://logos.co/terms" target="_blank">
          Terms of Use
        </a>
        <a href="https://logos.co/privacy-policy" target="_blank">
          Privacy Policy
        </a>
        <a href="https://discord.gg/logosnetwork" target="_blank">
          Discord
        </a>
        <a href="https://logos.co/manifesto" target="_blank">
          Manifesto
        </a>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  width: 100%;
  margin: 200px auto 0 auto;
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

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column-reverse;
    max-width: 100%;
    margin-top: 200px;
    margin-bottom: 16px;
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
