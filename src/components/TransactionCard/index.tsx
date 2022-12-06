import React from 'react';
import { 
    Container,
    NameTransaction,
    Amount,
    Footer,
    Icon,
    Type,
    TypeText,
    DateTransaction,
   
 } from './styles';

  export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
  }

  interface Props{
    data: TransactionCardProps
  }

export function TransactionCard({data} : Props) {
  return (
    <Container>
        <NameTransaction>{data.name}</NameTransaction>
        <Amount type={data.type}>
        { data.type == 'negative' ? '- ' : '' }
        { data.amount }
      </Amount>
     
        <Footer>
            <Type>
            <Icon name='dollar-sign'/>
            <TypeText>compras</TypeText>
            </Type>
            <DateTransaction>{data.date}</DateTransaction>
        </Footer>
    </Container>
  );
}