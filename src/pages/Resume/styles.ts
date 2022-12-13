import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

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
export const CategoryList = styled.FlatList`

padding: 12px 24px ;

`
export const ChartContainer = styled.View`

width: 100%;
align-items: center;
`
export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  margin-top: 24px;
`;

export const MonthSelectButton = styled.TouchableHighlight``;

export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;
export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;