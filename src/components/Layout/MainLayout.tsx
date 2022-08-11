import React from "react"
import { Container } from "./Container"
import { Navbar } from "./Navbar"

export const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  ) 
}