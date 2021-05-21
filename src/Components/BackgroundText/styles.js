import styled from 'styled-components'

export const Background = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  ${(props) =>
    props.parallax && 'position:sticky;top:0;height:100vh; z-index:-1'};
`
