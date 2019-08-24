import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Polyline } from "react-google-maps";
import { Form, Button, Card, Row, Col, Container } from 'react-bootstrap';
import React from 'react';
import './Map.css'


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 43.656761, lng: -79.380727 }}>
        {props.showDirections ? props.line : null}
    </GoogleMap>
));

// "250 Fort York Blvd, Toronto, ON M5V 3K9"
// "93 Front St E, Toronto, ON M5E 1C3"

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: '',
            routes: [],
            routeCards: [],
            showDirections: false,
            displayedLine: null,
        }

        this.handleOriginChange = this.handleOriginChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleViewRoute = this.handleViewRoute.bind(this);
    }

    handleOriginChange(event) {
        event.preventDefault();
        this.setState({ origin: event.target.value });
    }

    handleDestinationChange(event) {
        event.preventDefault();
        this.setState({ destination: event.target.value });
    }

    handleViewRoute(index) {
        let processed_lat_lng = []
        console.log(this.state.routes[index]);
        for (let i = 0; i < this.state.routes[index].length; i++) {
            //console.log(this.state.routes[index][i][0])
            processed_lat_lng.push({ lat: this.state.routes[index][i][0], lng: this.state.routes[index][i][1] })
        }
        //console.log(processed_lat_lng)
        this.setState({
            showDirections: true, displayedLine: (
                <Polyline
                    path={processed_lat_lng}
                    //path={[{lat:43.63708, lng:-79.407}, {lat:43.1, lng:-78.0}]}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,

                    }} />)
        })
    }

    addCards() {
        let routeCards = [];
        for (let i = 0; i < this.state.routes.length; i++) {
            routeCards.push(
            <Card>
                <Card.Body>
                    <Card.Title>Route {i + 1}</Card.Title>
                    <Button onClick={() => {
                        let processed_lat_lng = []
                        console.log(i);
                        console.log(this.state.routes);
                        for (let index = 0; index < this.state.routes[i].length; index++) {
                            //console.log(this.state.routes[index][i][0])
                            processed_lat_lng.push({ lat: this.state.routes[i][index][0], lng: this.state.routes[i][index][1] })
                        }
                        //console.log(processed_lat_lng)
                        this.setState({
                            showDirections: true, displayedLine: (
                                <Polyline
                                    path={processed_lat_lng}
                                    //path={[{lat:43.63708, lng:-79.407}, {lat:43.1, lng:-78.0}]}
                                    geodesic={true}
                                    options={{
                                        strokeColor: "#ff2527",
                                        strokeOpacity: 0.75,
                                        strokeWeight: 2,

                                    }} />)
                        })
                    }}>View Route</Button>
                    <Card.Subtitle>Rating: blah</Card.Subtitle>
                </Card.Body>
            </Card>);
        }
        this.setState({ routeCards: routeCards });
    }

    handleSubmit(event) {
        event.preventDefault();
        const link = "http://100.64.196.194:5000/test"
        fetch(link, {
            method: "POST", body: JSON.stringify(
                {
                    "locations": [
                        this.state.origin,
                        this.state.destination
                    ]
                }
            )
        })
            .then(response =>
                response.json()
            ).then(data => {
                this.setState({ routes: data.polyline })
                console.log(data);
                this.addCards();
            });

    }


    render() {
        return (
            <div className="container" id="wrapper">
                <Row>
                    <Col xs={4} className="side-bar">
                        <div className="container" id="form">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="origin">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOriginChange} autoFocus={true} />
                                </Form.Group>
                                <Form.Group controlId="destination">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="text" onChange={this.handleDestinationChange} />
                                </Form.Group>
                                <Button type="submit" value="Submit">Submit</Button>
                            </Form>
                        </div>
                        {this.state.routeCards}
                    </Col>
                    <Col xs={8}>
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4IOJ-wodRVvaKgYIHTyhDnt3WtVCAGNE&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{
                                height: "100vh",
                                width: '100%',
                                display: 'flex',
                                flexFlow: 'row nowrap',
                                justifyContent: 'center',
                                padding: 0
                            }} />}
                            containerElement={<div style={{ width: "100%", marginLeft: 0, marginRight: 0 }} />}
                            mapElement={<div style={{ height: `100vh`, width: '100%' }} />}

                            showDirections={this.state.showDirections}
                            line={this.state.displayedLine}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}