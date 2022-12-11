import React from 'react';
import { categories } from '../../../utils/categories';
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
  type: 'positive' | 'negative'
  name: string
  amount: string
  category: string
  date: string
}

interface Props {
  data: TransactionCardProps
}
export function TransactionCard({ data }: Props) {

  const [category] = categories.filter(
    item => item.name === data.category
  );

  return (
    <Container>
        <NameTransaction>{data.name}</NameTransaction>
        <Amount type={data.type}>
        { data.type == 'negative' ? '- ' : '' }
        { data.amount }
      </Amount>
     
        <Footer>
            <Type>
            <Icon name={category.icon}/>
            <TypeText>{category.name}</TypeText>
            </Type>
            <DateTransaction>{data.date}</DateTransaction>
        </Footer>
    </Container>
  );
}