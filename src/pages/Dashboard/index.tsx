import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Transactions,
  Title,
  TransactionList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionsCardProps } from '../../components/TransactionCard';



export interface DataListProps extends TransactionsCardProps {
  id: string
}

export function Dashboard() {

  const [data, setData] = useState<DataListProps[]>([])




  async function loadTransaction() {

   
    const TransactionData = '@GoFinances:Cadastro';
    const response = await AsyncStorage.getItem(TransactionData)

    const transaction = response ? JSON.parse(response) : []

    const transactionFormatted : DataListProps[] = transaction.map((item: DataListProps) => {

      const amount = Number(item.amount).toLocaleString('pt-BR', {
       
        style: 'currency',
        currency: 'BRL',

      })

       const date = Intl.DateTimeFormat('pt-BR',  {
        day:'2-digit',
        month:'2-digit',
        year: '2-digit',
       }).format(new Date(item.date))
   

    return {
      id: item.id,
      name: item.name,
      category: item.category,
      type: item.type,
      amount,
      date,
    } 
});
    setData(transactionFormatted);
  
  }

  useEffect(() => {

  loadTransaction();

  }, [])

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

        <HighlightCard type='positive' title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard type='negative' title='Saidas' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril' />
        <HighlightCard type='total' title='Seu saldo atual' amount='R$ 16.141,00' lastTransaction='01 à 16 de abril' />


      </HighlightBox>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />


      </Transactions>
    </Container>
  );
}