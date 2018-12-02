import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TwitterMarker from './TwitterMarker';
import points from '../points';

const AnyReactComponent = ({ children }) => <div>{children}</div>;


class Map extends Component {
    static defaultProps = {
        center: {
            lat: 48.7787,
            lng: -123.7079
        },
        zoom: 9
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCf2YJbg7HeE8JHcAUmQRhJMRHONHjozk8', libraries: 'visualization' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => {
                        console.log(points[0]);
                        const heatmap = new maps.visualization.HeatmapLayer({
                            data: points.map(point => ({
                                    location: new maps.LatLng(point['location'][0], point['location'][1]),
                                    weight: point['weight'],
                                }))
                        });
                        heatmap.setMap(map);
                        heatmap.set('radius', 30);
                    }}
                >
                    <TwitterMarker
                        lat={48.7787}
                        lng={-123.7079}
                        tweetId="1068554525848391681"
                    />

                </GoogleMapReact>
                
            </div>
        );
    }
}

export default Map;
