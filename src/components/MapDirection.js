import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaW1lYWRhZCIsImEiOiJja3YwcWptbGwwMTRiMnZtb3dwd2x4emQ3In0.-fYiX8t8XSmT2sfEZ5bcAg';

const MapDirection = () => {
    useEffect( () => {
        const map = new mapboxgl.Map( {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ 90.403346, 23.869058 ],
            zoom: 13
        } );

        map.addControl(
            new MapboxDirections( {
                accessToken: mapboxgl.accessToken
            } ),
            'top-left'
        );
    }, [] )

    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;