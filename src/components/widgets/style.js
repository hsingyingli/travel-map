import styled from 'styled-components';
import size from '../../lib/theme/size';
import breakpoints from '../../lib/theme/breakpoints';

export const Container = styled.div`
  width: ${size.container.xs};
  position: fixed;
  top: 0;
  left: 0;
  margin: 2em;
`;

export const Panels = styled.div`
  @media only screen and ${breakpoints.md} {
    margin: 10px 0px;
    display: ${({visable}) => (visable ? 'block' : 'none')};
  }
`;

export const IconButton = styled.div`
  display: none;
  @media only screen and ${breakpoints.md} {
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.background};
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
