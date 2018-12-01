import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const points = [
    {
        location: [49.2606, -123.2455],
        weight: 20
    },
    {
        location: [49.2610, -123.2461],
        weight: 30
    },
    {
        location: [49.2608, -123.2460],
        weight: 10
    },
];

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
                    bootstrapURLKeys={{ key: 'PASTE_YOUR_KEY!', libraries: 'visualization' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => {
                        console.log(points[0]);
                        const heatmap = new maps.visualization.HeatmapLayer({
                            data: points.map(point => (
                                {location: new maps.LatLng(point['location'][0], point['location'][1]),
                                    weight: point['weight']}))
                        });
                        heatmap.setMap(map);
                    }}
                >
                    <AnyReactComponent
                        lat={49.2606}
                        lng={-123.2460}
                        text={'We are here!'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
