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
  Logout,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { useFocusEffect } from '@react-navigation/native';

import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth'

export interface DataListProps extends TransactionCardProps {
  id: string
}

interface HighlightProps {
  amount: string,
  lastTransaction: string,
}

interface HighLightData {
  entries: HighlightProps,
  expensives: HighlightProps,
  total: HighlightProps,
}

export function Dashboard() {

  const { user, SignOut } = useAuth()

  const [isLoading, setIsLoading] = useState(true)

  const [transactions, settransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighLightData>({} as HighLightData)

  const theme = useTheme();
  const TransactionData = `@GoFinances:Cadastro_user:${user.id}`



  function getLastTransaction(collection: DataListProps[]) {

    const collectionFilttered = collection
      .filter(transaction => transaction.type === type);

    if (collectionFilttered.length === 0)
      return 0;

    const lastTransaction =
      new Date
        (Math.max.apply(Math, collection
          .map((transaction) => new Date(transaction.date).getTime())))


    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;

  }


  function getLastTransactionByType(collection: DataListProps[], type: 'positive' | 'negative') {



    const lastTransaction =
      new Date
        (Math.max.apply(Math, collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())))


    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;

  }


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

    const lastTransactionEntries = getLastTransactionByType(transaction, 'positive');

    const lastTransactionExpensives = getLastTransactionByType(transaction, 'negative');

    const IntervalTransactions = `01 á ${getLastTransaction(transaction)}`

    const total = entriesTotal - expensiveTotal


    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionEntries === 0 
        ? 'Não há transações' 
        : `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionExpensives === 0 ? 
        'Não há transações' 
        : `Última saída dia ${lastTransactionExpensives}`,
      },

      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: IntervalTransactions
      }
    })

    setIsLoading(false)
  }

  useEffect(() => {

    loadTransaction();

  }, [])

  useFocusEffect(

    useCallback(() => { loadTransaction(); }, [])

  )

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
          </LoadContainer> :
          <>
            <Header>

              <UserHeader>
                <User>
                  <UserProfile source={{ uri: user.photo }} />

                  <TextHeaderBox>
                    <GrettingsStyle>
                      {grettings}
                    </GrettingsStyle>
                    <UserName>{user.name}</UserName>
                  </TextHeaderBox>
                </User>

                <Logout onPress={SignOut}>
                  <LogoutButton name="power" />
                </Logout>
              </UserHeader>



            </Header>

            <HighlightBox>

              <HighlightCard
                type='positive'
                title='Entradas'
                amount={highlightData.entries.amount}
                lastTransaction={highlightData.entries.lastTransaction}
              />
              <HighlightCard
                type='negative'
                title='Saidas'
                amount={highlightData.expensives.amount}
                lastTransaction={highlightData.expensives.lastTransaction}
              />
              <HighlightCard
                type='total'
                title='Seu saldo atual'
                amount={highlightData.total.amount}
                lastTransaction={highlightData.total.lastTransaction} />


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