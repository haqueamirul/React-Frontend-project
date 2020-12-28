import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicsIcon from '../../assets/images/graphic-design.png';
import mobileIcon from '../../assets/images/mobile-app.png';
import webLogo from '../../assets/images/web-coding.png';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle">Our Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceCardImage" src={webLogo} alt="webIcon"/>
                                <h2 className="serviceCardTitle">Web Development</h2>
                                <p className="serviceCardPare">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda at aut beatae cumque cupiditate </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceCardImage" src={mobileIcon} alt="mobileIcon"/>
                                <h2 className="serviceCardTitle">Mobile Development</h2>
                                <p className="serviceCardPare">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda at aut beatae cumque cupiditate </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceCardImage" src={graphicsIcon} alt="graphicsIcon"/>
                                <h2 className="serviceCardTitle">Graphics Design</h2>
                                <p className="serviceCardPare">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda at aut beatae cumque cupiditate </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;