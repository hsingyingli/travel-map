import {
  Container,
  StyledComboBox,
  StyledInput,
  StyledList,
  StyledOption,
} from './style';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {ComboboxPopover} from '@reach/combobox';
import '@reach/combobox/styles.css';
import {FaSearch} from 'react-icons/fa';

export default function SearchPanel({setPosition, setPlaces, setLocation}) {

  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();
    const results = await getGeocode({address: val});
    const {lat, lng} = await getLatLng(results[0]);
    setPosition({lat, lng});
    setPlaces([])
    setLocation(null)
  };

  return (
    <Container>
      <StyledComboBox onSelect={handleSelect}>
        <div>
          <FaSearch />
          <StyledInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="combobox-input"
            placeholder="Search address"
          />
        </div>
        <ComboboxPopover>
          <StyledList>
            {status === 'OK' &&
              data.map(({place_id, description}) => (
                <StyledOption key={place_id} value={description} />
              ))}
          </StyledList>
        </ComboboxPopover>
      </StyledComboBox>

    </Container>
  );
}
