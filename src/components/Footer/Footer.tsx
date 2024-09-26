import styled from '@emotion/styled'
import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <span className="logo">Logos Operators</span>
      <nav className="footer-nav">
        <a href="#terms">Terms of Use</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#discord">Discord</a>
        <a href="#manifesto">Manifesto</a>
      </nav>
      <span className="copyright">
        All right reserved ©{new Date().getFullYear()}
      </span>
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

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`

export default Footer
