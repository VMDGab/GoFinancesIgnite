import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Header = styled.View`

background-color: ${({theme}) => theme.colors.primary};
height: ${RFPercentage(20)}px;
align-items: center;
padding-top:${RFPercentage(12)}px ;
`
export const TextHeader = styled.Text`

font-size:${RFValue(20)}px ;
color: ${({theme}) => theme.colors.shape};
font-family: ${({theme}) => theme.fonts.regular};
`
export const InputBox = styled.View`

padding:${RFValue(24)}px;

`
export const Input = styled.TextInput`
padding-left: 10px;
height:${RFValue(60)}px;
background-color: ${({theme}) => theme.colors.shape};
margin-bottom: ${RFValue(8)}px;
border-radius: 5px;
`
export const TransactionsTypes = styled.View`
justify-content: space-between;
flex-direction: row;
margin: ${RFValue(0)}px ${RFValue(24)}px ;
align-items: center;

`