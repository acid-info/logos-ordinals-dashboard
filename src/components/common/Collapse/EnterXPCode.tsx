import styled from '@emotion/styled'
import React, { useState } from 'react'
import { api } from '../../../../common/api'
import Collapse from './Collapse'

const EnterXPCode: React.FC = () => {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState(null)
  const [isSuccess, setIsSuccess] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    api
      .post('/user/exit-code', { exit_code: code })
      .then((res) => {
        setMessage(res.data.message)
        setIsSuccess(true)
      })
      .catch((err) => {
        console.log(err)
        setMessage(err.response.data.message || 'Something went wrong')
        setIsSuccess(false)
      })
  }

  return (
    <Collapse header="Enter XP Code">
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="XP Code" />
          <button type="submit">
            <img src="/icons/chevron-right-dark-purple.svg" alt="submit" />
          </button>
        </Form>
        {message && <Message isSuccess={isSuccess}>{message}</Message>}
      </Wrapper>
    </Collapse>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`

const Form = styled.form`
  display: flex;
  width: 100%;

  button {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 13px;
    justify-content: center;
    align-items: center;
    border: none;
    background: #f29ae9;
    box-sizing: border-box;
    cursor: pointer;
  }
`

const Input = styled.input`
  color: #f29ae9;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.14px;
  height: 40px;
  padding: 10px 14px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #f29ae9;

  &::placeholder {
    color: #f29ae9;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`

const Message = styled.span<{ isSuccess: boolean }>`
  color: ${({ isSuccess }) => (isSuccess ? '#8FFFB6' : '#F26969')};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.12px;
  opacity: 0.6;
`

export default EnterXPCode
