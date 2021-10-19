import React, {useState, useEffect} from "react"
import Header from "../common/Header"
import { GlobalStyle } from "../../styles/GlobalStyles"
import Sidebar from "../common/Sidebar"
import {gsap} from 'gsap'

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(prev => !prev)
  useEffect(() => {
    gsap.from('.g-animate', {
      duration: 1, opacity: 0, delay: 0.5, y: -100
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Sidebar onToggle={onToggle} isOpen={isOpen}/>
      <Header onToggle={onToggle}/>
      <main>{children}</main>
    </>
  )
}

export default Layout
