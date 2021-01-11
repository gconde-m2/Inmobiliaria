import React, { useState,useEffect } from 'react';
import  styles from './layout.module.css'
import Image from 'next/image'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
export default function Layout({ children }) {

  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
    return(
      
<Navbar className={styles.colornav} fixed='top'  collapseOnSelect expand="lg"  variant="dark"
style={{
  backgroundColor: scrollState === "top" ? "none" : "black",
  color: scrollState === "top" ? "white" : "blue",
  position: "fixed"
}}
>
  <Navbar.Brand href="/"> 
  <Image
        src="/logo.png"
        alt="Picture of the author"
        width={150}
        height={40}
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      
      <Nav.Link href="#about">Sobre nosotros</Nav.Link>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
      
    </Nav>
    <Nav className="mr-auto">
     
     </Nav>
     <Nav>

       <Nav.Link href="#deets">+34618282577</Nav.Link>

     </Nav>
  </Navbar.Collapse>
</Navbar>

    )
  }