import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import './Home.css';
import { Navbar, Nav, Container, Row, Col, Button, Pager, Pagination } from 'react-bootstrap';
import logo from './logo.png';
import { Link } from 'react-router-dom';

import HomepageIllustration from './Assets/homepageillustration.svg';
import CarCrashIcon from './Assets/carcrashicon.svg';
import ai1icon from './Assets/AI1icon.svg';
import ai2icon from './Assets/AI2.svg';
import mapimg from './Assets/map.svg';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({ currentPage: number });
    };
    render() {
        return (
            <div>
                <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                    <div className="block home">
                        <Container className="home-wrapper">
                            <Row className="vertical-center">
                                <Col lg={5} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <h1>Find Safer Routes</h1>
                                        <h3>with RouteSafer</h3></div>
                                </Col>
                                <Col lg={7}>
                                    <img src={HomepageIllustration} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="block about">
                        <Container className="home-wrapper">
                            <Container className="vertical-center">
                                <Row><Col><h1 style={{ color: 'white' }}>About RouteSafer</h1></Col></Row>
                                <Row className="icons">
                                    <Col><img src={ai1icon} className="about-icon" /></Col>
                                    <Col><img src={ai2icon} className="about-icon" /></Col>
                                    <Col><img src={CarCrashIcon} className="about-icon" /></Col>
                                </Row>
                                <Row style={{ color: 'white' }}>
                                    <Col>
                                        <p>Leveraging AI technology, RouteSafer provides safer alternatives to Google Map routes and aims to reduce automotive collisions in cities. </p>
                                    </Col>
                                    <Col>
                                        <p>Using machine learning algorithms such as k-nearest neighbors, RouteSafer analyzes over 20 years of collision data and uses over 11 parameters to make an intelligent estimate about the safety of a route, and ensure the user arrives safe.</p>
                                    </Col>
                                    <Col>
                                        <p>RouteSafer’s machine learning model can also help insurance companies evaluate the risk in a  driver’s everyday commute, thus helping the insurance provider to more accurately value premiums. </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </div>
                    <div className="block product">
                        <Container className="home-wrapper">
                            <Container className="vertical-center">
                                <Row>
                                    <Col lg={4}>
                                        <Row>
                                            <h1 style={{ color: 'white' }}>Prototype</h1>
                                        </Row>
                                        <Row>
                                            <h3 style={{ color: 'white', marginBottom: '2rem' }}>RouteSafer</h3>
                                        </Row>
                                        <Row>
                                            <Link to="/map">
                                                <Button variant="outline-dark">
                                                    Check it out
                                            </Button></Link>
                                        </Row>
                                    </Col>
                                    <Col lg={8}>
                                        <img src={mapimg} />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </div>
                </ReactPageScroller>

                
                <Navbar expand="lg" fixed="top" className="navbar">
                    <Navbar.Brand onClick={()=> this.goToPage(0)} style={{color: 'white'}}><img src={logo} style={{margin: '10px'}} className="nav-logo" />
                        RouteSafer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link onClick={()=> this.goToPage(1)} style={{color:'white'}}>About</Nav.Link>
                            <Nav.Link onClick={()=> this.goToPage(2)} style={{color:'white'}}>Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Home;