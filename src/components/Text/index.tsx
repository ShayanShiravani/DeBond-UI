import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Text } from 'rebass/styled-components'

interface TextType {
  color?: string,
  cursor?: string,
  position?: string,
  fontWeight?: string,
  fontSizeXS?: string,
  fontSizeXXS?: string
}

const TextWrapper = styled(Text)<TextType>`
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
  position: ${({ position }) => position};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 576px) {
    font-size: ${({ fontSizeXS }) => fontSizeXS};
  }
  @media screen and (max-width: 415px) {
    font-size: ${({ fontSizeXXS }) => fontSizeXXS};
  }
`

export const Type = {
  Primary(props: PropsWithChildren<TextType>) {
    return <TextWrapper color={'primary'} {...props} />
  },
  Secodery(props?: PropsWithChildren<TextType>) {
    return <TextWrapper color={'secodery'} {...props} />
  },
  Warning(props?: PropsWithChildren<TextType>) {
    return <TextWrapper color={'warning'} {...props} />
  },
  Success(props?: PropsWithChildren<TextType>) {
    return <TextWrapper color={'success'} {...props} />
  },
  XXXL(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={35} {...props} />
  },
  XXL(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={30} {...props} />
  },
  XL(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={25} {...props} />
  },
  LG(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={20} {...props} />
  },
  MD(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={15} {...props} />
  },
  SM(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={12} {...props} />
  },
  XS(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={10} {...props} />
  },
  XXS(props?: PropsWithChildren<TextType>) {
    return <TextWrapper fontSize={8} {...props} />
  },
}
