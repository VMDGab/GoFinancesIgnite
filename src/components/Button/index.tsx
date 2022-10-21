import React from 'react';
import { 
    Container,
    ButtonText
} from './styles';

    interface props{
        title:string
        onPress: () => void
  
    }

export function Button({title, ...rest}: props) {
  return (
    <Container {...rest} >
        <ButtonText>{title}</ButtonText>
    </Container>
  );
}