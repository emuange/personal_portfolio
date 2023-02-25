import { useEffect, useState } from "react";
import { Navbar, Container } from - "react-Bootstrap";

export const NavBar = () => 
{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //We need to detect user scrolling to modify the background as they do
    useEffect(() => 
    {
        const onScroll = () => 
        {
            if (window.scrollY > 50)
            {
                setScrolled(true);
            } else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll". onScroll);
    }, [])

    return 
    {
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="nabavar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpfateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills"className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                    <Nav.Link href="#projects"className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={} alt=""/></a>
                         <a href="#"><img src={} alt=""/></a>
                        <a href="#"><img src={} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    }
}