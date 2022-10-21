import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  UserHeader,
  UserProfile,
  UserName,
  LogoutButton,
  TextHeaderBox,
  GrettingsStyle,
  User,
  HighlightBox,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard() {

  const [grettings, setGrettings] = useState('');

  useEffect(() => {

    const CurrentTime = new Date().getHours();

    if (CurrentTime >= 6 && CurrentTime < 12) {
      setGrettings('Bom Dia')
    }

    else if (CurrentTime >= 12 && CurrentTime < 18) {
      setGrettings('Bom tarde')
    }

    else { setGrettings('Bom Noite') }
  }, [])


  return (
    <Container>
      <Header>

        <UserHeader>
          <User>
          <UserProfile source={require('../../assets/Leandro.jpeg')} />

          <TextHeaderBox>
            <GrettingsStyle>
              {grettings}
            </GrettingsStyle>
            <UserName>Leandro</UserName>
          </TextHeaderBox>
          </User>
          <LogoutButton name="power" />
        </UserHeader>
        


      </Header>

      <HighlightBox>

      <HighlightCard type='positive' title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril'/>
      <HighlightCard type='negative' title='Saidas' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril'/>
      <HighlightCard type='total' title='Seu saldo atual' amount='R$ 16.141,00' lastTransaction='01 à 16 de abril'/>
    

      </HighlightBox>

    </Container>
  );
}