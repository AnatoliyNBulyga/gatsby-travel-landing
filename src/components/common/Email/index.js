import React, {useRef, useEffect} from "react"
import { Button } from "../../utils/Button"
import {
  EmailContainer,
  EmailContent,
  FormWrap
} from "./EmailElements"
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Index = () => {
  const hRef = useRef()
  const textRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap
        .from(hRef.current, {
          duration: 1,
          opacity: 0,
          delay: 0.5,
          y: -100,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: hRef.current,
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
          }
        })

  }, []);

  return (
    <EmailContainer>
      <EmailContent>
        <h2 ref={hRef}>Get Access to Exclusive Offers</h2>
        <p ref={textRef}>Sign up for your newsletter below to get $100 off your first trip!</p>
        <form>
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email"/>
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 48px;
                
                @media (max-width: 767px) {
                  width: 100%;
                  min-width: 350px;
                }
                
                @media (max-width: 400px) {
                  min-width: 250px;
                }
              `}
            >Sign Up</Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Index