import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'SQL', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}
            ]
        }
    }

    render() {
        var blue = 'rgba(0,115,230,0.8)'
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle">Technology Used</h2>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify analysisContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem et expedita hic inventore mollitia officiis quas quasi quos, repudiandae temporibus voluptatibus. Distinctio ea est illum</p>
                            <p className="text-justify analysisContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem et expedita hic inventore mollitia officiis quas quasi quos, repudiandae temporibus voluptatibus. Distinctio ea est illum</p>
                            <p className="text-justify analysisContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem et expedita hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem et expedita hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti dolorem et expedita hic</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;