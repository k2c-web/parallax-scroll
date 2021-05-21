import React from 'react'
import styled from 'styled-components'

const HeaderSC = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 2;
`

const Header = () => {
  return <HeaderSC>Header</HeaderSC>
}

export default Header
