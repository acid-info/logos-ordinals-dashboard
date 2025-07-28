// import { DownloadSection } from '@/components/Multipass/DownloadSection'
import { MultipassHeader } from '@/components/Multipass/MultipassHeader'
import styled from '@emotion/styled'
import React from 'react'

const MultipassContainer: React.FC = () => {
  return (
    <Container>
      <div className="claim-container">
        <MultipassHeader />
        <section className="claim-content">
          <p className="claim-description">
            As a valued member of our decentralized digital society, we&apos;re
            excited to offer you the chance to secure your assets with a
            state-of-the-art hardware wallet, built on{' '}
            <a
              href="https://keycard.tech/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keycard
            </a>
            .
          </p>
          {/* <DownloadSection /> */}
        </section>
        <Image src="/assets/multipass.png" alt="Multipass device" />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;

  .claim-container {
    width: 609px;
    max-width: 100%;
  }

  .claim-content {
    display: flex;
    width: 506px;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    a {
      color: white;
      text-decoration: none;
    }
  }

  .claim-description {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.14px;
    margin-top: 32px;
    text-align: center;

    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
`

const Image = styled.img`
  aspect-ratio: 1.58;
  object-fit: contain;
  width: 100%;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  margin-top: 110px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 80px;
  }
`

export default MultipassContainer
