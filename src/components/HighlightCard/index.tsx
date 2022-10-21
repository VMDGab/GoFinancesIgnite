import React from 'react';
import { 
    Container,
    Header,
    Type,
    TypeIcon,
    Content,
    Amount,
    LastTransaction,
 } from './styles';


 interface Props {
   type: 'positive' | 'negative' | 'total'
   title: string
   amount: string
   lastTransaction: string
 }
export function HighlightCard({title, amount, lastTransaction, type} : Props ) {

   const icon = {
      positive: 'arrow-up-circle',
      negative: 'arrow-down-circle',
      total: 'dollar-sign'
    }

  return (
    <Container type={type}>
         <Header>
            <Type type={type}>{title}</Type>
            <TypeIcon name={icon[type]} type={type} />
         </Header>

         <Content>
            <Amount type={type}>{amount}</Amount>
            <LastTransaction type={type}>{lastTransaction}</LastTransaction>
         </Content>
    </Container>
  );
}