import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseOne from '../../assets/images/coursesone.jpg';
import courseTwo from '../../assets/images/eLearning3.jpg';
import courseThree from '../../assets/images/TE+internship.png';
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle">OUR COURSES</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="mt-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseOne} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <Link className="coursesDetails" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mt-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseTwo} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <Link className="coursesDetails" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="mt-5">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseTwo} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <Link className="coursesDetails" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mt-5">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseThree} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <Link className="coursesDetails" to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;