import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-5">
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="contactTitle">Quick Connect</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" name="email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pl-5">
                            <h4 className="contactTitle">Discuss Now</h4>
                            <p className="footerAdd">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="footerAdd"><FontAwesomeIcon icon={faEnvelope} /> amirulhaque@yahoo.com</p>
                            <span className="footerAdd"><FontAwesomeIcon icon={faPhone} /> +880 1778 539887</span>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;