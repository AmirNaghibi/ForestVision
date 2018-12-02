import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TwitterMarker from './TwitterMarker';
import points from '../points';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 49.568000,
            lng: -121.438000
        },
        zoom: 7
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
                        lat={48.7890}
                        lng={-123.7330}
                        tweetId="1068554525848391681"
                    />
                    <TwitterMarker
                        lat={49.568000}
                        lng={-121.438000}
                        tweetId="1065968443306987520"
                    />
                    <TwitterMarker
                        lat={49.405000}
                        lng={-117.644000}
                        tweetId="1050857692963565569"
                    />

                </GoogleMapReact>

            </div>
        );
    }
}

export default Map;
