import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProjectImg from '../../assets/images/ux-788002_1280.jpg';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="img-details" src={ProjectImg} alt="image"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2>Food Bazzar Details</h2>
                            <p>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
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
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;