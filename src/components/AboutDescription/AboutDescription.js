import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="mt-5">
                            <h2 className="aboutPageTitle">Who I AM</h2>
                            <hr/>
                            <p className="aboutPageDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                        </Col>
                        <Col lg={12} md={12} sm={12} className="mt-5">
                            <h2 className="aboutPageTitle">My Mission</h2>
                            <hr/>
                            <p className="aboutPageDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>

                        </Col>
                        <Col lg={12} md={12} sm={12} className="mt-5">
                            <h2 className="aboutPageTitle">My Vision</h2>
                            <hr/>
                            <p className="aboutPageDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;