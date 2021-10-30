import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import googleLogo from '../../images/2993685_brand_brands_google_logo_logos_icon.png'

const SignIn = () => {

    const { signInWithGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redriect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redriect_uri)
            })
            .finally(() => setIsLoading(false));
    }


    return (
        <div>
            <Container className="py-5">
            <h1 className="text-danger py-5"><i className="fas fa-dungeon"> Resort Palatial</i></h1>
                <Row>
                    <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                        <div className="bg-danger bg-gradient border border-3 rounded-pill p-5 text-white">
                            <h3 className="fs-3 fw-bold mt-5 mb-4">Sign In</h3>
                            <Button variant="light" onClick={handleGoogleLogIn} className="border border-3 rounded-pill mb-5">
                                <Container>
                                    <Row>
                                        <Col xs={4} sm={4} md={4} lg={2}>
                                            <img src={googleLogo} className="w-100" alt="" />
                                        </Col>
                                        <Col xs={8} sm={8} md={8} lg={10}>
                                            <h6 className="fs-6 pt-1 text-center">Continue with Google</h6>
                                        </Col>
                                    </Row>
                                </Container>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;