import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="bg-danger bg-gradient px-0 py-5 border-0 border-top border-5">
            <Container>
                <Row className="text-white">
                    <Col xs={12} sm={12} md={6} lg={4} className="d-flex align-items-center">
                        <div>
                            <h2 className="lh-lg"><i className="fas fa-dungeon"> Resort Palatial</i></h2>
                            <h6>Cpoyright <i className="far fa-copyright"></i> Protected.</h6>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="text-start">
                        <h5>Company</h5>
                        <Link to="/" className="text-decoration-none text-white"><p>About Palatial</p></Link>
                        <Link to="/" className="text-decoration-none text-white"><p>Palatial Global Brands</p></Link>
                        <Link to="/" className="text-decoration-none text-white"><p>Explore Hotels</p></Link>
                        <Link to="/" className="text-decoration-none text-white"><p>E-Mail Management</p></Link>
                        <Link to="/" className="text-decoration-none text-white"><p>Site Map</p></Link>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className="text-start">
                        <h5>Contact</h5>
                        <h6>Book Online or, Call: </h6>
                        <Link to="/" className="text-decoration-none text-white"><h6>8 994 3 Palatial (+8 665 114 32)</h6></Link>
                        <div className="d-flex mt-5">
                        <Link to="/" className="text-decoration-none text-white me-5"><h3><i className="fab fa-facebook-square"></i></h3></Link>
                        <Link to="/" className="text-decoration-none text-white me-5"><h3><i className="fab fa-twitter-square"></i></h3></Link>
                        <Link to="/" className="text-decoration-none text-white me-5"><h3><i className="fab fa-instagram-square"></i></h3></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;