import React from 'react'
import logo from './images/logo.svg'
import './styleHeader.css'

export default function LandingHeader(){
  // Declaring element references
  const menuBtn = React.useRef(null)
  const navLinks = React.useRef(null)
  const menu = React.useRef(null)
  const signBtn = React.useRef(null)
  const loginLink = React.useRef(null)
  let menuToggle = 0

  // Expanding menu in mobile
  function expandMenu(){
    // When clicked once
    menuToggle++
    menu.current.style.visibility = 'visible'
    menu.current.style.opacity = '1'
    menu.current.style.height = '420px'
    menuBtn.current.style.fill = 'hsl(180, 66%, 49%)'
    navLinks.current.style.opacity = '1'
    signBtn.current.style.opacity = '1'
    loginLink.current.style.opacity = '1'
    // When clicked twice
    if(menuToggle===2){
      menuToggle=0
      menu.current.style.height = '0'
      menuBtn.current.style.fill = '#000'
      navLinks.current.style.opacity = '0'
      loginLink.current.style.opacity = '0'
      signBtn.current.style.opacity = '0'
    }
  }
  // Header elements
  return <header>
    <img id='logo' src={logo} alt='logo' />
    <div className='menu' ref={menu}>
      <nav ref={navLinks}>
        <ul>
          <li><a href='/'>Features</a></li>
          <li><a href='/'>Pricing</a></li>
          <li><a href='/'>Resources</a></li>
        </ul>
      </nav>
      <hr/>
      <a ref={loginLink} id='login' href='target'>Login</a>
      <button ref={signBtn} id='signLink'>Sign Up</button>
    </div>
    <svg ref={menuBtn} onClick={expandMenu} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
  </header>
}