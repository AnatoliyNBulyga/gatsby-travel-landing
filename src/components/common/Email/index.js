import React from "react"
import { Button } from "../../utils/Button"
import {
  EmailContainer,
  EmailContent,
  FormWrap
} from "./EmailElements"

const Index = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h2>Get Access to Exclusive Offers</h2>
        <p>Sign up for your newsletter below to get $100 off your first trip!</p>
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