import styled from "styled-components";

export const Max = styled.div<{cursor?:string}>`
  cursor: ${({ cursor }) => cursor};
`

export const AmountBoxWraper = styled.div<{error?:boolean}>`
  border: ${({ error }) => (error ? '2px solid #DC5151' : '1px solid #ffffff')};
`

export const Input = styled.input.attrs({
  type: 'number',
  autocomplete: 'off',
  autocorrect: 'off',
  spellcheck: 'false',
})`
  width: 100%;
  outline-style: none;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`