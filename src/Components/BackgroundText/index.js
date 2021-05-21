import React from 'react'
import { Background } from './styles'

const BackgroundText = ({ src, parallax }) => {
  return (
    <Background
      parallax={parallax}
      alt="test parallax scroll background"
      src={src || 'http://placeimg.com/1680/1050'}
    />
  )
}

export default BackgroundText
