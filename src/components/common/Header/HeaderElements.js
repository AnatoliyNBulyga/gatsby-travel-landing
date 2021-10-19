import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "@react-icons/all-files/fa/FaBars"


export const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
      color: #f26a2e;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  
  @media(max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media(max-width: 768px) {
     display: none;
  }
`