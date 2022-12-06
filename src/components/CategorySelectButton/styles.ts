import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.TouchableOpacity.attrs({
activeOpacity: 0.7
})`

height: ${RFValue(60)}px;
background-color: ${({theme}) => theme.colors.shape};
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:${RFValue(0)}px ${RFValue(16)}px;
border-radius:5px;

`;
export const Category = styled.Text`
color: ${({theme}) => theme.colors.text};
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
`
export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
color: ${({theme}) => theme.colors.text};
`