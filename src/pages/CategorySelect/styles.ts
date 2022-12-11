import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'

interface CategoryProps{
  isActive: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding-bottom: 24px;
`;
export const Header = styled.View`
height: ${RFValue(70)}px;
background-color: ${({theme}) => theme.colors.primary};
align-items: center;
justify-content: flex-end;
padding-bottom: 19px;
`
export const Title = styled.Text`

font-family:${({theme}) => theme.fonts.regular} ;
font-size: ${RFValue(20)}px;
color: ${({theme}) => theme.colors.shape};
`

export const Category  =  styled.TouchableOpacity<CategoryProps>`

background-color: ${({theme, isActive}) => 
isActive ? theme.colors.secondary_light : theme.colors.background};

align-items: flex-start;
flex-direction: row;
padding: ${RFValue(15)}px;
align-items: center;

`
export const Icon  =  styled(Feather)`


font-size: ${RFValue(20)}px;
color: ${({theme}) => theme.colors.title};

`
export const Name  =  styled.Text`

font-family:${({theme}) => theme.fonts.regular} ;
margin-left: ${RFValue(15)}px;
margin-top: 2px;
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.title};

`

export const Separator = styled.View`

height: 1px;
width:100%;
background-color: ${({theme}) => theme.colors.text};


`

export const Footer = styled.View`

padding: 24px;

`