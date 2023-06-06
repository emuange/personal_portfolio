import { useState, UseEffect, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

/* Banner animation Code*/
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //indicates index of the word currently being displayed on screen
    const [isDeleting, setIsDeleting] = useState(false); //is the word being typed or deleted?
    const toRotate = [ "Web Developer", "Web Designer","Photographer" ]; //Words in rotation to be displayed and deleted
    const [text, setText] = useState('');  //indicates the portion of the word being displayed eg W, We, Web
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        }, delta)
    }
    
    )

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hello My name is Emmanuel.'}<span className="wrap">web developer</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
        
}