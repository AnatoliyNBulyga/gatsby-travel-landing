import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
export const FooterDesc = styled.div`
  padding: 0 2rem;
  
  h2 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }
  
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
export const FooterLinkTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`