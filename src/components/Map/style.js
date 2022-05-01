import styled from 'styled-components';


export const MapContext = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  .map-context {
    width: 100vw;
    height: 100vh;
  }
`;


export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  font-size: 18px;
  grid-column-gap: 10px;
  
`
