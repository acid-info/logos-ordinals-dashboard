import styled from '@emotion/styled'
import Collapse from './Collapse'

interface Props {
  referralCode: string
}

const CopyCode = ({ referralCode }: Props) => {
  // const walletAddress = useAtomValue(userInfoAtom)?.address

  // attach : ?referral_code=${referralCode}&referral_address=${walletAddress}

  const copyToClipboard = () => {
    const currentUrl = window.location.href
    const referral = `${currentUrl}?referral_code=${referralCode}`

    navigator.clipboard.writeText(referral || '')

    alert('Copied to clipboard!')
  }

  return (
    <Collapse header="Refer Operators +100 XP">
      <Wrapper>
        <div className="referral-code">
          {referralCode?.length
            ? `https://dashboard.logos.co/dashboard?referral_code=${referralCode}`
            : 'Connect to wallet to get referral code'}
        </div>
        <CopyButton onClick={copyToClipboard}>
          <img src="/assets/file-copy-purple.svg" alt="file copy" />
        </CopyButton>
      </Wrapper>
    </Collapse>
  )
}

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #f29ae9;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 28px;

  .referral-code {
    // ellipsis
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
`

export default CopyCode
