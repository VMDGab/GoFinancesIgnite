
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps{
    color: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 13px 24px;
  border-radius: 5px;
  border-left-width:5px;
  border-left-color: ${({color}) => color};
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.title};
font-size: ${RFValue(15)}px;
`

export const Amount = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.title};
font-size: ${RFValue(15)}px;
`

