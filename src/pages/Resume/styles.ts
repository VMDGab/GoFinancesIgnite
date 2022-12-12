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