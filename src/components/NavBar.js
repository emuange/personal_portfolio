import { useEffect, useState } from "react";
import {Navbar, Container} from - "react-Bootstrap";

export const NavBar = () => 
{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => 
    {
        const onScroll = () => 
        {
            if (window.scrollY > 50)
            {
                seScrolled(true);
            } else
            {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
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