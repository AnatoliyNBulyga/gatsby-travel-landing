import React, {useRef, useEffect} from "react"
import {StatsData} from '../../../data/StatsData'
import {
  StatsBox,
  StatsContainer,
  Wrapper,
  Icon,
  Heading,
  Title,
  Description
} from './StatsElements'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Stats = () => {

  const imgsRef = useRef()

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap
      .from(imgsRef.current, {
          duration: 1,
          opacity: 0,
          delay: 0.9,
          y: 100,
          ease: 'ease-in-out',
          scrollTrigger: {
              trigger: imgsRef.current
          }
      })
  }, [])

  return (
    <StatsContainer className='g-animate'>
      <Heading>Why Choose Us?</Heading>
      <Wrapper ref={imgsRef}>
        {
          StatsData.map((item, index) =>
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        }
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats