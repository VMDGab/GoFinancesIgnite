import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { 
    Container,
    Input,
    Error,
 } from './styles';

interface Props extends TextInputProps{

    Control: Control,
    name: string,
    error: string
}

export function InputForm({
    Control,
    name,
    error,
    ...rest} : Props
) {
  return (
    <Container>
         <Controller
            control={Control}
            render={({  field: { onChange, value}  }) =>

            (
                <Input
                value={value}
                onChangeText={onChange}
                {...rest}
                />
            )}
        name={name}
         />
    {error && <Error>{error}</Error>}
         
    </Container>
  );
}