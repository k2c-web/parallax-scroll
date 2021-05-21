import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Root = styled.section`
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: 60px;
    color: white;
  }
`
const Banner = () => {
  const rootRef = useRef(null)

  const onScroll = () => {}
  useEffect(() => {
    if (rootRef.current) {
      const rootElement = rootRef.current
      let observer = new IntersectionObserver(
        (entries) => {
          console.log(entries)
          if (entries[0].isIntersecting) {
            window.addEventListener('scroll', onScroll)
          } else {
            window.removeEventListener('scroll', onScroll)
          }
        },
        { threshold: 1 },
      )
      observer.observe(rootElement)

      return () => {
        observer.unobserve(rootElement)
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [rootRef])
  return (
    <Root ref={rootRef}>
      <img src="http://placeimg.com/1680/1050" alt="background test" />
      <h1>This is a Banner</h1>
    </Root>
  )
}

export default Banner
