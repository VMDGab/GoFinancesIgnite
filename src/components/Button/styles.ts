import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
 
  height: ${RFValue(65)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: ${RFValue(150)}px ${RFValue(24)}px ${RFValue(0)}px ${RFValue(24)}px;
`;
  
export const ButtonText = styled.Text`

font-size: ${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.shape};

`