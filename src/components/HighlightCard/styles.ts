import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { css } from 'styled-components'

interface TypeProps {
    type: 'positive' | 'negative' | 'total'
  }

export const Container = styled.View<TypeProps>`


background-color: ${({theme, type}) => 

type == 'total' ? theme.colors.secondary : theme.colors.shape

};

border-radius: 5px;
height: ${RFValue(200)}px;
width:${RFValue(300)}px;
margin-right: ${RFPercentage(1)}px;;
`

export const Header = styled.View`

flex-direction: row;
padding: ${RFValue(18)}px ${RFValue(23)}px;
justify-content: space-between;
`
export const Type = styled.Text<TypeProps>`

color: ${({theme, type}) => 

type == 'total' ? theme.colors.shape : theme.colors.title

};

font-size :${(RFValue(15))}px; 
font-family: ${(props) => props.theme.fonts.regular};

`
export const TypeIcon = styled(Feather)<TypeProps>`

font-size :${(RFValue(35))}px; 

${({ type }) =>
    type === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ type }) =>
    type === 'negative' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}

`
export const Content = styled.View`
padding: ${RFValue(20)}px ${RFValue(18)}px ${RFValue(0)}px  ${RFValue(18)}px;

`
export const Amount = styled.Text<TypeProps>`

${({ type }) =>
    type === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ type }) =>
    type === 'negative' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
font-size :${(RFValue(20))}px; 
font-family: ${(props) => props.theme.fonts.medium};

`

export const LastTransaction = styled.Text<TypeProps>`

color: ${({theme, type}) => 

type == 'total' ? theme.colors.shape : theme.colors.title
};

font-size :${RFPercentage(1.5)}px; 
font-family: ${(props) => props.theme.fonts.regular};
`