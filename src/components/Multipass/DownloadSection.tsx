import styled from '@emotion/styled'
import React from 'react'

export const DownloadSection: React.FC = () => {
  return (
    <StyledDownloadSection>
      <p className="download-instruction">
        To claim your Multipass, download the Operator Wallet.
      </p>
      <div className="download-buttons">
        <img
          className="app-store-button"
          loading="lazy"
          src="/assets/app-store.svg"
          alt="Download on App Store"
        />
        <img
          className="play-store-button"
          loading="lazy"
          src="/assets/play-store.svg"
          alt="Get it on Google Play"
        />
      </div>
    </StyledDownloadSection>
  )
}

const StyledDownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }

  .download-instruction {
    color: #fff;
    text-align: center;
    letter-spacing: 0.14px;
    font-size: 14px;
    line-height: 1;
  }

  .download-buttons {
    display: flex;
    margin-top: 24px;
    align-items: center;
    gap: 8px;
  }

  .app-store-button {
    aspect-ratio: 3.31;
    object-fit: contain;
    width: 182px;
  }

  .play-store-button {
    aspect-ratio: 3.34;
    object-fit: contain;
    width: 184px;
  }
`
