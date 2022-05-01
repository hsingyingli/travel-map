import {Fragment, useRef, useState} from 'react';

import {useLoadScript} from '@react-google-maps/api';
import Map from '../components/Map';
import Widgets from '../components/widgets';
const Home = () => {
  const mapRef = useRef();
  const [libraries ] = useState(['places']);
  const [places, setPlaces] = useState([]);
  const [boundary, setBoundary] = useState({});
  const [center, setCenter] = useState({lat: 25.105497, lng: 121.597366});
  const [location, setLocation] = useState(null);
    
  const onBoundaryChange = () => {
    setBoundary(mapRef.current?.getBounds().toJSON())
  }
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries,
  });
  const onLoad = (map) => (mapRef.current = map);

  if (!isLoaded) return <div>loading</div>;

  return (
    <Fragment>
      <Map onLoad={onLoad} center={center} places={places} location={location} onBoundaryChange={onBoundaryChange}/>
      <Widgets
        setPosition={(position) => setCenter(position)}
        setPlaces={(value)=>setPlaces(value)}
        setLocation={(value)=>setLocation(value)}
        places={places}
        boundary={boundary}
      />
    </Fragment>
  );
};

export default Home;
