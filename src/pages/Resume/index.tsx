import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  TextHeader,
  CategoryList,

} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from "victory-native";

import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../../utils/categories';
import { useFocusEffect } from '@react-navigation/native';

interface TransactionData {
  type: 'positive' | 'negative'
  name: string
  amount: string
  category: string
  date: string
  color: string
}

interface CategoryData {
  name: string
  total: number
  totalFormatted: string;
  color: string
}
export function Resume() {

  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])
  const TransactionData = '@GoFinances:Cadastro';
  
  async function loadData() {
   
    const response = await AsyncStorage.getItem(TransactionData)
    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted
      .filter((expensives: TransactionData) => expensives.type === 'negative');

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


        totalByCategory.push({
          name: category.name,
          total: categorySum,
          totalFormatted,
          color: category.color
        })
      }

      setTotalByCategories(totalByCategory);
    })


  }

  useEffect(() => {

    loadData()

  }, [])
  useFocusEffect(

    useCallback(() => { loadData(); }, [])

  )
  return (
    <Container>
      <Header>
        <TextHeader>Resumo por categoria</TextHeader>
      </Header>

      <VictoryPie
        data={totalByCategories}
        x='name'
        y='total'
        innerRadius={50}
        style={{
        labels: {
        fill: 'black', fontSize: 15, padding: 7,
        }, }}

      />

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