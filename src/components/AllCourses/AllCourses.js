import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseOne from "../../assets/images/coursesone.jpg";
import courseTwo from "../../assets/images/eLearning3.jpg";
import courseThree from "../../assets/images/TE+internship.png";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="mt-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseOne} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <a className="coursesDetails" href="#">Details</a>
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
                                    <a className="coursesDetails" href="#">Details</a>
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
                                    <a className="coursesDetails" href="#">Details</a>
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
                                    <a className="coursesDetails" href="#">Details</a>
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
                                    <a className="coursesDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mt-5">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="coursesImg" src={courseOne} alt="course"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify coursesTitle">Web Development</h4>
                                    <p className="text-justify coursesDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                                    <a className="coursesDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;