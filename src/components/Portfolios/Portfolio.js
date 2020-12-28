import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import postOne from "../../assets/images/foodbazz.png";
import postTwo from "../../assets/images/foolbazz.png";
import postThree from "../../assets/images/travelapp.png";

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postOne} />
                                <Card.Body>
                                    <Card.Title>Food Bazzar</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postTwo} />
                                <Card.Body>
                                    <Card.Title>Foll Bazzar</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postThree} />
                                <Card.Body>
                                    <Card.Title>Travel App</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postThree} />
                                <Card.Body>
                                    <Card.Title>Travel App</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postOne} />
                                <Card.Body>
                                    <Card.Title>Travel App</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-3">
                            <Card className="postCardBox" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={postThree} />
                                <Card.Body>
                                    <Card.Title>Travel App</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Portfolio;