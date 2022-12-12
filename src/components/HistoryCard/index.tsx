import React from 'react';
import { 
    Container,
    Title,
    Amount,
 } from './styles';

interface CardProps{
    color: string,
    title: string,
    amount:string,
}

export function HistoryCard({color, title, amount} : CardProps) {
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </Container>
  );
}