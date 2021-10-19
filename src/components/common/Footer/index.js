import React from "react"
import {
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterContainer,
  FooterDesc
} from './FooterElements'

const Index = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h2>Explorix</h2>
          <p>We strive to create the best experiences fro our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Index