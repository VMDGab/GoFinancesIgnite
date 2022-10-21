import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
width:100%;
`

export const Input = styled.TextInput`

padding-left: 10px;
height:${RFValue(60)}px;
background-color: ${({theme}) => theme.colors.shape};
margin-bottom: ${RFValue(8)}px;
border-radius: 5px;
`
export const Error = styled.Text`

color: ${({ theme }) => theme.colors.attention_light};
font-size: ${RFValue(14)};
font-family: ${({ theme }) => theme.fonts.regular};
margin: 0 0 7px 0;

`