import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

export const Projects = () => 
{
    
    const projects = 
    [
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Busines Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    return 
    (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => 
                                    {
                                        return (
                                            <p>{projects.title}</p>
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}