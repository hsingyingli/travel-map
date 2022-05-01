import axios from 'axios';

export const getPlacesData = async (type, boundary) => {
  try {
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      params: {
        bl_latitude: boundary.south.toString(), 
        tr_latitude: boundary.north.toString(), 
        bl_longitude: boundary.west.toString(), 
        tr_longitude: boundary.east.toString(), 
        limit: '30',
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
      },
    };

    const {
      data: {data},
    } = await axios.request(options);
    return data;
  } catch (e) {
    console.log(e);
  }
};
