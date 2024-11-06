import styled from '@emotion/styled'
import React from 'react'

export const MultipassHeader: React.FC = () => {
  return (
    <Container>
      <div className="row">
        <div className="xp-badge">Coming Soon</div>
        <div className="xp-badge">+100 XP</div>
      </div>
      <h1 className="header-title">Multipass</h1>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .row {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .header-title {
    color: #fff;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.4px;
  }

  .xp-badge {
    border-radius: 99px;
    background-color: rgba(50, 4, 48, 1);
    margin-top: 12px;
    padding: 4px 12px;
    font-size: 14px;
    color: #f29ae9;
    letter-spacing: 0.14px;
    line-height: 1;
  }
`
