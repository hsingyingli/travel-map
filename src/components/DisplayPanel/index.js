import {Card, Container, IconButton, Content, Category} from './style';
import {useMemo, useState, useRef} from 'react';
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaStar,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {getPlacesData} from '../../api/travelAdvisorAPI';

export default function DisplayPanel({
  boundary,
  places,
  setPlaces,
  setLocation,
  toggleVisable
}) {
  const [attribute, setAttribute] = useState('');

  const containerRef = useRef();
  const contentRef = useRef();
  const selectCard = (place) => {
    setLocation({
      lat: parseFloat(place.latitude),
      lng: parseFloat(place.longitude),
    });
    toggleVisable()
  };
  const selectAttribute = async (e) => {
    const attr = e.target.innerHTML;
    setAttribute(attr);

    try {
      const places = await getPlacesData(attr, boundary);
      setPlaces(places);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = useMemo(
    () => ['restaurants', 'attractions', 'hotels'],
    [],
  );
  return (
    <Container ref={containerRef}>
      <Category>
        {categories.map((category) => {
          return (
            <IconButton
              key={category}
              isSelected={category === attribute}
              onClick={selectAttribute}
            >
              {category}
            </IconButton>
          );
        })}
      </Category>
      <Content ref={contentRef}>
        {places?.length ? (
          places.map((place, index) => {
            return (
              <Card
                key={place.location_id + index}
                onClick={() => {
                  selectCard(place);
                }}
              >
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                  }
                  alt={place.name}
                />
                <div className="places-detail">
                  <h3>{place.name}</h3>
                  <div className="detail">
                    <FaMapMarkerAlt />
                    {place.address}
                  </div>
                  <div className="detail">
                    <FaPhoneAlt />
                    {place.phone}
                  </div>
                  <div className="detail">
                    <FaStar />
                    {place.rating}
                  </div>
                  <div className="detail">
                    <FaLocationArrow />
                    <a href={place.website} rel="noreferrer" target="_blank">
                      {place.website}
                    </a>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <div>No result</div>
        )}
      </Content>
    </Container>
  );
}
