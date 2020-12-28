import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faCheckCircle, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faLinkedin,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerSection">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h4 className="clientTitle">Follow Me</h4>
                                <a className="followMe" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                                <a className="followMe" href="#"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a><br/>
                                <a className="followMe" href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a><br/>
                                <a className="followMe" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                <h4 className="clientTitle">Address</h4>
                                <p className="footerAdd">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                                <p className="footerAdd"><FontAwesomeIcon icon={faEnvelope} /> amirulhaque@yahoo.com</p>
                                <span className="footerAdd"><FontAwesomeIcon icon={faPhone} /> +880 1778 539887</span>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4 className="clientTitle">Information</h4>
                                <a className="infoLegal" href="#">About</a><br/>
                                <a className="infoLegal" href="#">Contact Us</a>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4 className="clientTitle">Legal</h4>
                                <Link className="infoLegal" to="/refund">Refund Policy</Link><br/>
                                <Link className="infoLegal" to="/terms">Terms And Condition</Link><br/>
                                <Link className="infoLegal" to="/privacy">Privacy Policy</Link>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="text-center copyrightSection">
                        <a className="copyrightText" href="#">CommanderIT.com &copy; 2019-2020.</a>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Footer;