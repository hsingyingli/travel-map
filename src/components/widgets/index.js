import { useState } from 'react';
import SearchPanel from '../SearchPanel';
import DisplayPanel from '../DisplayPanel';
import {Container, Panels, IconButton} from './style';
import {FaAlignJustify} from 'react-icons/fa'

export default function Widgets({
  setPosition,
  setPlaces,
  setLocation,
  boundary,
  places,
}) {
  const [visable, setVisable] = useState(false);
  
  const toggleVisable = () => {
    setVisable((prev)=>(prev?false:true))
  } 
  return (
    <Container>
      <IconButton onClick={toggleVisable}>
        <FaAlignJustify/>
      </IconButton>
      <Panels visable={visable}>
        <SearchPanel
          setPosition={setPosition}
          setPlaces={setPlaces}
          setLocation={setLocation}
        />
        <DisplayPanel
          boundary={boundary}
          places={places}
          setPlaces={setPlaces}
          setLocation={setLocation}
          toggleVisable={toggleVisable}
        />
      </Panels>
    </Container>
  );
}
