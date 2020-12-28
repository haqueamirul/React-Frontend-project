import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixPage p-0">
                    <div className="topFixPageOverly">
                        <Container className="topPageDetails">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3>Lorem ipsum dolor sit amet, widelly</h3>
                                    <p>Total Lecture= 30</p>
                                    <p>Total Students= 30</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <div className="courseDetails">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h2>Food Bazzar Details</h2>
                                <ul>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Admin Can Add, Edit, Delete Product Dynamically</li>
                                    <li>Dynamic shipping point facilities</li>
                                    <li>Admin can send special offer for special user</li>
                                    <li>App force update system form server</li>
                                    <li>App can receive push notification anytime also after the app is closed.</li>
                                    <li>Admin can send free message in app inbox</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Admin can push notification to specific user</li>
                                    <li>Unlimited Dynamic Product Category</li>
                                    <li>Dynamic Product Slider</li>
                                </ul>
                                <Button variant="primary">Buy Now</Button>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Player>
                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default CourseDetails;