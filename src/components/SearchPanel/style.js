import styled from 'styled-components';
import size from '../../lib/theme/size';
import breakpoints from '../../lib/theme/breakpoints';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';


export const Container = styled.div`
  width: ${size.container.xs};
  display: flex;
  align-items: center;
  border: 1px solid ${({theme})=> theme.border};
  border-radius: 5px;
  background-color: ${({theme}) => theme.background};
  @media only screen and ${breakpoints.md} {
    width: ${size.container.xxs};
  }
`

export const StyledComboBox = styled(Combobox)`
  width: ${size.container.xs};
  max-height: 80vh;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    width: 100%;
  }
`
export const StyledInput = styled(ComboboxInput)`
    width: 80%;
    margin-left: 10px;
    background-color: transparent;
    border: none;
    outline: none !important;
    -webkit-text-fill-color: ${({theme}) => theme.text};
    font-size: 16px;
    caret-color: ${({theme}) => theme.text};

`

export const StyledList = styled(ComboboxList)`

`

export const StyledOption = styled(ComboboxOption)`
    background: ${({theme})=>theme.background};
    overflow: hidden;
    padding: 10px 10px;
    font-size: 16px;
    
    :hover {
      background: grey;
    }
`
