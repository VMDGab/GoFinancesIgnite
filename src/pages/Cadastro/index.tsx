import React, { useState, useEffect } from 'react';

import { TransactionButton } from '../../components/TransactionButton';
import { InputForm } from '../../components/InputForm';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { Button } from '../../components/Button';

import { CategorySelect } from '../CategorySelect';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal } from 'react-native';

import {
  Container,
  Header,
  TextHeader,
  InputBox,
  Input,
  TransactionsTypes,
} from './styles';



export function Cadastro() {


  const schema = Yup.object().shape({

    Name: Yup.string()
    .required('Nome obrigatório'),
    Amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Valor Obrigatório')

  })


  const {
    handleSubmit,
    control,
    reset,
    formState: { errors } } = useForm({
      resolver:  yupResolver(schema)
    })

  const [transactionType, setTransactionType] = useState('')

  function HandleSelectTransactions(type: 'positive' | 'negative') {
    setTransactionType(type)
  }

  const [category, setCategory] = useState({

    key:'category',
    name:'Categoria'

  });

  const [categoryOpen, setCategoryOpen] =  useState(false)

  function OpenSelectCategory(){
    setCategoryOpen(true)
  }

  function CloseSelectCategoryModal(){
    setCategoryOpen(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header>
            <TextHeader>Cadastro</TextHeader>
          </Header>

          <InputBox>
            <InputForm
              Control={control}
              name='Name'
              error={errors.Name && errors.Name.message}
              placeholder='Nome'
            />
            <InputForm
              Control={control}
              name='Amount'
              error={errors.Amount && errors.Amount.message}
              placeholder='Preço'
            />
          </InputBox>

          <TransactionsTypes>
            <TransactionButton
              onPress={() => HandleSelectTransactions('positive')}
              title='Entrada'
              type='positive'
              isActive={transactionType === 'positive'}
            />
            <TransactionButton
              title='Saída'
              type='negative'
              onPress={() => HandleSelectTransactions('negative')}
              isActive={transactionType === 'negative'} />
          </TransactionsTypes>
        </KeyboardAvoidingView>

        <CategorySelectButton title={category.name} onPress={OpenSelectCategory}/>

        <Button title='Enviar'  />

        <Modal visible={categoryOpen}>
          <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={CloseSelectCategoryModal}/>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}