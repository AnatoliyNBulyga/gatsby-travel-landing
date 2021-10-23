import React, {useEffect, useRef} from "react"
import {IoMdCheckmarkCircleOutline} from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline"
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb"
import {useStaticQuery, graphql} from 'gatsby'
import {
  TopLine,
  Testimonial,
  TestimonialsContainer,
  ColumnOne,
  ColumnTwo,
  ContentWrapper,
  Description,
  Images
} from './TestimonialsElements'
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Index = () => {

  const imgsRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap
        .from(imgsRef.current, {
          duration: 1,
          opacity: 0,
          delay: 0.9,
          x: 100,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: imgsRef.current
          }
        })
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: 
        {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["testimonial-1", "testimonial-2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
  `)
  return (
    <TestimonialsContainer>
      <TopLine>
        Testimonials
      </TopLine>
      <Description>
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline css={`
              color: #3fffa8; 
              font-size: 2rem; 
              margin-bottom: 1rem
            `} />
              <h3>Sean Michaels</h3>
              <p>
                "The greatest expreience of my life! It was so match fun exploring
                the mountains and they made it super easy to book my trip and
                accommodation"
              </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css={`
              color: #f9b19b; 
              font-size: 2rem; 
              margin-bottom: 1rem
            `} />
            <h3>Sarah Kin</h3>
            <p>
              "The was so easy to set up my trip! They answered all my questions
              right away and gave me the best price out of all the companies I
              researched"
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo ref={imgsRef}>
          {
            data.allFile.edges.map((item, index) =>
              <Images 
                key={index}
                fluid={item.node.childImageSharp.fluid}
              />
            )
          }
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Index
