import styled from "styled-components"

export const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

export const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  
  @media (max-width: 767px) {
    grid-template-column: 2fr;
  } 
  
  @media (max-width: 500px) {
    grid-template-column: 1fr;
  } 
`

export const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  
`