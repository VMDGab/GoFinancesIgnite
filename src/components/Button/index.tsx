import React from 'react';
import { 
    Container,
    ButtonText
} from './styles';

    interface props{
        title:string
        onPress: () => void
  
    }

export function Button({title, onPress}: props) {
  return (
    <Container onPress={onPress} >
        <ButtonText>{title}</ButtonText>
    </Container>
  );
}