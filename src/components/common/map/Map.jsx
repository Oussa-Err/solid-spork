import React from 'react'
import './map.css'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'




const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY
    });
    const center = useMemo(() => ({ lat: 33.74451577797111, lng: -6.155663348132094 }), [])

    if (!isLoaded) { return <div className='map__loading'>Loading...</div>; }
    return (
            <GoogleMap
                zoom={13}
                center={center}
                mapContainerClassName='map-container'
            >
                <Marker position={center} />
            </GoogleMap>
    )
}

export default Map