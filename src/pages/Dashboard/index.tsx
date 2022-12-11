import React, { useState, useEffect, useCallback } from 'react';
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
  LoadContainer,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { useFocusEffect } from '@react-navigation/native';

import { ActivityIndicator } from 'react-native'
import {useTheme} from 'styled-components';

export interface DataListProps extends TransactionCardProps {
  id: string
}

interface HighlightProps {
  amount: string
}

interface HighLightData {
  entries: HighlightProps,
  expensives: HighlightProps,
  total: HighlightProps,
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)

  const [transactions, settransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighLightData>({} as HighLightData)

  const theme = useTheme();
  const TransactionData = '@GoFinances:Cadastro';

  async function loadTransaction() {

    const response = await AsyncStorage.getItem(TransactionData)

    const transaction = response ? JSON.parse(response) : []

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionFormatted: DataListProps[] = transaction.map((item: DataListProps) => {

      if (item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expensiveTotal += Number(item.amount)
      }


      const amount = Number(item.amount).toLocaleString('pt-BR', {

        style: 'currency',
        currency: 'BRL',

      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
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
    settransactions(transactionFormatted);
    
    const total = entriesTotal - expensiveTotal

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },

      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },

      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      }
    })

    setIsLoading(false)
  }

  useEffect(() => {

  }, [])
  useEffect(() => {

    loadTransaction();

  }, [])

  useFocusEffect(useCallback(() => {
    loadTransaction();
  }, []))

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
      {
        isLoading ? 
        <LoadContainer>
          <ActivityIndicator 
          color={theme.colors.secondary}
            
          />
           </LoadContainer>:
        <>
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

            <HighlightCard
              type='positive'
              title='Entradas'
              amount={highlightData.entries.amount}
              lastTransaction='Última entrada dia 13 de abril'
            />
            <HighlightCard
              type='negative'
              title='Saidas'
              amount={highlightData.expensives.amount}
              lastTransaction='Última saída dia 03 de abril'
            />
            <HighlightCard
              type='total'
              title='Seu saldo atual'
              amount={highlightData.total.amount}
              lastTransaction='01 à 16 de abril' />


          </HighlightBox>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />


          </Transactions>
        </>
      }
    </Container>
  );
}