import React from "react"
import styled from "styled-components"
import { Container } from "./Container"
import Menu from "./Menu"
import { Navbar } from "./Navbar"

const Content = styled.div``

export const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Container>
      <Navbar>
        <Menu />
      </Navbar>
      <Content>{children}</Content>
    </Container>
  ) 
}