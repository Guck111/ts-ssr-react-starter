import styled from "@emotion/styled"
import { FC } from "react"

const HEADER_HEIGHT = 88

export const Layout: FC = ({ children }) => {
  return (
    <Body>
      <Header></Header>
      {children}
    </Body>
  )
}

const Body = styled.div`
  height: 100%;
`

const Header = styled.div`
  height: ${HEADER_HEIGHT}px;
`
