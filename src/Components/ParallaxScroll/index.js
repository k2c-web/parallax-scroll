import React from 'react'
import BackgroundText from '../BackgroundText'
import coverSrc from './../../Assets/cover.jpeg'
import { Root, ParallaxContent, Slide } from './styles'

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0,
)
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0,
)

/*onwheel = (el) => {
  const rect = el.getBoundingClientRect()
  const { height, top, bottom } = rect
  console.log('height => ', height)
  console.log('top => ', top)
  console.log('bottom => ', bottom)
}*/

const ParallaxScroll = () => {
  return (
    <Root>
      <BackgroundText parallax src={coverSrc} />
      <ParallaxContent>
        <Slide>
          <h1>Parallax Scroll</h1>
        </Slide>
        <Slide>
          <h2>Section 1</h2>
        </Slide>
        <Slide>
          <h2>Section 2</h2>
        </Slide>
      </ParallaxContent>
    </Root>
  )
}

export default ParallaxScroll
