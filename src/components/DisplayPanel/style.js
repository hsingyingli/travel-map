import styled from 'styled-components';
import size from '../../lib/theme/size';
import breakpoints from '../../lib/theme/breakpoints';

export const Container = styled.div`
  width: ${size.container.xs};
  border: 1px solid ${({theme}) => theme.border};
  border-radius: 5px;
  background-color: ${({theme}) => theme.background};
  margin-top: 20px;
  max-height: 80vh;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  @media only screen and ${breakpoints.md} {
    width: ${size.container.xxs};
    max-height: 70vh;
  }
`;

export const Category = styled.div`
  display: flex;
`;

export const IconButton = styled.div`
  background-color: ${({theme}) => theme.background};
  border: 1px solid;
  border-color: ${({theme, isSelected}) =>
    isSelected ? 'white' : theme.border};
  padding: 10px;
  border-radius: 8px;
  color: ${({theme}) => theme.text};
  min-width: 1.5em;
  height: 0.5em;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border-color: white;
  }
`;

export const Card = styled.div`
  width: 90%;
  margin: 5px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 100%;
    height: 250px;
    @media only screen and ${breakpoints.md} {
      height: 180px;
    }
  }

  .places-detail {
    padding: 5px 10px;
  }

  .detail {
    display: grid;
    grid-template-columns: 1fr 9fr;
    margin: 5px 0px;
    overflow: hidden;

    a:link,
    a:visited {
      text-decoration: none;
      cursor: pointer;
      color: ${({theme}) => theme.text};
    }

    a: hover {
      color: gray;
    }

  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;
