import React from 'react'
import styled from 'styled-components'

const HeaderSC = styled.header`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b84518;
  background: black;
  z-index: 2;
  font-size: 50px;
  text-transform: lowercase;
  font-variant: small-caps;
  letter-spacing: 0.2em;
`

const Header = () => {
  return <HeaderSC>Header</HeaderSC>
}

export default Header
