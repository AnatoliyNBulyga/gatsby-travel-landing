import React, {useEffect} from "react"
import {useStaticQuery, graphql} from 'gatsby'
import {Button} from '../../utils/Button'
import {ImLocation} from '@react-icons/all-files/im/ImLocation'
import {gsap} from 'gsap'
import {
  TextWrap,
  DestinationsCard,
  DestinationsContainer,
  DestinationsHeading,
  DestinationsImg,
  DestinationsInfo,
  DestinationsTitle,
  DestinationsWrapper
} from './DestinationsElements'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Destinations = ({heading}) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".animate" , {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.animate',
        // toggleActions: 'restart',
      }
    } )

  }, [])

  const data = useStaticQuery(graphql`
     query TripsQuery {
        allTripsJson {
           edges {
              node {
                alt
                button
                name
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
           }
        }
     }
  `)
  const getTrips = data => {
    const tripsArray = []
    data.allTripsJson.edges.forEach( (item, index) => {
      tripsArray.push(
        <DestinationsCard key={index} className="animate">
          <DestinationsImg
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <DestinationsInfo>
            <TextWrap>
              <ImLocation />
              <DestinationsTitle>{item.node.name}</DestinationsTitle>
            </TextWrap>
            <Button
              to="/trips"
              primary={true}
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >{item.node.button}</Button>
          </DestinationsInfo>
        </DestinationsCard>
      )
    })
    return tripsArray
  }
  return (
    <DestinationsContainer className="animate-container">
      <DestinationsHeading>{heading}</DestinationsHeading>
      <DestinationsWrapper>{getTrips(data)}</DestinationsWrapper>
    </DestinationsContainer>
  )
}

export default Destinations
