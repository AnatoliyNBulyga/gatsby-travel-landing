import React from "react"
import {menuData} from '../../../data/MenuData'
import { Button } from "../../utils/Button"
import {
  Nav,
  NavBtn,
  NavMenu,
  NavLink,
  Bars
} from './HeaderElements'

const Index = ({onToggle, isOpen}) => {
  return (
    <Nav>
      <NavLink to="/">EXPLORER</NavLink>
      <Bars onClick={onToggle}/>
      <NavMenu>
        {menuData.map(({id, title, link}) => <NavLink key={id} to={link} >{title}</NavLink>)}
      </NavMenu>
      <NavBtn>
        <Button
          primary="true"
          round="true"
          to="/trips"
        >Book a Flight</Button>
      </NavBtn>
    </Nav>
  )
}

export default Index
