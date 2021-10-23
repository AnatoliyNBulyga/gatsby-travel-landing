import React, {useEffect, useRef} from "react"
import Video from '../../../assets/videos/video.mp4'
import {Button} from '../../utils/Button'
import {
  HeroP,
  HeroH1,
  HeroContent,
  HeroContainer,
  HeroBg,
  HeroItems,
  VideoBg
} from './HeroElements'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Index = () => {

  const h1Ref = useRef()
  const textRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap
    .from(h1Ref.current, {
      duration: 1,
      opacity: 0,
      delay: 0.5,
      y: -100,
      ease: 'ease-in-out',
      scrollTrigger: {
        trigger: h1Ref.current,
        // toggleActions: 'restart',
      }
    })

    gsap
    .from(textRef.current, {
      duration: 1,
      opacity: 0,
      delay: 0.9,
      y: -100,
      ease: 'ease-in-out',
      scrollTrigger: {
        trigger: textRef.current,
        // toggleActions: 'restart',
      }
    })

  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1 ref={h1Ref}>Unreal Destinations</HeroH1>
          <HeroP ref={textRef}>Out of this world</HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/trips"
          >Travel Now</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Index