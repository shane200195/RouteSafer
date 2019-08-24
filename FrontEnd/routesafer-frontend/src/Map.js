import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import './Map.css'

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 43.656761, lng:  -79.380727}}>
    </GoogleMap>
));

export default class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            origin: '',
            destination: ''
        }
        this.handleOriginChange = this.handleOriginChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOriginChange(event) {
        event.preventDefault();
        this.setState({ origin: event.target.value });
    }

    handleDestinationChange(event) {
        event.preventDefault();
        this.setState({ destination: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const link = "http://www.mapquestapi.com/directions/v2/alternateroutes?key=cWoBbdQDVccb4o05En8naNgZkdvYis17"
        fetch(link, {method: "POST", body: JSON.stringify(
            {
                "locations": [
                    "250 Fort York Blvd, Toronto, ON M5V 3K9",
                    "93 Front St E, Toronto, ON M5E 1C3"
                ],
                "maxRoutes": 200,
                "timeOverage": 1000
            }
        )})
        .then(response => 
          response.json().then(data => {
          console.log(data)
        })
        );
        console.log(this.state.origin, this.state.destination);
        //take values -> renders route 
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
                    </div>
                    <div className="col-xs-5">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4IOJ-wodRVvaKgYIHTyhDnt3WtVCAGNE&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100vh`, width: '900px'}} />}
                            containerElement={<div style={{ height: `100vh`, width: '900px'}} />}
                            mapElement={<div style={{ height: `100vh`, width: '900px'}} />}
                        />
                    </div>
                </div>
            </div>
        )
    }
}