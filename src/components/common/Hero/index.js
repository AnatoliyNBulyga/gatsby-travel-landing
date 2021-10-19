import React from "react"
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

const Index = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems className='g-animate'>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
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