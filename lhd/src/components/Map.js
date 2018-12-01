import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 49.2606,
            lng: -123.2460
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '90vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "PASTE_YOUR_API_KEY" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
