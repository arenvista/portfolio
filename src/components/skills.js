import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter_git from "../assets/img/meter_git.png";
import meter_docker from "../assets/img/meter_docker.png";
import meter_arch from "../assets/img/meter_arch.png";
import meter_react from "../assets/img/meter_react.png";
import meter_linux from "../assets/img/meter_linux.png";
import meter_sqlite from "../assets/img/meter_sqlite.png";
import meter_aws from "../assets/img/meter_aws.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> 
                            <p>
                              Explore the key technologies and tools in my portfolio below. They have been critical in building and 
                              managing my projects, including this portfolio. These skills showcase my versatility across software 
                              development, encompassing front-end, back-end, deployment, and hosting. For details on my scientific 
                              computing and data analysis expertise, contact me for a deeper dive into problem-solving with science.
                            </p>
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <img src={meter_git} alt="Image" />
                                    <h5>Github / Gitlabs</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_linux} alt="Image" />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_react} alt="Image" />
                                    <h5>React/JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_sqlite} alt="Image" />
                                    <h5>Sqlite3</h5>
                                </div>
                                <div className="item">
                                    <img src={meter_aws} alt="Image" />
                                    <h5>AWS EC2</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background Image" />
        </section>
    )}
