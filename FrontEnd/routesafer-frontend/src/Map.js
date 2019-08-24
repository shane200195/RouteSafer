import { withScriptjs, withGoogleMap, GoogleMap,  DirectionsRenderer, Polyline } from "react-google-maps";
import { Form, Button, Card } from 'react-bootstrap';
import React from 'react';
import './Map.css'

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 43.656761, lng:  -79.380727}}>
        { props.showDirections? props.line : null }
    </GoogleMap>
));

// "250 Fort York Blvd, Toronto, ON M5V 3K9"
// "93 Front St E, Toronto, ON M5E 1C3"

export default class Map extends React.Component {

    constructor(props){
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
        this.setState({ showDirections: true, displayedLine: (
        <Polyline 
            //path={this.state.routes[index]}
            path={[{lat:43.63708, lng:-79.407}, {lat:43.1, lng:-78.0}]}
            geodesic={true}
            options={{
                strokeColor: "#ff2527",
                strokeOpacity: 0.75,
                strokeWeight: 2,
            
            }}/>) })
    }

    addCards(){
        let routeCards = [];
        for (let index = 0; index < this.state.routes.length; index++) {
            routeCards.push(
            <Card key={index}>
                <Card.Body>
                    <Card.Title>Route { index + 1 }</Card.Title>
                    <Button onClick={this.handleViewRoute(index)}>View Route</Button>
                    <Card.Subtitle>Rating: blah</Card.Subtitle>
                </Card.Body>
            </Card>);
        }
        this.setState({ routeCards: routeCards });
    }

    handleSubmit(event){
        event.preventDefault();
        const link = "http://100.64.196.194:5000/test"
        fetch(link, {method: "POST", body: JSON.stringify(
            {
                "locations": [
                    this.state.origin,
                    this.state.destination
                ]
            }
        )})
        .then(response => 
          response.json()
        ).then(data => {
            this.setState({ routes: data.polyline})
            console.log(data);
            this.addCards();
        });

    }


    render() {
        return (
            <div className="container" id="wrapper">
                <div className="row">
                    <div className="col-xs-1">
                        <div className="container" id="form">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="origin">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control type="text" onChange={this.handleOriginChange}/>
                                </Form.Group>
                                <Form.Group controlId="destination">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="text" onChange={this.handleDestinationChange}/>
                                </Form.Group>
                                <Button type="submit" value="Submit">Submit</Button>
                            </Form>
                        </div>
                        { this.state.routeCards }
                    </div>
                    <div className="col-xs-5">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4IOJ-wodRVvaKgYIHTyhDnt3WtVCAGNE&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100vh`, width: '900px'}} />}
                            containerElement={<div style={{ height: `100vh`, width: '900px'}} />}
                            mapElement={<div style={{ height: `100vh`, width: '900px'}} />}
                            showDirections={ this.state.showDirections }
                            line={ this.state.displayedLine }
                        />
                    </div>
                </div>
            </div>
        )
    }
}