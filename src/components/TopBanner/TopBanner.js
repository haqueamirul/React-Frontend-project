import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class TopBanner extends Component {

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle)
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixBanner p-0">
                    <div className="topBannerOverly">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">Software Engineer</h1>
                                    <h4 className="topSubTitle">Mobile & Web Application</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;