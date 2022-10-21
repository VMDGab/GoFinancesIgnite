import styled, {css} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'positive' | 'negative' 
  }

  interface ButtonProps extends TypeProps {
    isActive: boolean
     }

export const Container = styled.View`

`
export const TypeButton = styled.TouchableOpacity<ButtonProps>`
 
  ${({ isActive, type }) =>
    isActive &&
    type === 'positive' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'negative' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}


border-width: ${({isActive}) => (isActive ? 0 : 1)}px;
border-style: solid;
border-radius: 5px;


flex-direction: row;
align-items: center;
justify-content: center;
border-color: ${({theme}) => theme.colors.text};
height:${RFValue(60)}px;
width:${RFValue(160)}px;
padding:${RFValue(16)}px;
`
export const TypeIcon = styled(Feather)<TypeProps>`
color: ${({theme, type}) => type === 'positive' ? theme.colors.success : theme.colors.attention};
font-size: ${RFValue(24)}px;

`

export const TypeTransaction = styled.Text`
padding-left:${RFValue(10)}px;
margin-top: ${RFValue(3)}px;
font-size: ${RFValue(14)}px;
color: ${({theme}) => theme.colors.title};
font-family: ${({theme}) => theme.fonts.regular};
`