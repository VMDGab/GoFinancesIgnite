import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { DataListProps } from '.';
import { FlatList } from 'react-native'


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
export const Header = styled.View`
width: 100%;
height: ${RFPercentage(42)}px;
background-color: ${(props) => props.theme.colors.primary};
flex-direction: row;
padding: ${RFValue(15)}px ${RFPercentage(4)}px;
justify-content: center;

`
export const UserHeader = styled.View`

margin: 50px 30px;
flex-direction: row;
justify-content: space-between;
height: ${RFValue(50)}px;
align-items: center;
width: 100%;


`
export const UserProfile = styled.Image`

height:${(RFValue(50))}px;
width: ${(RFValue(50))}px;
border-radius: 10px;
`
export const UserName = styled.Text`
color: ${(props) => props.theme.colors.shape};
font-size :${(RFValue(20))}px;
font-family: ${(props) => props.theme.fonts.bold};;
margin-top: ${(RFValue(-9))}px;
`
export const LogoutButton = styled(Feather)`
font-size :${(RFValue(25))}px; 
color: ${(props) => props.theme.colors.secondary};

`
export const TextHeaderBox = styled.View`
padding-left: 15px;
justify-content: center;
padding-top: 10px;
`
export const GrettingsStyle = styled.Text`
 
color: ${(props) => props.theme.colors.shape};
font-size :${(RFValue(10))}px; 
font-family: ${(props) => props.theme.fonts.regular};

`
export const User = styled.View`

flex-direction: row;

`


export const HighlightBox = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 16 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;

`
export const Transactions = styled.View`
    
    margin: ${(RFValue(60))}px ${(RFValue(24))}px ${(RFValue(20))}px ; 
    flex:1;
    `

export const Title = styled.Text`
    
color: ${(props) => props.theme.colors.title};
font-size :${(RFValue(18))}px; 
font-family: ${(props) => props.theme.fonts.medium};
margin: 10px;
    `
export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>).attrs({

    showsVerticalScrollIndicator: false
  })`
      
   `
export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;