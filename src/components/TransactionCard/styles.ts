import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'


interface TransactionProps {
  type: 'positive' | 'negative';
}
export const Container = styled.View`
  
  
  background-color: ${({theme}) => theme.colors.shape};
  height: ${RFValue(128)}px;
  padding:${RFValue(15)}px;
 
  
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 16px;
  `;

export const NameTransaction = styled.Text`
color: ${({theme}) => theme.colors.title};
font-size: ${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular};
`
export const Amount = styled.Text<TransactionProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
  type == 'positive' ? theme.colors.success : theme.colors.attention};
  margin-top: 2px; 
`;
export const Footer = styled.View`
  align-items: center;
  margin-top: 19px;
flex-direction: row;
justify-content: space-between;
`

export const Type = styled.View`
align-items: center;
flex-direction: row;

`

export const Icon = styled(Feather)`
margin-right: 15px;
font-size: ${RFValue(20)}px;
color: ${({theme}) => theme.colors.text};
`
export const TypeText = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.text};

`
export const DateTransaction = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular}; ;
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.text};
`
