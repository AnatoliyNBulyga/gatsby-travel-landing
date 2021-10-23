import React, {useState} from "react"
import Header from "../common/Header"
import { GlobalStyle } from "../../styles/GlobalStyles"
import Sidebar from "../common/Sidebar"

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(prev => !prev)

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
