import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/book.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/gitlab-logo-700.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        {/* <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', marginTop: '30px' }} /> */}
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <br/>
                            <a href="https://www.linkedin.com/in/aren-vista-079199203/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/arenvista"><img src={navIcon2} alt="" /></a>
                            <a href="https://gitlab.com/arenvista"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Caffiene is always welcome.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
