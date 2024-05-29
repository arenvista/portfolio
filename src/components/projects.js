import Container from 'react-bootstrap/Container';
import { ProjectCard } from './projectCard';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projCses from '../assets/img/proj_cses.png';
import projLeet from '../assets/img/proj_leetcode.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import TrackVisibility from 'react-on-screen';

import Tab from 'react-bootstrap/Tab';

export const Projects = () => {

    const solutions = [
        {
            title: "CSES Problem Set Solutions",
            description: "Solution to the CSES Problem Set in Python and Rust.",
            imgUrl: projCses,
            linkUrl: "https://github.com/arenvista/cses",
        },

        {
            title: "LeetCode Solutions",
            description: "Solution to the LeetCode Problem Set in Python and Rust.",
            imgUrl: projLeet,
            linkUrl: "https://github.com/arenvista/leetcode",
        },
    ]

    const personal = [
        {
            title: "Dotfiles",
            description: "A set of bash scripts and configurations for managing my environment, with a focus on quick deployment and acess to development tools.",
            imgUrl: projImg1,
            linkUrl: "https://github.com/arenvista/dotfiles"

        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>A small tour of some of my work that highlights my skills and provides a resource for reflection. This compilation includes solutions for common problems, learning resources, and tools I've created (and/or) use to manage my environment. Some projects are still under development, so check back for updates!</p>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Problem Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Professional Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            {/* first tab pane */}
                                            <Tab.Pane eventKey="first">
                                                <Row className="justify-content-center align-items-center">
                                                    {
                                                        solutions.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            {/* second tab pane */}
                                            <Tab.Pane eventKey="second">
                                                <Row className="justify-content-center align-items-center">
                                                    {
                                                        personal.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            {/* third tab pane */}
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>

                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}
