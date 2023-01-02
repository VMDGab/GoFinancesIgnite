import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  TextHeader,
  CategoryList,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from "victory-native";
import { ActivityIndicator } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../../utils/categories';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import {addMonths, subMonths, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useAuth } from '../../hooks/auth';

interface TransactionData {
  type: 'positive' | 'negative'
  name: string
  amount: string
  category: string
  date: string
  color: string
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {

  const {user} = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);

  const theme = useTheme();

  const TransactionData = `@GoFinances:Cadastro_user:${user.id}`
  ;

  function handlDateChange(action: 'next' | 'prev'){    
    if(action === 'next'){
      setSelectedDate(addMonths(selectedDate, 1));
    }else{
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
  setIsLoading(true);
    const response = await AsyncStorage.getItem(TransactionData)
    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted
      .filter((expensive: TransactionData) => 
      expensive.type === 'negative' &&
      new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
      new Date(expensive.date).getFullYear() === selectedDate.getFullYear());

    const expensiveTotal = expensives.reduce((acumullator: number, expensive: TransactionData) => {
      return acumullator + Number(expensive.amount)
    }, 0)


    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.name) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

        const percent = `${(categorySum / expensiveTotal * 100).toFixed(0)}%`

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum, 
          totalFormatted,
          percent        
        });
      }

      setTotalByCategories(totalByCategory);
      setIsLoading(false);
    })


  }

  useFocusEffect(

    useCallback(() => { loadData(); }, [])

  )
  return (
    <Container>
      <Header>
        <TextHeader>Resumo por categoria</TextHeader>
      </Header>
     
      <MonthSelect>
              <MonthSelectButton onPress={() => handlDateChange('prev')}>
                <MonthSelectIcon name="chevron-left"/>
              </MonthSelectButton>

              <Month>
                { format(selectedDate, 'MMMM, yyyy', {locale: ptBR}) }
              </Month>

              <MonthSelectButton onPress={() => handlDateChange('next')}>
                <MonthSelectIcon name="chevron-right"/>
              </MonthSelectButton>
            </MonthSelect>

      <ChartContainer>
        <VictoryPie
           data={totalByCategories}
          x='percent'
          y='total'
          colorScale={totalByCategories.map(category => category.color)}
          style={{
            labels: {
              fontSize: 18,
              fontWeight: 'bold',
              fill: 'white'
            }
          }}
          labelRadius={50}
        />
      </ChartContainer>
      <CategoryList
        data={totalByCategories}
        renderItem={({ item }) =>

          <HistoryCard
            title={item.name}
            amount={item.totalFormatted}
            color={item.color}
          />}
      />

    </Container>
  );
}