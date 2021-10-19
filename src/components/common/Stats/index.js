import React from "react"
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


const Stats = () => {

  return (
    <StatsContainer className='g-animate'>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
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