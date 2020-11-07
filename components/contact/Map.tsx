import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

export interface MapOpts {
  lat: number;
  lng: number;
  zoom?: number;
}

const MapComponent = ({ lat, lng, zoom }: MapOpts) => {
  if (typeof zoom === 'undefined') {
    zoom = 5;
  }

  const [map, setMap] = useState<GoogleMap>(null);

  const onLoad = useCallback(map => {
    const bounds = new (window as any).google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => setMap(null), []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '350px' }}
        center={{ lat, lng }}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

const Map = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false
});

export default Map;
