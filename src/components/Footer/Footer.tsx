import styled from '@emotion/styled'
import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  margin-top: 200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  position: relative;

  .footer-nav {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
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
