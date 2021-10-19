import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarBtnWrap,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElements';
import { Button } from "../../utils/Button"

const Sidebar = ({onToggle, isOpen}) => {

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={onToggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={onToggle}>
            Destination
          </SidebarLink>
          <SidebarLink to="services" onClick={onToggle}>
            Careers
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <Button
            primary="true"
            round="true"
            to="/trips"
          >Book a Flight</Button>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;