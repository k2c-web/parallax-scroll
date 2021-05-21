import React from 'react'
import styled from 'styled-components'

const HeaderSC = styled.header`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: rgba(184, 69, 24);
  z-index: 2;
  font-size: 50px;
  text-transform: lowercase;
  font-variant: small-caps;
  letter-spacing: 0.25em;
`

const Header = () => {
  return <HeaderSC>Header</HeaderSC>
}

export default Header
