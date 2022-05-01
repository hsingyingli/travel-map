import {useState, useMemo, Fragment} from 'react';
import {Info, MapContext} from './style';
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api';
export default function Map({
  center,
  location,
  onLoad,
  places,
  onBoundaryChange,
}) {
  const [response, setResponse] = useState(null);

  const options = useMemo(
    () => ({
      mapId: process.env.REACT_APP_DARK_MAP_ID,
      disableDefaultUI: true,
      clickableIcons: true,
    }),
    [],
  );

  const directions = useMemo(() => {
    if (location === null || center === null) return null;

    return (
      <DirectionsService
        // required
        options={{
          destination: location,
          origin: center,
          travelMode: 'DRIVING',
        }}
        // required
        callback={(res) => {
          if (res !== null) {
            if (res.status === 'OK') {
              setResponse(res);
            } else {
              console.log('response: ', res);
            }
          }
        }}
      />
    );
  }, [location, center]);

  const routes = useMemo(() => {
    if (response === null) return null;
    return (
      <DirectionsRenderer
        options={{
          directions: response,
        }}
      />
    );
  }, [response]);

  return (
    <MapContext>
      <GoogleMap
        zoom={15}
        center={center}
        onLoad={onLoad}
        mapContainerClassName="map-context"
        options={options}
        onBoundsChanged={onBoundaryChange}
      >
        {center && (
          <Fragment>
            <Marker position={center} />
            {places &&
              places.map(({name, latitude, longitude}, index) => {
                if (!(latitude && longitude)) return null;

                const position = {
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude),
                };

                return (
                  <Marker
                    key={latitude + longitude + index}
                    position={position}
                  />
                );
              })}

            {directions}
            {routes}
            {location !== null && (
              <InfoWindow
                position={location}
                options={{pixelOffset: {width: 10, height: -50}}}
              >
                <Info>
                  <div>Distance: </div>
                  <div>{response?.routes[0]?.legs[0].distance.text} </div>
                  <div>Duration: </div>
                  <div>{response?.routes[0]?.legs[0].duration.text} </div>
                </Info>
              </InfoWindow>
            )}
          </Fragment>
        )}
      </GoogleMap>
    </MapContext>
  );
}
