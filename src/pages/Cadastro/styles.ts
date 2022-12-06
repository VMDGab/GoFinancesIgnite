import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

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
export const Form = styled.View`
flex:1;
padding:${RFValue(24)}px;
justify-content: space-between;

`
export const Fields = styled.View``

export const TransactionsTypes = styled.View`
justify-content: space-between;
flex-direction: row;
margin: ${RFValue(24)}px ${RFValue(0)}px ;
align-items: center;

`

