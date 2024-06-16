import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import pf_icon from '../assets/pf_icon.png'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export const NavBar =()=>{
    const [ activeLink ,  setActiveLink]= useState('home');
    const [scrolled, setScrolled]= useState(false);


    useEffect(()=>{
const onScroll=()=>{
    if(window.scrollY > 50){
        setScrolled(true);
    }
    else{
        setScrolled(false);
    }
}
window.addEventListener("scroll",onScroll);
return ()=> window.removeEventListener("scroll",onScroll);
    },[])


const onUpdateActiveLink=(value)=>{
setActiveLink(value);
}

    return(
        <Navbar expand="lg" className= {scrolled ? "scrolled" : ""} >
        
      <Container>
        <Navbar.Brand href="#home">
        <img src={pf_icon} alt ="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >

            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('home')}  >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }  onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('project')} >Projects</Nav.Link>
            
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/shristi-priya/" className='icon-bg'><CiLinkedin /></a>
                {/* <a href="https://www.shristipriya1207@gmail.com"><MdOutlineAttachEmail /></a> */}
                <a href="https://github.com/shristipriya1207"><FaGithub /></a>
                </div>
                <button className='vvd'>
                    
                    <a href='#connect'>lets connect</a>
                </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}